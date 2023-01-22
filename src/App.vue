<template>
  <div class="header">
    <NavBar />
  </div>

  <main class="mt-4">
    <div class="container">
      <div class="row">
        <div class="col">
          <RouterView />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    RouterView,
    NavBar,
  },
};
</script>

<style scoped></style>
