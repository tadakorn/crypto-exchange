<template>
  <div class="d-flex market">
    <div class="me-auto p-2">{{ title }}</div>
    <div class="p-2">
      <input class="market-input" type="number" :placeholder="placeholder" />
    </div>
    <div class="p-2">{{ currency }}</div>
  </div>
</template>

<script>
export default {
  props: ["title", "placeholder", "currency"],
};
</script>

<style>
.market {
  position: relative;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5vw;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.market-input {
  border: 0;
  width: 100%;
  margin: 0;
  color: #333;
  position: relative;
  font-size: 13px;
  background: 0 0;
  text-align: right;
  flex: 2;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
  border: none;
  outline: none;
}
</style>
