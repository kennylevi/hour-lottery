<template>
  <div>
    <div class="row">
      <div class="grid_10 mb-3">
        <h2>OUR TRENDING GAMES</h2>
      </div>
    </div>

    <div class="row">
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
          <div class="item">
            <div class="thumb">
              <img src="@/assets/images/game1.png" alt="" />
              <div class="caption">
                <p>1 day 15 hours</p>
                <a class=" ml-5 btn btn-outline-primary" href="#">Play Now</a>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="thumb">
              <img src="@/assets/images/game2.png" alt="" />
              <div class="caption">
                <p>1 day 15 hours</p>
                <a class=" ml-5 btn btn-outline-primary" href="#">Play Now</a>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="thumb">
              <img src="@/assets/images/game1.png" alt="" />
              <div class="caption">
                <p class="awaiting">awaiting results</p>
                <a class=" ml-5 btn disabled btn-outline-primary" href="#"
                  >Play Now</a
                >
              </div>
            </div>
          </div>

          <div class="item">
            <div class="thumb">
              <img src="@/assets/images/game2.png" alt="" />
              <div class="caption">
                <p>1 day 15 hours</p>
                <a class=" ml-5 btn btn-outline-primary" href="#">Play Now</a>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="thumb">
              <img src="@/assets/images/game1.png" alt="" />
              <div class="caption">
                <p>1 day 15 hours</p>
                <a class=" ml-5 btn btn-outline-primary" href="#">Play Now</a>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="thumb">
              <img src="@/assets/images/game2.png" alt="" />
              <div class="caption">
                <p>1 day 15 hours</p>
                <a class=" ml-5 btn btn-outline-primary" href="#">Play Now</a>
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

export default {
  name: "TrendingGameSlider",
  components: { carousel }
};
</script>
