<template>
  <div class="d-flex justify-content-between align-items-center">
    <div>
      <h5 class="mb-0">{{ pair }}</h5>
    </div>
    <div class="line"></div>
    <div class="text-body">
      <div>Price</div>
      <div>{{ pairInfo.price }}</div>
    </div>
    <div class="text-body">
      <div>24h Change</div>
      <div>{{ pairInfo.change24h }}</div>
    </div>
    <div class="text-body">
      <div>24h High</div>
      <div>{{ pairInfo.high24h }}</div>
    </div>
    <div class="text-body">
      <div>24h Low</div>
      <div>{{ pairInfo.low24h }}</div>
    </div>
    <div class="text-body">
      <div>24h Volume({{ baseCurrency }})</div>
      <div>{{ pairInfo.volume24hBase }}</div>
    </div>
    <div class="text-body">
      <div>24h Volume({{ quoteCurrency }})</div>
      <div>{{ pairInfo.volume24hQuote }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pair"],
  data() {
    return {
      pairPrice: "Bitcoin Price",
      pairInfo: {
        price: 21100,
        change24h: 21100,
        high24h: 21100,
        low24h: 21100,
        volume24hBase: 21100,
        volume24hQuote: 21100,
      },
    };
  },
  computed: {
    quoteCurrency() {
      return this.pair.split("/")[1];
    },
    baseCurrency() {
      return this.pair.split("/")[0];
    },
  },
};
</script>

<style scoped>
.line {
  width: 1px;
  height: 50px;
  position: relative;
  background-color: #b2b2b2;
}
.text-body {
  font-size: 13px;
}
</style>
