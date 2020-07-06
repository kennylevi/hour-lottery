<template>
  <div id="top" class="main_page nimbus-is-editor">
    <!-- call header component -->
    <header id="header" class="header">
      <Sidebar></Sidebar>
      <router-view />
    </header>
  </div>
</template>

<script>
import Sidebar from "./templates/Sidebar";

export default {
  name: "index",
  components: {
    Sidebar
  },

};
</script>

<style src="../../assets/css/grid.css" />
<style src="../../assets/css/style.css" />
<style src="../../assets/css/owl.carousel.css" />
