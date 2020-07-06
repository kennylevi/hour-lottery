<template>
  <form class="form-login" @submit.prevent="submit" novalidate>
        <div class="main-logo">
          <img class="img-responsive" src="@/assets/images/mhl_logo2.png">
      </div>
        <h1 class="h3 mb-3 font-weight-normal" style="text-align: center"> RESET PASSWORD</h1>
          <div>
      <input
        type="text"
        id="inputEmail"
        name="username"
        v-model="formData.email"
        class="form-control"
        placeholder="Email address"
        required
        :class="{ 'is-invalid': $v.formData.email.$error }"
      />
      <div v-if="$v.formData.email.$error">
        <div class="k-form-error" v-if="!$v.formData.email.required">
          Email is required
        </div>
      </div>
    </div>
          <button class="btn btn-success btn-block" type="submit">
      <i class="fa fa-sign-in"></i> Reset Password
      <i class="k-loader k-loader--light" v-if="state.loader"></i>
    </button>
          <a href="#" id="cancel_reset" @click="goToRegister('LOGIN')"><i class="fas fa-angle-left"></i> Back</a>
      </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UserService } from "../../../shared/services/User";
import { NotificationService } from "../../../shared/services/Notification";
import { Validations } from "vuelidate-property-decorators";
import { required } from "vuelidate/lib/validators";
import { CUSTOM_CONSTANTS } from "../../../shared/utilities/constants";
import { setObjectEmptyHelper } from "../../../shared/utilities/helper";
import Token from "../../../shared/services/Token";
// import { Validation } from "vuelidate";

const token = new Token(); // instatitae token 

@Component({})
export default class ForgotPassword extends Vue {
  @Validations()
  validations = {
    formData: {
      email: { required }
    }
  };

  state = {
    loader: false
  };

  formData = {
    Email: ""
  };

  goToRegister(type: string) {
    this.$store.dispatch("openModal", type);
  }

  submit(): void {
    this.$v.$touch();
    if (this.$v.$invalid) {
      return;
    }
    this.state.loader = true;
    // eslint-disable-next-line no-unreachable
    UserService.login(this.formData).then(
      res => {
        this.state.loader = false;
        console.log(res);
        this.$v.$reset();
        setObjectEmptyHelper(this.formData);
        // let save the toke in the storage
        token.setAuthUser(res.data);
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
}
</script>
