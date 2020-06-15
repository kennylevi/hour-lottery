<template>
  <form @submit.prevent="submit" novalidate class="form-signup">
    <div class="main-logo">
      <img class="img-responsive" src="@/assets/images/mhl_logo.png" />
    </div>
    <h1 class="h3 mb-2 mt-2 font-weight-normal" style="text-align: center">
      Sign Up
    </h1>
    <div>
      <input
        type="text"
        class="form-control"
        placeholder="First name"
        name="first_name"
        v-model="formData.first_name"
        required
        :class="{ 'is-invalid': $v.formData.first_name.$error }"
      />
      <div v-if="$v.formData.first_name.$error">
        <div class="k-form-error" v-if="!$v.formData.first_name.required">
          Firstname is required
        </div>
      </div>
    </div>
    <div>
      <input
        type="text"
        name="last_name"
        class="form-control"
        placeholder="Last name"
        required
        v-model="formData.last_name"
        :class="{ 'is-invalid': $v.formData.last_name.$error }"
      />
      <div v-if="$v.formData.email.$error">
        <div class="k-form-error" v-if="!$v.formData.last_name.required">
          Lastname is required
        </div>
      </div>
    </div>

    <div>
      <input
        type="email"
        name="email"
        class="form-control"
        placeholder="Email address"
        required
        v-model="formData.email"
        :class="{ 'is-invalid': $v.formData.email.$error }"
      />
      <div v-if="$v.formData.email.$error">
        <div class="k-form-error" v-if="!$v.formData.email.required">
          Email is required
        </div>
        <div class="k-form-error" v-if="!$v.formData.email.email">
          Enter a valid Email Address
        </div>
      </div>
    </div>

    <div>
      <input
        type="text"
        name="username"
        class="form-control"
        placeholder="Username"
        required
        v-model="formData.username"
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
        type="number"
        name="phone_no"
        class="form-control"
        placeholder="Phone Number"
        required
        v-model="formData.phone_no"
        :class="{ 'is-invalid': $v.formData.phone_no.$error }"
      />
      <div v-if="$v.formData.phone_no.$error">
        <div class="k-form-error" v-if="!$v.formData.phone_no.required">
          Phone Number is required
        </div>
        <div class="k-form-error" v-if="!$v.formData.phone_no.maxLength">
          Phone Number must be 11 digits
        </div>
      </div>
    </div>

    <div>
      <input
        type="password"
        id="user-pass"
        name="password"
        class="form-control"
        placeholder="Password"
        required
        v-model="formData.password"
        :class="{ 'is-invalid': $v.formData.password.$error }"
      />
      <div v-if="$v.formData.password.$error">
        <div class="k-form-error" v-if="!$v.formData.password.required">
          Password is required
        </div>

        <div class="k-form-error" v-if="!$v.formData.password.minLength">
          Password must have ast least
          {{ $v.formData.password.$params.minLength.min }}
        </div>
      </div>
    </div>

    <div>
      <input
        type="password"
        id="user-repeatpass"
        name="password_confirmation"
        class="form-control"
        placeholder="Repeat Password"
        required
        v-model="formData.password_confirmation"
        :class="{ 'is-invalid': $v.formData.password_confirmation.$error }"
      />
      <div v-if="$v.formData.password_confirmation.$error">
        <div
          class="k-form-error"
          v-if="!$v.formData.password_confirmation.required"
        >
          Password Confirmation is required
        </div>

        <div
          class="k-form-error"
          v-if="!$v.formData.password_confirmation.sameAs"
        >
          Password Confirmation do not match
        </div>
      </div>
    </div>

    <button class="btn btn-primary btn-block" type="submit">
      <i class="fa fa-user-plus"></i> Sign Up
      <i class="k-loader k-loader--light" v-if="state.loader"></i>
    </button>
    <a href="javascript:void(0)" id="cancel_signup" @click="goToLogin('LOGIN')">
      <i class="fa fa-angle-left"></i> Back
    </a>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UserService } from "../../../shared/services/User";
import { NotificationService } from "../../../shared/services/Notification";
import { Validations } from "vuelidate-property-decorators";
import {
  required,
  email,
  maxLength,
  minLength,
  sameAs
} from "vuelidate/lib/validators";
import { CUSTOM_CONSTANTS } from "../../../shared/utilities/constants";
import { setObjectEmptyHelper } from "../../../shared/utilities/helper";
// import { Validation } from "vuelidate";

@Component({})
export default class Register extends Vue {
  @Validations()
  validations = {
    formData: {
      first_name: { required },
      last_name: { required },
      email: { required, email },
      username: { required },
      phone_no: {
        required,
        maxLength: maxLength(11)
      },
      password: {
        required,
        minLength: minLength(6)
      },
      password_confirmation: {
        required,
        sameAs: sameAs("password")
      }
    }
  };

  state = {
    loader: false
  };

  formData = {
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    phone_no: "",
    password: "",
    password_confirmation: ""
  };

  goToLogin(type: string): void {
    this.$store.dispatch("openModal", type);
  }

  submit(): void {
    this.$v.$touch();
    if (this.$v.$invalid) {
      return;
    }
    console.log(this.formData);
    this.state.loader = true;
    UserService.register(this.formData)
      .then(res => {
        this.state.loader = false;
        console.log(res);
        NotificationService.success(
          `${res.data.message}`,
          CUSTOM_CONSTANTS.DEFAULT_SUCCESS_MESSAGE
        );
        this.$v.$reset();
        setObjectEmptyHelper(this.formData); // reset form
      })
      .catch(err => {
        this.state.loader = false;
        console.log(err);
        NotificationService.error(
          `${err.message}`,
          err.response,
          "Error Occurred"
        );
      });
  }
}
</script>
