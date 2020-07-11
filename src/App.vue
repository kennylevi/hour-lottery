/* eslint-disable prettier/prettier */
<template>
  <div id="app">
    <notifications
      group="user"
      ignoreDuplicate="true"
      class="animated fadeInDown notification"
      animation-name="'bounceInRight'"
    />
    <router-view />
  </div>
</template>

<style src="./global-style.css" />
<style src="@/assets/css/animate.min.css" />
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.notification {
  z-index: 99999 !important;
}
</style>
