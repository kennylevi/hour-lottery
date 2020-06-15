<template>
  <div>
    <div class="row">
      <div class="grid_12">
        <h2>latest winners:</h2>
      </div>
    </div>
    <div class="row">
      <div class="grid_12 col-md-12 wrap">
        <carousel
          :autoplay="true"
          :nav="false"
          :autoplayHoverPause="true"
          :loop="true"
          :responsive="{ 0: { items: 1 }, 768: { items: 4 } }"
        >
          <div class="item">
            <div class="thumb">
              <img src="@/assets/images/page1_img3.png" alt="" />
              <div class="caption">
                <a href="#" title="">Tamara Smith</a>
                <p>
                  Won ₦100,000 worth <br />
                  <span>playing ₦1000 Game 1</span>
                </p>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="thumb">
              <img src="@/assets/images/page1_img4.png" alt="" />
              <div class="caption">
                <a href="#" title="">Mark Nelson</a>
                <p>
                  Won ₦100,000 worth <br /><span>playing ₦1000 Game 3</span>
                </p>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="thumb">
              <img src="@/assets/images/page1_img2.png" alt="" />
              <div class="caption">
                <a href="#" title="">George Johnson</a>
                <p>
                  Won ₦100,000 worth <br />
                  <span>playing ₦1000 Game 1</span>
                </p>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="thumb">
              <img src="@/assets/images/page1_img2.png" alt="" />
              <div class="caption">
                <a href="#" title="">Richard Clark</a>
                <p>
                  Won ₦100,000 worth <br />
                  <span>playing ₦1000 Game 2</span>
                </p>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="thumb">
              <img src="@/assets/images/page1_img3.png" alt="" />
              <div class="caption">
                <a href="#" title="">Tamara Smith</a>
                <p>
                  Won ₦100,000 worth <br />
                  <span>playing ₦1000 Game 2</span>
                </p>
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
  name: "WinnerSlider",
  components: {
    carousel
  }
};
</script>
