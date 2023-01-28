<template>
  <div class="header">
    <NavBar />
  </div>

  <main class="mt-4">
    <div class="container">
      <RouterView />
    </div>
  </main>

  <FooterEnd />
</template>

<script>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import FooterEnd from "./components/FooterEnd.vue";

export default {
  components: {
    RouterView,
    NavBar,
    FooterEnd,
  },
};
</script>

<style scoped></style>
