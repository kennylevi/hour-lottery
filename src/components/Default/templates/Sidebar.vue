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
                        <input type="text" class="form-control" placeholder="Coupon Code" aria-label="Recipient's username"
                               aria-describedby="button-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="button" id="button-addon2"
                                    style="background:#F6CD19; border-color: #F6CD19;  color:#000;">Apply Code
                            </button>
                        </div>
                    </div>
                    </p>
                </div>
            </div>

            <div class="card mb-3">
                <div class="card-header" style="background-color: #26CA6C; font-weight: bold;">MY GAMES</div>
                <div class="card-body">
                    <h5 class="card-title">Confirm Your Lottery Tickets</h5>
                    <div class="card-text">
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
                                <tr v-if="games.length" v-for="(game, index) in games">
                                    <td class="removePickedLottery">
                                      <img src="@/assets/images/trash.png" height="auto" width="10" style="margin-top: 10px; cursor: pointer;"
                                           v-on:click="removeGame(index)">
                                    </td>
                                    <td>{{game && game.name}}</td>
                                    <td>05 Jun {{parseFloat(game && game.amount)}}</td>
                                    <td><span class="symbol"></span><span class="recalc">{{game && game.amount}}</span></td>
                                </tr>
                                <tr v-if="!games.length">
                                    <td colspan="5" class="text-center">
                                        <span>No Game Added</span> <br><i class="mt-2 fa fa-shopping-basket text-success"></i>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                      </div>
                    </div>

                    <ul class="list-group alert alert-success">
                        <li class="list-group-item d-flex justify-content-between align-items-center" v-if="coupon">

                            <span class="badge badge-primary badge-pill">₦500</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Total
                            <span class="badge badge-primary badge-pill">
                                ₦{{games.length && games.reduce((a, {amount}) => Number(a) + Number(amount), 0) + '.' + '00'}}
                            </span>
                        </li>
                    </ul>
                    <div class="checkoutMobile">
                        <button id="checkout" class="btn2 btn-orange pull-right link checkoutBth" data-link="/confirm" type="button"
                                style="display: inline-block; border: none;">
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
    import {Component, Vue} from 'vue-property-decorator';

    export default Vue.extend({
        name: 'Sidebar',

        components: {},

        destroyed() {
          localStorage.removeItem('GAMES');
        },

        data() {
            return {
                open: {
                    width: '20%'
                },
                close: {
                    width: '0%'
                },
                coupon: false
            };
        },

        watch: {
            amount(): any {

            }
        },

        computed: {

            openNav(): string {
                // console.log(this.$store.getters.openNav);
                if (window.innerWidth < 768) {
                  this.open.width = '100%'
                }
                return this.$store.getters.openNav;
            },

            games(): any[] {
                console.log(this.$store.getters.games);
                let games = [];
                // check if the store as games
                if (!this.$store.getters.games) {
                    console.log('YES');
                    games = JSON.parse(<any>localStorage.getItem('GAMES'));
                } else {
                    console.log('NO');
                    games = this.$store.getters.games || JSON.parse(<any>localStorage.getItem('GAMES'));
                }
                if (this.$store.getters.games.length) {
                    localStorage.setItem('GAMES', JSON.stringify(this.$store.getters.games));
                }
                return games
            }
        },

        methods: {
            closeNav() {
                this.$store.dispatch('openSidebar', false);
            },
            removeGame(index: number): void {
              console.log(index);
              this.games.splice(index, 1);
            }
        }
    });
</script>
