<template>
  <div class="row">
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
        title="Stop"
        :placeholder="stopBuyPrice"
        :currency="quoteCurrency"
      />
    </div>
    <div class="col-6">
      <TradeInput
        title="Stop"
        :placeholder="stopSellPrice"
        :currency="quoteCurrency"
      />
    </div>

    <div class="col-6">
      <TradeInput
        title="Limit"
        :placeholder="limitBuyAmount"
        :currency="baseCurrency"
      />
    </div>
    <div class="col-6">
      <TradeInput
        title="Limit"
        :placeholder="limitSellAmount"
        :currency="baseCurrency"
      />
    </div>

    <div class="col-6">
      <TradeInput
        title="Amount"
        :placeholder="amountBuyQuantity"
        :currency="quoteCurrency"
      />
    </div>
    <div class="col-6">
      <TradeInput
        title="Amount"
        :placeholder="amountSellQuantity"
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
import AvailableBalance from "./AvailableBalance.vue";
import TradeInput from "./TradeInput.vue";
import AmountPercent from "./AmountPercent.vue";
export default {
  components: {
    AvailableBalance,
    TradeInput,
    AmountPercent,
  },
  props: ["pair"],
  data() {
    return {
      availableBuyBalance: 0.0,
      availableSellBalance: 0.0,
      stopBuyPrice: 0.0,
      stopSellPrice: 0.0,
      limitBuyAmount: 0.0,
      limitSellAmount: 0.0,
      amountBuyQuantity: 0.0,
      amountSellQuantity: 0.0,
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
