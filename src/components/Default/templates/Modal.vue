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

                      <!-- ForgotPassword component  -->
                      <ForgotPassword v-if="modalType === 'FORGOTPASSWORD'" />
                      
                      <!-- register component  -->
                      <Register v-if="modalType === 'REGISTER'" />

                      <!-- WalletLoad component  -->
                      <EnterAmount v-if="modalType === 'ENTERAMOUNT'" />
                      <!-- </EnterAmount component end  -->

                      <TicketStatus v-if="modalType === 'TICKET_STAKES'"/>

                      <button
                       id="closeBtn"
                        type="button"
                        class="btn btn-block btn-outline-danger mt-3"
                        data-dismiss="modal"
                        ref="closeBtn"
                      >
                        Close
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
import ForgotPassword from "./ForgotPassword.vue";
import EnterAmount from "./EnterAmount.vue";
import {triggerModalOrOverlay} from '@/shared/utilities/helper';
import TicketStatus from '@/components/Default/templates/TicketStatus.vue';

export default Vue.extend({
  name: "Modal",

  components: {
    Login,
    Register,
    ForgotPassword,
    EnterAmount,
    TicketStatus
  },

  data() {
    return {};
  },

  computed: {
    modalType(): string {
      console.log("Modal type", this.$store.getters.modalType);
      if(this.$store.getters.modalType == 'CLOSE') {
        //console.log(this.$refs);
        (<HTMLElement>document.getElementById('closeBtn')).click();
      }
      return this.$store.getters.modalType;
    }
  },

  methods: {}
});
</script>

   
<style scoped>
.modal-dialog{
   min-width: 100%;
}
</style>
