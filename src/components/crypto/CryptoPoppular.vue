<template>
  <div>
    <!-- Popular -->
    <div class="d-flex mb-3 gap-4 align-items-center">
      <div>
        <h4 class="mb-0">Popular cryptocurrencies</h4>
      </div>

      <div class="ms-auto p-2 bd-highlight align-self-center">
        <span class="p-2"><a href="#" class="market-text">View more markets</a></span>
      </div>
    </div>
    <!-- Table -->
    <table class="table table-borderless">
      <thead>
        <tr>
          <th scope="col" style="width: 30%">Name</th>
          <th scope="col" style="width: 30%">Last Price</th>
          <th scope="col" style="width: 30%">24h Change</th>
          <th scope="col" style="width: 10%">Market Cap</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in cryptoCurrencies" :key="data.coin">
          <td>
            <div class="d-flex align-items-center gap-2">
              <img
                :src="`https://cryptoicon.s3.amazonaws.com/32/color/${data.coin.toLowerCase()}.png`"
                width="32"
                height="32"
              />
              <div>{{ data.name }}</div>
              <small class="text-secondary">{{ data.coin }}</small>
            </div>
          </td>
          <td>${{ data.lastPrice }}</td>
          <td>
            <span v-if="data.change24h === null"> - </span>
            <span v-else-if="data.change24h > 0" class="text-success">
              +{{ formatFloat(data.change24h) }}%
            </span>
            <span v-else class="text-danger">
              {{ formatFloat(data.change) }}%
            </span>
          </td>
          <td>{{ formatNumber(data.marketCap) }}M</td>
        </tr>
      </tbody>
    </table>
    <div>
      <h5 class="mb-0">Sign up now to build your own portfolio for free!</h5>
    </div>
    <button class="btn btn-warning mt-4">Gat Start</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cryptoCurrencies: [
        {
          name: "BNB",
          coin: "BNB",
          lastPrice: 315.7,
          change24h: 3.51,
          marketCap: 49866,
        },
        {
          name: "Bitcoin",
          coin: "BTC",
          lastPrice: 22898,
          change24h: 0.91,
          marketCap: 441866,
        },
        {
          name: "Ethereum",
          coin: "ETH",
          lastPrice: 1617,
          change24h: 0.02,
          marketCap: 197969,
        },
        {
          name: "Galxe",
          coin: "GAL",
          lastPrice: 2.02,
          change24h: 2.27,
          marketCap: 110,
        },
        {
          name: "Green Metaverse Token",
          coin: "GMT",
          lastPrice: 0.5723,
          change24h: 6.04,
          marketCap: 344,
        },
      ],
    };
  },
  mounted() {},
  methods: {
    formatMillion(num) {
      return (num / 1000000).toFixed(2);
    },
    formatFloat(num) {
      if (num === null) {
        return "-";
      } else {
        return num;
      }
    },
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
  },
};
</script>

<style scoped>
.market-text {
  text-decoration: none;
  color: black;
}
</style>
