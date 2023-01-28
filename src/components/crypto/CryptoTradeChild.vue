<template>
  <a href="#" class="device-link"
    ><img :src="`/img/${img}.png`" width="32" height="32" />
    <div>{{ title }}</div>
  </a>
</template>

<script>
export default {
  props: ["img", "title"],
};
</script>

<style scoped>
.device-link {
  text-decoration: none;
  color: black;
}
</style>
