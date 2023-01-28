<template>
  <div class="d-flex flex-column" style="min-height: 100vh">
    <header>
      <NavBar />
    </header>

    <main class="mt-4 flex-grow-1">
      <div class="container">
        <RouterView />
      </div>
    </main>

    <footer class="py-3">
      <FooterEnd />
    </footer>
  </div>
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
