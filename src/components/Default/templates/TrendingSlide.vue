<template>
  <div>
    <div class="row">
      <div class="grid_10 mb-3">
        <h2>OUR TRENDING GAMES</h2>
      </div>
    </div>

<!--    skeleton loader starts-->
    <div class="skeleton" v-if="loader">
      <div class="card">
        <figure class="sk-loading"></figure>
        <div class="card-base sk-loading"></div>
      </div>
      <div class="card">
        <figure class="sk-loading"></figure>
        <div class="card-base sk-loading"></div>
      </div>
      <div class="card">
        <figure class="sk-loading"></figure>
        <div class="card-base sk-loading"></div>
      </div>
    </div>
<!--    skeleton loader ends-->
    <div class="row" v-if="!loader">
      <div class="grid_12 col-md-12 wrap">
        <carousel
          :autoplay="true"
          :nav="false"
          :autoplayHoverPause="true"
          :loop="true"
          :autoHeight="true"
          :autoWidth="true"
          :responsive="{ 0: { items: 1 }, 768: { items: 4 } }"
        >

          <div class="item" v-for="(game, index) in games" :key="index + 1">
            <div class="thumb">
              <img :src="require(`@/assets/images/${games.length === 2 ? 'game1' : 'game2'}.png`)" :alt="game.name" />
              <div class="caption">
<!--                <p>1 day 15 hours</p>-->
                <p>{{game.name}}</p>
                <button class="ml-5 btn btn-outline-primary" :disabled="!game.is_enabled" v-on:click="playGame(game, index)">Play Now</button>
              </div>
            </div>
          </div>


        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import {GameService} from '@/shared/services/Games';
import {NotificationService} from '@/shared/services/Notification';
import {CUSTOM_CONSTANTS} from '@/shared/utilities/constants';
import {token} from '@/shared/services/Token';
import {triggerModalOrOverlay} from '@/shared/utilities/helper';

export default {
  name: "TrendingGameSlider",
  components: { carousel },
  data() {
    return {
      loader: false,
      games: []
    }
  },
  created() {
    this.loader = true;
    GameService.getGames().then(res => {
      console.log(res.data);
      this.games = res.data.data; // assign games
      this.loader = false;
    }, err => {
      this.loader = false;
      NotificationService.error('Error', err, CUSTOM_CONSTANTS.DEFAULT_ERROR_MESSAGE);
    })
  },

  methods: {
    playGame(data, index) {
      console.log(data);
      if (!token.isTokenLogged()) {
        triggerModalOrOverlay("SHOW", "modal-fullscreen");
        this.$store.dispatch('openModal', 'LOGIN');
        return NotificationService.info('Login to continue', 'Not Logged In!');
      }
      this.$store.dispatch("openSidebar", true);
      this.$store.dispatch('addGame', data);
      this.games[index].is_enabled = false
    }
  }
};
</script>

<style lang="scss">
  @import '../../../scss/skeletons.scss';
</style>
