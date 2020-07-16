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
      <!-- Latest winners  -->
      <div class="bg4 p50">
        <div class="container">
          <h3 class="text-success">Winning List</h3>
          <!-- calling winners slider  -->
          <div class="table-responsive">
            <table class="table table-striped table-bordered table-collapse">
              <tr>
                <th>S/N</th>
                <th>Username</th>
                <th>Game</th>
                <th>Prize</th>
                <th>Date</th>
              </tr>
              <tr v-for="(winner, index) in winners" :key="index + 1">
                <td>{{ key }}</td>
                <td>{{ winner.username }}</td>
                <td>{{ winner.game }}</td>
                <td>{{ winner.prize }}</td>
                <td>{{ winner.username }}</td>
              </tr>
            </table>
          </div>
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
import { GameService } from '@/shared/services/Games';
import { NotificationService } from '@/shared/services/Notification';
import { CUSTOM_CONSTANTS } from '@/shared/utilities/constants';

@Component({
  components: {
    Header,
    Footer
  }
})
export default class Home extends Vue {
  state = {
    loader: false
  };

  winners = [];
    openSidebar() {
      this.$store.dispatch("openSidebar", true);
    }

    mounted(){
      GameService.getWinningList().then(
      res => {
        this.state.loader = false;

        console.log(res.data.data);
        this.$v.$reset();
        this.winners = res.data.data

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
