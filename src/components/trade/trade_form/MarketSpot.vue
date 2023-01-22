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
      <div class="d-flex bd-highlight market">
        <div class="me-auto p-2 bd-highlight">Price</div>
        <div class="p-2 bd-highlight text-light">Market</div>
        <div class="p-2 bd-highlight text-light">USDT</div>
      </div>
    </div>
    <div class="col-6">
      <div class="d-flex bd-highlight market">
        <div class="me-auto p-2 bd-highlight">Price</div>
        <div class="p-2 bd-highlight text-light">Market</div>
        <div class="p-2 bd-highlight text-light">USDT</div>
      </div>
    </div>

    <div class="col-6">
      <div class="d-flex mt-2 p-2 buy-total">
        <div class="dropdown">
          <button
            class="btn py-0 dropdown-toggle btn-line"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Total
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              <button class="dropdown-item" type="button">Amount</button>
            </li>
            <li>
              <button class="dropdown-item" type="button">Total</button>
            </li>
          </ul>
        </div>
        <div class="line"></div>
        <div class="d-flex ms-auto px-2">
          <input
            type="text"
            href="#"
            :placeholder="totalPrice"
            class="amount-total"
          />
          <div class="ps-3 text-dark">{{ pricePair }}</div>
        </div>
      </div>
    </div>

    <div class="col-6">
      <div class="d-flex mt-2 p-2 buy-total">
        <div class="dropdown">
          <button
            class="btn py-0 dropdown-toggle btn-line"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Amount
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              <button class="dropdown-item" type="button">Total</button>
            </li>
            <li>
              <button class="dropdown-item" type="button">Amount</button>
            </li>
          </ul>
        </div>
        <div class="line"></div>
        <div class="d-flex ms-auto px-2">
          <input
            type="text"
            href="#"
            :placeholder="totalPrice"
            class="amount-total"
          />
          <div class="ps-3 text-dark">{{ pricePair }}</div>
        </div>
      </div>
    </div>

    <div class="col-6 mt-3">
      <AmountPercent btnColorClass="btn-outline-success" />
    </div>
    <div class="col-6 mt-3">
      <AmountPercent btnColorClass="btn-outline-danger" />
    </div>

    <div class="col-6 mt-3">
      <div class="d-grid">
        <button class="btn buy-market" type="button">Buy</button>
      </div>
    </div>
    <div class="col-6 mt-3">
      <div class="d-grid">
        <button class="btn sell-market" type="button">Sell</button>
      </div>
    </div>
  </div>
</template>

<script>
import AvailableBalance from "./AvailableBalance.vue";
import AmountPercent from "./AmountPercent.vue";
export default {
  components: {
    AvailableBalance,
    AmountPercent,
  },
  props: ["pair"],
  data() {
    return {
      availableBuyBalance: 0,
      availableSellBalance: 0,
      pricePair: "USDT",
      totalPrice: 0,
      amountPrice: 0,
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
.market {
  background-color: #b2b2b2;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.buy-total {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: inline-flex;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  line-height: 1.6;
  border: 1px solid #b2b2b2;
  border-radius: 4px;
  width: 100%;
}
.btn-line {
  border: none;
  outline: none;
}
.line {
  width: 1px;
  height: 16px;
  position: relative;
  background-color: #b2b2b2;
}
.amount-total {
  border: 0;
  margin: 0;
  color: #333;
  position: relative;
  font-size: 13px;
  background: 0 0;
  text-align: right;
  flex: 2;
  border: none;
  outline: none;
}
.buy-market {
  background-color: #02d667;
}
.sell-market {
  background-color: rgb(246, 70, 93);
}
</style>
