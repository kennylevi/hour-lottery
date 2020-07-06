<template>
    <div id="myNav" class="overlay" v-bind:style="[openNav ? open : close]">
  <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
  <div class="overlay-content">

    <div class="card mb-3">
      <img class="img-responsive" style="display: block; width: 100%; height: auto; border: none;" src="@/assets/images/playsafe.png">
    </div>

    <div class="card mb-3">
      <div class="card-header" style="background-color: #F6CD19; font-weight: bold;">DEPOSIT NOW</div>
      <div class="card-body">
        <h5 class="card-title">Insert Coupon Code</h5>
        <p class="card-text">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Coupon Code" aria-label="Recipient's username" aria-describedby="button-addon2">
            <div class="input-group-append">
              <button class="btn btn-primary" type="button" id="button-addon2" style="background:#F6CD19; border-color: #F6CD19;  color:#000;">Apply Code</button>
            </div>
          </div>
        </p>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header" style="background-color: #26CA6C; font-weight: bold;">MY GAMES</div>
      <div class="card-body">
        <h5 class="card-title">Confirm Your Lottery Tickets</h5>
        <p class="card-text">
          <div class="input-group mb-3">
            <div class="table-responsive">
              <table class="table table-striped table_ticket yourLotteryPicks" data-page="confirm" id="yourLotteryPicksTable">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Lottery</th>
                      <th>Draw Date</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody style="font-weight: 500;color: #333;">
                    <tr>
                      <td class="removePickedLottery"><img src="@/assets/images/trash.png" height="auto" width="10" style="margin-top: 10px; cursor: pointer;"></td>
                      <td>Omoge Campus</td>
                      <td>05 Jun</td>
                        <td><span class="symbol" data-symbol="$"></span><span class="recalc" data-price="3.95">3.95m</span></td>
                    </tr> 
                  </tbody>
              </table>
            </div>
          </div>
        </p>

        <ul class="list-group alert alert-success">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Omoge Campus Game
          <span class="badge badge-primary badge-pill">₦500</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Total
          <span class="badge badge-primary badge-pill">₦500</span>
        </li>
      </ul>
      <div class="checkoutMobile">
        <button id="checkout" class="btn2 btn-orange pull-right link checkoutBth" data-link="/confirm" type="button" style="display: inline-block; border: none;">
        <span title="Tickets">Confirm &nbsp;<i class="fa fa-arrow-circle-right"></i></span>
        </button>
        <div class="clearfix"></div>
        </div>
      </div>
      
    </div>

    <div class="card mb-3">
      <img class="img-responsive" style="display: block; width: 100%; height: auto;" src="@/assets/images/contactus.png">
    </div>

  </div>
</div>
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

export default Vue.extend({
  name: "Sidebar",

  components: {
  },

  data() {
    return {
        open: {
            width: "19%"
        },
        close: {
            width: "0%"
        }
    };
  },

  computed: {
    openNav(): string {
        console.log(this.$store.getters.openNav)
      return this.$store.getters.openNav;
    }
  },

  methods: {
    closeNav() {
      this.$store.dispatch("openSidebar", false);
    }
  }
});
</script>
