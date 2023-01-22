<template>
  <div class="d-flex bd-highlight">
    <div class="me-auto p-2 bd-highlight">Available Balance</div>
    <div class="p-2 bd-highlight">
      <a
        href="#"
        :style="{
          color: numberColorClass,
        }"
        >{{ availableBuyBalance }}</a
      >
    </div>
    <div class="p-2 bd-highlight">{{ currency }}</div>
  </div>
</template>

<script>
export default {
  props: ["availableBuyBalance", "currency", "numberColorClass"],
};
</script>

<style scoped></style>
