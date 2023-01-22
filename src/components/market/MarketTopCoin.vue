<template>
  <div class="p-2">{{ title }}</div>
  <table class="table table-borderless">
    <tbody>
      <tr
        v-for="(data, i) in coinData"
        :key="`${i}_${data.coin}`"
        class="row-click"
        @click="rowClick(data.coin)"
      >
        <td class="d-flex align-items-center gap-2">
          <img
            :src="`https://cryptoicon.s3.amazonaws.com/32/color/${data.coin.toLowerCase()}.png`"
            width="25"
          />
          <div>{{ data.coin }}</div>
        </td>
        <td>{{ parseFloat(data.price) }}</td>
        <td class="text-end align-middle">
          <span v-if="data.change === null"> - </span>
          <span v-else-if="data.change > 0" class="text-success">
            +{{ formatFloat(data.change) }}%
          </span>
          <span v-else class="text-danger">
            {{ formatFloat(data.change24h) }}%
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["title", "coinData"],
  mounted() {},
  methods: {
    rowClick(coin) {
      this.$router.push(`/trade?pair=${coin}_USDT`);
    },
    formatMillion(num) {
      return (num / 1000000).toFixed(2);
    },
    clickCoin(coin) {
      this.$router.push(`/trade?pair=${coin}_USDT`);
    },
    formatFloat(num) {
      if (num === null) {
        return "-";
      } else {
        return num.toFixed(2);
      }
    },
  },
};
</script>

<style scoped>
.row-click {
  cursor: pointer;
}

.row-click:hover {
  background-color: #fafafa;
}
</style>
