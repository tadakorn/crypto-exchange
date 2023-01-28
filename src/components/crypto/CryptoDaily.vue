<template>
  <h2>Earn daily rewards on your idle tokens</h2>
  <h4 class="pb-2 border-bottom">
    Simple & Secure. Search popular coins and start earning.
  </h4>
  <div class="d-flex flex-column h-100 p-2 pb-1 text-white text-shadow-1 mt-3">
    <div class="row align-items-stretch g-4 py-2">
      <!-- วน loop และสร้าง Data ตามจำนวนรอบเพื่อให้ขึ้น Display ตามจำนวน -->
      <div
        class="col-sm-12 col-md-3"
        v-for="data in earnCoinList"
        :key="data.coin"
      >
        <CryptoDailyChild :percent="data.percent" :coin="data.coin" />
      </div>
    </div>
  </div>
  <button type="button" class="btn btn-secondary ms-3 mt-3">Start to Earn</button>
</template>

<script>
import CryptoDailyChild from "./CryptoDailyChild.vue";

export default {
  components: {
    CryptoDailyChild,
  },
  data() {
    return {
      earnCoinList: [
        {
          coin: "USDT",
          percent: "0.60%-134.63%",
        },
        {
          coin: "BTC",
          percent: "0.64%-109.73%",
        },
        {
          coin: "BNB",
          percent: "0.35%-60.15%",
        },
        {
          coin: "BUSD",
          percent: "0.60%-134.63%",
        },
        {
          coin: "ETH",
          percent: "0.92%-121.89%",
        },
        {
          coin: "DOT",
          percent: "0.92%-93.95%",
        },
        {
          coin: "ADA",
          percent: "1.50%-130.76%",
        },
        {
          coin: "SHIB",
          percent: "0.50%-5.16%",
        },
      ],
    };
  },
};
</script>
