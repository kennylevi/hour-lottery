<template>
  <form class="form-signin" @submit.prevent="submit" novalidate>
        <div class="main-logo">
          <img class="img-responsive" src="@/assets/images/mhl_logo2.png">
      </div>
        <h1 class="h3 mb-3 font-weight-normal" style="text-align: center"> Load Wallet </h1>
          <div>
      <input
        type="text"
        id="inputAmount"
        name="amount"
        v-model="formData.amount"
        class="form-control"
        placeholder="Amount"
        required
        :class="{ 'is-invalid': $v.formData.amount.$error }"
      />
      <div v-if="$v.formData.amount.$error">
        <div class="k-form-error" v-if="!$v.formData.amount.required">
          Amount is required
        </div>
      </div>
    </div>
        
    <paystack v-if="amount > 0"
        :amount="amount"
        :email="email"
        :paystackkey="paystackkey"
        :reference="reference"
        :callback="callback"
        :close="close"
        :embed="false"
    >
       <i class="fas fa-money-bill-alt"></i>
       Make Payment
    </paystack>
      </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Paystack  from "./Paystack.vue";
import { UserService } from '@/shared/services/User';
import { NotificationService } from '@/shared/services/Notification';
import { Validations } from "vuelidate-property-decorators";
import { required } from "vuelidate/lib/validators";
import { CUSTOM_CONSTANTS } from '@/shared/utilities/constants';
import { setObjectEmptyHelper, triggerModalOrOverlay } from '@/shared/utilities/helper';
import {token} from '@/shared/services/Token';

@Component({
  components: {Paystack}
})
export default class EnterAmount extends Vue {
  @Validations()
  validations = {
    formData: {
      amount: { required }
    }
  };

  state = {
    loader: false
  };
  get paystackkey(){
    return "pk_test_bae26ef230034f8571e358df336be39a05afa0e7"
  } ; //paystack public key
  get email() {
    return this.user.email
  }; // Customer email

  get amount(){
    return 100 * parseFloat(this.formData.amount)
  }

  formData = {
    amount: ""
  };
  
  get reference(){
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( let i=0; i < 10; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  get user(){
    console.log("Token: ",this.$store.getters.getUser);
    return token.getAuthUser();
  }

  goToRegister(type: string) {
    this.$store.dispatch("openModal", type);
  }

  submit(): void {
    this.$v.$touch();
    if (this.$v.$invalid) {
      return;
    }
    this.state.loader = true;
  }

  callback(response: any): void{
      console.log(response)
      UserService.fundWallet(response).then(
      res => {
        this.state.loader = false;

        console.log(res.data.data);
        this.$v.$reset();
        var user = this.$store.getters.getUser
        user.wallet = res.data.data
        triggerModalOrOverlay("CLOSE",  "modal-fullscreen")
        NotificationService.success(
          "Wallet Funded Successfully",
          CUSTOM_CONSTANTS.DEFAULT_SUCCESS_MESSAGE,
          6
        );
      },
      err => {
        this.state.loader = false;
        console.log(err.response);
        NotificationService.error(
          err.response.data.message,
          null,
          CUSTOM_CONSTANTS.DEFAULT_ERROR_MESSAGE
        );
      }
    );
  }
  close(): void{
      console.log("Payment closed")
  }
}
</script>
