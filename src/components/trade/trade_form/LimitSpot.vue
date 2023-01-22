<template>
  <div class="row mt-3">
    <div class="col-6">
      <AvailableBalance
        :availableBuyBalance="availableBuyBalance"
        :availableSellBalance="availableSellBalance"
        :currency="quoteCurrency"
        numberColorClass="#02d667"
      />
    </div>
    <div class="col-6">
      <AvailableBalance
        :availableBuyBalance="availableBuyBalance"
        :availableSellBalance="availableSellBalance"
        :currency="baseCurrency"
        numberColorClass="red"
      />
    </div>

    <div class="col-6">
      <TradeInput
        title="Price"
        :placeholder="buyPrice"
        :currency="quoteCurrency"
      />
    </div>
    <div class="col-6">
      <TradeInput
        title="Price"
        :placeholder="sellPrice"
        :currency="quoteCurrency"
      />
    </div>

    <div class="col-6">
      <TradeInput
        title="Amount"
        :placeholder="buyAmount"
        :currency="baseCurrency"
      />
    </div>
    <div class="col-6">
      <TradeInput
        title="Amount"
        :placeholder="sellAmount"
        :currency="baseCurrency"
      />
    </div>

    <div class="col-6">
      <TradeInput
        title="Total"
        :placeholder="buyQuantity"
        :currency="quoteCurrency"
      />
    </div>
    <div class="col-6">
      <TradeInput
        title="Total"
        :placeholder="sellQuantity"
        :currency="quoteCurrency"
      />
    </div>

    <div class="col-6">
      <AmountPercent btnColorClass="btn-outline-success" />
    </div>
    <div class="col-6 mb-3">
      <AmountPercent btnColorClass="btn-outline-danger" />
    </div>
    <div class="col-6">
      <div class="d-grid">
        <button class="btn buy-market" type="button">Buy</button>
      </div>
    </div>
    <div class="col-6">
      <div class="d-grid">
        <button class="btn sell-market" type="button">Sell</button>
      </div>
    </div>
  </div>
</template>

<script>
import TradeInput from "./TradeInput.vue";
import AmountPercent from "./AmountPercent.vue";
import AvailableBalance from "./AvailableBalance.vue";
export default {
  components: {
    TradeInput,
    AmountPercent,
    AvailableBalance,
  },
  props: ["pair"],
  data() {
    return {
      availableBuyBalance: 0.0,
      availableSellBalance: 0.0,
      buyPrice: 0.0,
      sellPrice: 0.0,
      buyAmount: 0.0,
      sellAmount: 0.0,
      buyQuantity: 0.0,
      sellQuantity: 0.0,
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
.buy-market {
  background-color: #02d667;
}
.sell-market {
  background-color: rgb(246, 70, 93);
}
</style>
