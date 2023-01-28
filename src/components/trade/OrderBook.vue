<template>
  <div class="all-table">
    <div class="table-responsive order-book-table">
      <table class="table table-sm table-borderless">
        <thead class="order-book-header">
          <tr>
            <th scope="col" style="width: 20%">Price</th>
            <th scope="col" class="text-end" style="width: 40%">
              Amount (USDT)
            </th>
            <th scope="col" class="text-end" style="width: 40%">Total (BTC)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="trade in sellPrice" :key="trade">
            <td>
              <span class="text-danger">{{ trade.price }}</span>
            </td>
            <td class="text-end">{{ trade.amount }}</td>
            <td class="text-end">{{ trade.total }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="d-flex my-3 gap-2 align-items-center">
      <div class="price-title">{{ price }}</div>
      <div>
        <small class="text-secondary">${{ price }}</small>
      </div>
    </div>

    <div class="table-responsive order-book-table">
      <table class="table table-sm table-borderless">
        <tbody>
          <tr v-for="show in buyPrice" :key="show">
            <td style="width: 20%">
              <span class="text-success">{{ show.price }}</span>
            </td>
            <td class="text-end" style="width: 40%">{{ show.amount }}</td>
            <td class="text-end" style="width: 40%">{{ show.total }}</td>
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
      price: 21300,
      sellPrice: [
        {
          price: 23126,
          amount: 0.02344,
          total: 2345.9,
        },
      ],
      buyPrice: [
        {
          price: 23126,
          amount: 0.02344,
          total: 2345.9,
        },
      ],
    };
  },
  mounted() {
    this.generateSellPrice();
    this.generateBuyPrice();
  },
  methods: {
    generateSellPrice() {
      let sellPrice = [];
      for (let i = 0; i < 100; i++) {
        sellPrice.push({
          price: 23126,
          amount: 0.02344,
          total: 2345.9,
        });
      }
      this.sellPrice = sellPrice;
    },
    generateBuyPrice() {
      let buyPrice = [];
      for (let i = 0; i < 100; i++) {
        buyPrice.push({
          price: 23126,
          amount: 0.02344,
          total: 2345.9,
        });
      }
      this.buyPrice = buyPrice;
    },
  },
};
</script>

<style scoped>
.all-table {
  font-size: 13px;
}

.price-title {
  font-size: 1rem;
}

.order-book-table {
  height: 250px;
  overflow-y: hidden;
}

.order-book-header {
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
