<template>
  <form class="form-signin" @submit.prevent="submit" novalidate>
    <div class="main-logo">
      <img class="img-responsive" src="@/assets/images/mhl_logo.png" />
    </div>

    <h1 class="h3 mb-3 font-weight-normal" style="text-align: center">
      Sign in
    </h1>
    <!-- <div class="social-login">
      <button class="btn facebook-btn btn-block social-btn" type="button">
        <span> <i class="fa fa-facebook"></i> Sign in with Facebook </span>
      </button>
      <button class="btn google-btn btn-block social-btn" type="button">
        <span> <i class="fa fa-google-plus"></i> Sign in with Google+ </span>
      </button>
    </div>
    <p style="text-align:center">OR</p> -->
    <div>
      <input
        type="text"
        id="inputEmail"
        name="username"
        v-model="formData.username"
        class="form-control"
        placeholder="Email address"
        required
        :class="{ 'is-invalid': $v.formData.username.$error }"
      />
      <div v-if="$v.formData.username.$error">
        <div class="k-form-error" v-if="!$v.formData.username.required">
          Username is required
        </div>
      </div>
    </div>
    <div>
      <input
        type="password"
        id="inputPassword"
        name="password"
        v-model="formData.password"
        class="form-control"
        placeholder="Password"
        required
        :class="{ 'is-invalid': $v.formData.password.$error }"
      />
      <div v-if="$v.formData.password.$error">
        <div class="k-form-error" v-if="!$v.formData.password.required">
          Password is required
        </div>
      </div>
    </div>

    <button class="btn btn-success btn-block" type="submit">
      <i class="fa fa-sign-in"></i> Sign in
      <i class="k-loader k-loader--light" v-if="state.loader"></i>
    </button>
    <a href="#" id="forgot_pswd">Forgot password?</a>
    <hr />
    <!-- <p>Don't have an account!</p>  -->
    <button
      class="btn btn-primary btn-block"
      type="button"
      id="btn-signup"
      @click="goToRegister('REGISTER')"
    >
      <i class="fa fa-user-plus"></i> Sign up New Account
    </button>
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
export default class Login extends Vue {
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
