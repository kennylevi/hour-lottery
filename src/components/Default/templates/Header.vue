<template>
  <div id="stuck_container">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/">
          <img src="@/assets/images/mhl_logo.png" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav sf-menu ml-auto mt-2 mt-lg-0">
            <li class="nav-item active current">
              <a class="nav-link" href="/">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="about">
                About
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Games</a
              >
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="games.html">ALL GAMES</a>
              </div>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Results</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Winners</a
              >
            </li>
            <li class="nav-item">
              <a
                @click="changeModalLink('LOGIN')"
                class="btn btn-outline-default btn-open-modal"
                data-toggle="modal"
                data-target="#modal-fullscreen"
                href="#"
                >Sign in</a
              >
            </li>
            <li class="nav-item">
              <a
                @click="changeModalLink('REGISTER')"
                class="btn btn-outline-default btn-open-modal"
                data-toggle="modal"
                data-target="#modal-fullscreen"
                href="#"
                >Sign up</a
              >
            </li>
          </ul>
        </div>
      </nav>

      <!-- login modal section components-->
      <Modal />
    </div>
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  components: {
    Modal
  },

  data() {
    return {};
  },

  methods: {
    changeModalLink(event) {
      this.$store.dispatch("openModal", event); // assign data modal type to coming event
    }
  }
};
</script>

<style></style>
