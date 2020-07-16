<template>
  <div class="banner2">
    <Header />

    <div id="content">
      <div class="bg4 p50">
        <div class="container">
          <div class="row">
            <div class="contaniner">
                <p><strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit. Nulla tempor quis ipsum aliquam tristique. In in mollis ante. Maecenas a consequat tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus nec nisl ut risus iaculis feugiat. Fusce sit amet urna nibh. Sed et sapien consectetur, lacinia neque quis, hendrerit velit.</p>
                <p>Praesent varius, neque in hendrerit elementum, elit tortor iaculis justo, eu sagittis nulla odio eget sapien. Fusce iaculis ligula ipsum, vitae vulputate mauris volutpat sit amet. Vivamus maximus est non justo scelerisque molestie. Etiam et ex ante. Fusce a augue gravida, finibus dui id, venenatis sapien. Vivamus ullamcorper ultrices metus, eu lobortis ex. Nunc volutpat arcu vel massa sollicitudin rhoncus. Sed mollis vulputate est. Praesent in tortor nec odio sagittis volutpat vel et mi. Sed id neque vitae velit viverra fringilla et at ipsum. Nam sed neque ut arcu maximus lobortis. Aenean ut varius urna. In congue quam quis est gravida vehicula. Praesent malesuada purus sapien, quis sollicitudin nisi congue in.</p>
                <p>Curabitur a est scelerisque, ornare sem tincidunt, sollicitudin leo. Sed in cursus purus. Nulla quis mi gravida, interdum ligula non, efficitur lectus. In odio elit, bibendum non dictum ac, aliquam vitae ipsum. Etiam sem sem, pharetra sit amet quam commodo, congue tempor enim. Nam eu urna enim. Sed consequat, lectus vel consequat tristique, nunc metus molestie arcu, in mollis neque justo id massa. Praesent ornare elit nec libero pulvinar, vel volutpat lectus gravida. Proin fermentum, est sed interdum convallis, nibh est mollis nulla, ut ullamcorper eros ante vitae lectus. Donec ex lorem, consectetur id sodales ac, finibus vitae ex. Morbi risus turpis, laoreet id quam non, mollis vulputate turpis. Morbi varius lorem sed quam iaculis, sit amet pharetra tortor auctor. Donec mattis quis sem ac ullamcorper. Aenean vitae quam nulla. Donec sit amet lacus neque.</p>
                <p>Cras nibh nisl, ornare at sollicitudin ac, commodo vel ligula. Curabitur est libero, dignissim et orci nec, volutpat venenatis turpis. Phasellus luctus est ac ante interdum, et consectetur dolor laoreet. Donec iaculis, ante eget pharetra accumsan, turpis lorem semper velit, a scelerisque massa felis a sapien. Etiam non lacus nisl. Etiam tincidunt ipsum dui, a vehicula nisi fringilla vel. Aenean sed leo leo. Aliquam lacinia sem et diam vestibulum, ac vulputate augue congue. Integer rutrum nisi eu dui euismod, sed tempus est vestibulum. Etiam interdum nulla convallis ex vestibulum, ac dignissim erat egestas. Nunc maximus, erat pharetra mattis pulvinar, ipsum elit consequat felis, eget tempor dui leo ac dolor. Nulla iaculis nulla eget ipsum feugiat venenatis.</p>
                <p>Proin aliquet et nunc ut suscipit. Donec iaculis, enim nec congue posuere, eros odio convallis augue, eu suscipit elit quam in mauris. Donec sit amet eros non ante imperdiet laoreet. Vivamus vitae diam nibh. Integer ac ex pellentesque tellus porttitor suscipit nec nec leo. Suspendisse congue consectetur justo, at cursus dolor maximus sit amet. Pellentesque risus risus, bibendum ac ante ut, rhoncus suscipit neque.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "../templates/Header.vue";

@Component({
  components: {
    Header
  }
})
export default class About extends Vue {
  // @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
