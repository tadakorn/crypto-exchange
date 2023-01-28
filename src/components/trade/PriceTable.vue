<template>
  <div class="all-table">
    <div class="table-responsive price-table">
      <table class="table table-sm table-borderless">
        <thead class="price-table-header">
          <tr>
            <th scope="col" style="width: 30%">Pair</th>
            <th scope="col" class="text-end" style="width: 35%">Price</th>
            <th scope="col" class="text-end" style="width: 35%">Change</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pair in pairPrice" :key="pair">
            <td>{{ pair.pair }}</td>
            <td class="text-end">{{ pair.price }}</td>
            <td class="text-end">{{ pair.Change }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <hr />

    <div class="table-responsive price-table">
      <table class="table table-sm table-borderless">
        <thead class="price-table-header">
          <tr>
            <th scope="col" style="width: 30%">Price (USDT)</th>
            <th scope="col" class="text-end" style="width: 35%">
              Amount (BTC)
            </th>
            <th scope="col" class="text-end" style="width: 35%">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="market in marketTrade" :key="market">
            <td>{{ market.price }}</td>
            <td class="text-end">{{ market.amount }}</td>
            <td class="text-end">{{ market.timeChange }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pairPrice: [],
      marketTrade: [],
    };
  },
  mounted() {
    this.generateMarketTrade();
    this.generatePairPrice();
  },
  methods: {
    generateMarketTrade() {
      let marketTrade = [];
      for (let i = 0; i < 100; i++) {
        marketTrade.push({
          price: 21300,
          amount: 0.098989,
          timeChange: "23:13:36",
        });
      }
      this.marketTrade = marketTrade;
    },
    generatePairPrice() {
      let pairPrice = [];
      for (let i = 0; i < 100; i++) {
        pairPrice.push({
          pair: "BTC/USDT",
          price: 21300.9,
          Change: 1.71,
        });
      }
      this.pairPrice = pairPrice;
    },
  },
};
</script>

<style scoped>
.all-table {
  font-size: 13px;
}

.price-table {
  max-height: 300px;
  overflow-y: auto;
}

.price-table-header {
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
