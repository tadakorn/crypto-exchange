<template>
  <div class="d-flex bd-highlight mb-3">
    <div class="p-2 bd-highlight h3">Markets</div>
    <!-- <div class="ms-auto p-2 bd-highlight">Markets overview</div> -->
  </div>
  <div class="row">
    <div class="col-3">
      <MarketTopCoin title="Highlight Coin" :coinData="coinGroup.highlight" />
    </div>
    <div class="col-3">
      <MarketTopCoin title="New Listing" :coinData="coinGroup.newListing" />
    </div>
    <div class="col-3">
      <MarketTopCoin title="Top Gainer Coin" :coinData="coinGroup.topGainer" />
    </div>
    <div class="col-3">
      <MarketTopCoin title="Top Volume Coin" :coinData="coinGroup.topVolume" />
    </div>
  </div>

  <div class="row">
    <div class="col-12">
      <MarketTable :coinList="coinList" :pageCount="pageCount" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MarketTopCoin from "../components/market/MarketTopCoin.vue";
import MarketTable from "../components/market/MarketTable.vue";

export default {
  components: {
    MarketTopCoin,
    MarketTable,
  },
  data() {
    return {
      pageCount: 1,
      coinList: [],
      coinGroup: {
        highlight: [
          {
            coin: "BNB",
            price: 292.9,
            change: 0.55,
          },
          {
            coin: "SOL",
            price: 22.2,
            change: 4.72,
          },
          {
            coin: "ADA",
            price: 0.3451,
            change: 2.19,
          },
        ],
        newListing: [
          {
            coin: "HOOK",
            price: 1.892,
            change: 20.59,
          },
          {
            coin: "APT",
            price: 9.1229,
            change: 18.56,
          },
          {
            coin: "MAGIC",
            price: 0.837,
            change: 15.91,
          },
        ],
        topGainer: [
          {
            coin: "ATM",
            price: 3.96,
            change: 25.32,
          },
          {
            coin: "HOOK",
            price: 1.892,
            change: 20.59,
          },
          {
            coin: "APT",
            price: 9.1229,
            change: 18.56,
          },
        ],
        topVolume: [
          {
            coin: "BTC",
            price: 21349.96,
            change: 2.14,
          },
          {
            coin: "ETH",
            price: 1588.31,
            change: 3.41,
          },
          {
            coin: "XRP",
            price: 0.3959,
            change: 1.12,
          },
        ],
      },
      priceCoins: 21000,
      percentCoins: "25%",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get(
          "https://www.binance.com/bapi/composite/v1/public/marketing/symbol/list"
        )
        .then((res) => {
          let selectData = res.data.data;
          let coinList = [];
          for (let data of selectData) {
            if (data.baseAsset == "SOL") {
              console.log(data);
            }

            coinList.push({
              coin: data.baseAsset,
              name: data.fullName,
              price: data.price,
              change24h: data.dayChange,
              change4h: data.dayChange,
              change1h: data.dayChange,
              volume24h: data.volume,
              marketCap: data.marketCap,
            });
          }

          this.coinList = coinList.sort((a, b) => b.marketCap - a.marketCap);
          this.pageCount = Math.ceil(this.coinList.length / 30);
        });
    },
  },
};
</script>

<style scoped></style>
