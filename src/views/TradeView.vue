<template>
  <div class="row">
    <div class="col-9 border-end">
      <div class="pb-2">
        <VolumePair :pair="pair" />
      </div>

      <div class="row pt-2 border-top">
        <div class="col-4">
          <OrderBook />
        </div>
        <div class="col-8 border-start">
          <PriceChart />
          <TradeForm />
        </div>
      </div>
    </div>

    <div class="col-3">
      <PriceTable />
    </div>
  </div>
</template>

<script>
import PriceChart from "../components/trade/PriceChart.vue";
import VolumePair from "../components/trade/trade_form/VolumePair.vue";
import OrderBook from "../components/trade/OrderBook.vue";
import PriceTable from "../components/trade/PriceTable.vue";
import TradeForm from "../components/trade/TradeForm.vue";

export default {
  components: {
    PriceChart,
    VolumePair,
    OrderBook,
    PriceTable,
    TradeForm,
  },
  data() {
    return {
      price: 21300,
      pair: "BTC/USDT",
    };
  },
  mounted() {
    this.getPair();
  },
  methods: {
    getPair() {
      const pair = this.$route.query.pair;
      if (pair !== "" && pair !== undefined) {
        this.pair = pair.replace("_", "/");
      }
    },
  },
};
</script>

<style scoped>
.nav-link {
  color: #495057;
}
</style>
