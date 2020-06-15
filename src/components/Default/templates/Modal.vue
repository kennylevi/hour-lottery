<template>
  <div
    class="modal fade modal-fullscreen"
    id="modal-fullscreen"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  <h4 class="modal-title" id="myModalLabel">Modal title</h4>
						</div>-->
        <div class="modal-body">
          <div class="sf-logsin">
            <div class="row">
              <div class="col-md-6">
                <div class="grid_6 wrap">
                  <div class="userloginarea">
                    <div id="logreg-forms">
                      <!-- <Login component  -->
                      <login v-if="modalType === 'LOGIN'" />
                      <!-- Login component ends  -->

                      <!-- register component  -->
                      <Register v-if="modalType === 'REGISTER'" />
                      <!-- </register component end  -->
                      <!-- <form action="/reset/password/" class="form-reset">
                        <div class="main-logo">
                          <img
                            class="img-responsive"
                            src="@/assets/images/mhl_logo.png"
                          />
                        </div>
                        <h1
                          class="h3 mb-3 font-weight-normal"
                          style="text-align: center"
                        >
                          RESET PASSWORD
                        </h1>
                        <input
                          type="email"
                          id="resetEmail"
                          class="form-control"
                          placeholder="Email address"
                          required
                          autofocus
                        />
                        <button class="btn btn-primary btn-block" type="submit">
                          Reset Password
                        </button>
                        <a href="#" id="cancel_reset">
                          <i class="fas fa-angle-left"></i> Back
                        </a>
                        <button
                          type="button"
                          class="btn btn-block btn-default btn-outline-primary mt-5"
                          data-dismiss="modal"
                        >
                          Cancel
                        </button>
                      </form> -->

                      <button
                        type="button"
                        class="btn btn-block btn-outline-danger mt-3"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="holder">
                  <div class="item-holder">
                    <div class="title-holder">
                      <img src="@/assets/images/sf_img1.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Login from "./Login.vue";
import Register from "./Register.vue";

export default Vue.extend({
  name: "Modal",

  components: {
    Login,
    Register
  },

  data() {
    return {};
  },

  computed: {
    modalType(): string {
      return this.$store.getters.modalType;
    }
  },

  methods: {}
});
</script>
