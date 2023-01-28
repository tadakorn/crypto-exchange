<template>
  <div class="card card-cover h-100 rounded-4 shadow-lg clickhere">
    <div class="d-flex flex-column h-50 p-4 pb-3 text-white text-shadow-1">
      <h6 class="text-per">APR</h6>
      <p class="pt-1 mt-3 mb-4 lh-1 fw-bold text-per">{{ percent }}</p>

      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-2">
          <img
            :src="`https://cryptoicon.s3.amazonaws.com/32/color/${coin.toLowerCase()}.png`"
            alt="Bootstrap"
            width="32"
            height="32"
            class="rounded-circle border border-white text-per"
          />
          <div class="text-per">{{ coin }}</div>
        </div>

        <div class="d-flex align-items-center justify-content-center icon-box">
          <!-- <a href="#"> -->
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
          <!-- </a> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["percent", "coin"],
};
</script>

<style scoped>
.clickhere {
  cursor: pointer;
  background-color: #f5f5f5;
}
.text-per {
  color: black;
}
.clickhere:hover {
  border-color: gold;
}
.icon-box {
  border-radius: 20px;
  background-color: gold;
  width: 32px;
  height: 32px;
}

.icon-box:hover {
  background-color: gray;
}
</style>
