<template>
  <div class="d-flex justify-content-end mb-4 mt-2" style="width: 25%">
    <div class="input-group">
      <input
        class="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <!-- <div class="d-flex align-items-center">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </div> -->
    </div>
  </div>

  <table class="table table-hover">
    <thead class="table-light">
      <tr>
        <th style="width: 26%" scope="col">Name</th>
        <th style="width: 11%" scope="col">Price</th>
        <th style="width: 16%" class="text-end" scope="col">
          1h 4h 24h Change
        </th>
        <th style="width: 16%" class="text-end" scope="col">24h Volume</th>
        <th style="width: 16%" class="text-end" scope="col">Market Cap</th>
        <th style="width: 15%" scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <!-- แสดงผลข้อมูลจาก currentPageData ซึ่งก็คือข้อมูลที่ถูกหั่นมาจาก coinList -->
      <tr
        v-for="data in currentPageData"
        :key="data.coin"
        class="clickCoin"
        @click="clickCoin(data.coin)"
      >
        <td class="align-middle">
          <div class="d-flex align-items-center gap-2">
            <img
              :src="`https://cryptoicon.s3.amazonaws.com/32/color/${data.coin.toLowerCase()}.png`"
              width="30"
            />
            <div>{{ data.coin }}</div>
            <small class="text-secondary">{{ data.name }}</small>
          </div>
        </td>
        <td class="align-middle">${{ parseFloat(data.price) }}</td>
        <td class="text-end align-middle">
          <span v-if="data.change24h === null"> - </span>
          <span v-else-if="data.change24h > 0" class="text-success">
            +{{ formatFloat(data.change24h) }}%
          </span>
          <span v-else class="text-danger">
            {{ formatFloat(data.change24h) }}%
          </span>
        </td>
        <td class="text-end align-middle">
          {{ formatMillion(data.volume24h) }}M
        </td>
        <td class="text-end align-middle">
          ${{ formatMillion(data.marketCap) }}M
        </td>
        <td class="text-center">
          <button type="button" class="btn btn-sm btn-warning">Trade</button>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- ระบบ page เพื่อแบ่งข้อมูลจาก coinList เป็นหน้าๆ โดยใช้เลขเป็นตัวกำหนด -->
  <div class="d-flex gap-1 justify-content-end align-items-center mb-4 mt-2">
    <button
      class="btn page-arrow"
      :class="{
        disabled: currentPage === 1,
      }"
      @click.prevent="changePreviousPage"
    >
      <font-awesome-icon icon="fa-solid fa-chevron-left" />
    </button>

    <button
      class="btn btn-sm"
      :class="{
        'btn-warning': currentPage == n,
      }"
      v-for="n in totalPages"
      :key="n"
      @click="changePage(n)"
    >
      {{ n }}
    </button>

    <button
      class="btn page-arrow"
      :class="{
        disabled: currentPage === totalPages,
      }"
      @click.prevent="changeNextPage"
    >
      <font-awesome-icon icon="fa-solid fa-chevron-right" />
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
      perPage: 30,
    };
  },
  props: {
    coinList: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {},
  methods: {
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
    changePage(n) {
      this.currentPage = n;
    },
    changePreviousPage() {
      if (this.currentPage !== 1) {
        this.currentPage -= 1;
      }
    },
    changeNextPage() {
      if (this.currentPage !== this.totalPages) {
        this.currentPage += 1;
      }
    },
  },
  computed: {
    currentPageData() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.coinList.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.coinList.length / this.perPage);
    },
  },
};
</script>

<style scoped>
.clickCoin {
  cursor: pointer;
}

.page-arrow {
  border: none;
}
</style>
