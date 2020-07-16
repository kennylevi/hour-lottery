<template>
  <div>
    <div class="banner">
      <!-- call header component -->
      <Header />

      <!-- banner hero starts -->
      <div class="container-fluid">
        <div class="slide_area">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12">
              <div class="slider">
                <div
                  id="carouselExampleInterval"
                  class="carousel slide carousel-fade"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item" data-interval="10000">
                      <img
                        src="@/assets/images/sf_img1.png"
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-interval="2000">
                      <img
                        src="@/assets/images/sf_img2.png"
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item active">
                      <img
                        src="@/assets/images/sf_img1.png"
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleInterval"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleInterval"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
              <div class="content-area">
                <div class="grid">
                  <div class="slogan">
                    Don't waste your time! <br />Win today!
                  </div>
                  <div class="unit">
                    <div class="title1">Sunday, May 31 Jackpot:</div>
                    <div class="title2">173 million</div>
                    <p>Play as many times and come back for the next draw</p>
                    <a class=" mt-5 btn btn-outline-primary" href="#"  @click="openSidebar()"
                      >Play Now</a
                    >

                    <div class="ticket mt-5">
                      <a href="#">see current winning <br />ticket results</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- banner hero end -->
    </div>

    <div class="clear"></div>

    <div id="content">
      <div class="bg2 p29">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-12">
              <div class="grid_4 wrap">
                <div class="thumbnail">
                  <div class="sf-steps">
                    <div class="stp-img mr-5">
                      <img src="@/assets/images/1.png" />
                    </div>
                    <div class="stp-text">
                      <h3>Register/Sign In</h3>
                      <p>Click JOIN NOW to create your account.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-12">
              <div class="grid_4 wrap">
                <div class="thumbnail">
                  <div class="sf-steps">
                    <div class="stp-img mr-5">
                      <img src="@/assets/images/2.png" />
                    </div>
                    <div class="stp-text">
                      <h3>Deposits</h3>
                      <p>Make your first deposit using any method and Play</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-12">
              <div class="grid_4">
                <div class="thumbnail">
                  <div class="sf-steps">
                    <div class="stp-img mr-5">
                      <img src="@/assets/images/3.png" />
                    </div>
                    <div class="stp-text">
                      <h3>Deposits</h3>
                      <p>we'll automatically credit you with your winnings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- trending game section  -->
      <div class="bg4 p47 mt-5 mb-2">
        <div class="container">
          <div class="games">
            <!-- calling the carousel slider  -->
            <TrendingGameSlider />
            <!-- carousel ends  -->
          </div>
        </div>
      </div>

      <!-- middle section  -->
      <div class="bg3">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="grid_6 wrap">
                <div class="image">
                  <img src="@/assets/images/winningcash22.png" alt="" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="grid_6 wrap">
                <div class="block">
                  <h2>Believe in your win! <br /><span>Good luck!</span></h2>
                  <div class="grid_6 wrap alpha mt-5">
                    <a href="#" class="link1">This is Where Winners Play</a>
                    <p>
                      If you love lotto then you'll love My Hour Lottery! We've
                      got all the world's biggest games. Here at My Hour
                      Lottery, you can take the chance to win millions every
                      single day! We also have over 350 world class games for
                      you to enjoy! We accept a wide range of payment methods
                      and offer fast and easy withdrawals too!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Latest winners  -->
      <div class="bg4 p50">
        <div class="container">
          <!-- calling winners slider  -->
          <WinnerSlider />
          <!-- slider ends hers  -->
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "../templates/Header.vue";
import Footer from "../templates/Footer.vue";
import TrendingGameSlider from "../templates/TrendingSlide.vue";
import WinnerSlider from "../templates/WinnersSlide.vue";

@Component({
  components: {
    Header,
    Footer,
    TrendingGameSlider,
    WinnerSlider
  }
})
export default class Home extends Vue {
    openSidebar() {
      this.$store.dispatch("openSidebar", true);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
