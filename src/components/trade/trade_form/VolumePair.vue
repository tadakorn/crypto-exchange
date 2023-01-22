<template>
  <div class="d-flex mb-3 gap-4 align-items-center">
    <div>
      <h4 class="mb-0">{{ pair }}</h4>
    </div>
    <div class="line"></div>
    <div>
      <div>Price</div>
      <div>{{ pairInfo.price }}</div>
    </div>
    <div>
      <div>24h Change</div>
      <div>{{ pairInfo.change24h }}</div>
    </div>
    <div>
      <div>24h High</div>
      <div>{{ pairInfo.high24h }}</div>
    </div>
    <div>
      <div>24h Low</div>
      <div>{{ pairInfo.low24h }}</div>
    </div>
    <div>
      <div>24h Volume({{ baseCurrency }})</div>
      <div>{{ pairInfo.volume24hBase }}</div>
    </div>
    <div>
      <div>24h Volume({{ quoteCurrency }})</div>
      <div>{{ pairInfo.volume24hQuote }}</div>
    </div>
    <div class="ms-auto p-2 bd-highlight align-self-center">
      <span class="p-2">Spot Tutorial</span>
      <span class="p-2">Spot Guidance</span>
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
</style>
