<template>
    <!--========================================================
                            FOOTER 
    =========================================================-->

<footer id="footer">
    <div class="container">
        <div class="row">
            <div class="grid_12">
                <a class="logo1" href="index.html"><img src="images/logo1.png" alt=""></a>
                <div class="copy">
                    <span>&nbsp;&copy;</span>
                    <span id="copyright-year"></span>
                    <span>|</span>
                    <span><a href="index-5.html">Privacy Policy</a></span> <!--{%FOOTER_LINK} -->
                </div>
            </div>       
        </div>
    </div>  
</footer>
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
export default class Footer extends Vue {
  @Validations()
  validations = {
    formData: {
      username: { required },
      password: { required }
    }
  };

  state = {
    loader: false
  };

  formData = {
    username: "",
    password: ""
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
