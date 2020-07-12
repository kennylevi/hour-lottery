<template>
  <div id="stuck_container">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/">
          <img src="@/assets/images/mhl_logo.png" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav sf-menu ml-auto mt-2 mt-lg-0">
            <li class="nav-item active current">
              <a class="nav-link" href="/">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'About', hash: ''}">
                About
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Games</a
              >
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="games.html">ALL GAMES</a>
              </div>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Results</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Winners</a
              >
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <a
                @click="changeModalLink('LOGIN')"
                class="btn btn-outline-default btn-open-modal"
                data-toggle="modal"
                data-target="#modal-fullscreen"
                href="#"
                >Sign in</a
              >
            </li>
            <li v-if="!isLoggedIn" class="nav-item">
              <a
                @click="changeModalLink('REGISTER')"
                class="btn btn-outline-default btn-open-modal"
                data-toggle="modal"
                data-target="#modal-fullscreen"
                href="#"
                >Sign up</a
              >
            </li>
          </ul>
          <ul v-if="isLoggedIn" class="nav navbar-nav sf-menu navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <span class="glyphicon glyphicon-user"></span>
                <strong
                  >Welcome, {{ userData.first_name }} {{ userData.last_name }}</strong
                >
                <span class="glyphicon glyphicon-chevron-down"></span>
              </a>
              <ul class="dropdown-menu userLoginName">
                <li>
                  <div class="navbar-login">
                    <div class="row">
                      <div class="col-lg-12 col-md-12 mb-3">
                        <p class="text-right" style="font-size: 16px;">
                          <strong
                            >{{ userData.first_name }} {{ userData.last_name }}</strong
                          >
                        </p>
                        <p class="text-right small">
                          Available Balance: {{ $n(walletBalance, "currency") }}
                        </p>
                        <p class="text-right">
                          <a
                            @click="changeModalLink('ENTERAMOUNT')"
                            href="#"
                            class="btn btn-success mt-2"
                            data-toggle="modal"
                            data-target="#modal-fullscreen"
                            style="background: #F6CD19; font-size: 12px; color: #000; padding: 3px 20px; border: none; border-radius: 0;"
                            >Fund Wallet</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="divider"></li>
                <!-- Button trigger modal -->
                <li>
                  <div class="list-group">
                  <a
                    href="javascript:dirtypop();"
                    class="list-group-item list-group-item-action"
                    data-toggle="modal"
                    data-target="#betslip"
                  >
                    Bet List
                  </a>
                  <a href="#" class="list-group-item list-group-item-action"
                    >Transaction List</a
                  >
                  <a
                    href="javascript:dirtypop();"
                    data-toggle="modal"
                    data-target="#changePassword"
                    class="list-group-item list-group-item-action"
                    >Change Password</a
                  >
                  <a href="#" class="list-group-item list-group-item-action"
                    >Account</a
                  >
                  <a
                    href="#"
                    class="list-group-item list-group-item-action disabled"
                    tabindex="-1"
                    aria-disabled="true"
                    >Vestibulum at eros</a
                  >
                </div>
                <hr />
                </li>
                

                <li>
                  <div class="navbar-login navbar-login-session">
                    <div class="row">
                      <div class="col-lg-12 col-md-12">
                        <p>
                          <a
                            @click="logout()"
                            href="#"
                            class="btn btn-danger btn-block"
                            style="border-radius: 0px;"
                            >Logout</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <!-- login modal section components-->
      <Modal />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Modal from "./Modal.vue";
import {
  setObjectEmptyHelper,
  triggerModalOrOverlay
} from '@/shared/utilities/helper';
import {token} from '@/shared/services/Token';

export default Vue.extend({
  name: "Header",
  components: {
    Modal
  },

  data() {
    return {
      walletBalance: 0
    };
  },

  computed: {
    isLoggedIn(): boolean {
      console.log(this.$store.getters.loggedIn);
      console.log("Storage user", token.getAuthUser())
      return this.$store.getters.loggedIn || !!token.getAuthUser();
    },

    userData(): any {
      console.log("Token: ", this.$store.getters.getUser);
      this.walletBalance =  (token.getAuthUser() && token.getAuthUser().wallet.wallet_balance) || this.$store.getters.getUser.wallet.wallet_balance;
      return token.getAuthUser() || this.$store.getters.getUser
    }
  },

  watch: {
    user(val: any): any {
      console.log("User: ", val);
      this.walletBalance = val.wallet.wallet_balance;
      //return this.$store.getters.getUser;
    }
  },

  methods: {
    changeModalLink(event: string): void {
      triggerModalOrOverlay("OPEN", "modal-fullscreen");
      this.$store.dispatch("openModal", event); // assign data modal type to coming event
    },

    logout(): void {
      token.removeAuthUser();
      this.$store.dispatch("loggedIn", false); // assign data modal type to coming event
    }
  }
});
</script>
