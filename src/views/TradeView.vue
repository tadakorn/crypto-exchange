<template>
  <VolumePair :pair="pair" />
  <div class="row">
    <div class="col-12">
      <!-- <CandlestickChart /> -->
    </div>
  </div>

  <div class="row">
    <div class="col-3">
      <div class="d-flex flex-direction-column">
        <table class="table table-sm">
          <thead>
            <tr>
              <th scope="col" style="width: 30%">Price</th>
              <th scope="col" style="width: 40%">Amount(USDT)</th>
              <th scope="col" style="width: 30%">Total(BTC)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="trade in priceGroup.sellPrice" :key="trade">
              <td>
                <span class="text-danger">{{ trade.price }}</span>
              </td>
              <td class="text-center">{{ trade.amount }}</td>
              <td >{{ trade.total }}</td>
            </tr>
            <tr v-for="trade in priceGroup.sellPrice" :key="trade">
              <td>
                <span class="text-danger">{{ trade.price }}</span>
              </td>
              <td class="text-center">{{ trade.amount }}</td>
              <td >{{ trade.total }}</td>
            </tr>
            <tr v-for="trade in priceGroup.sellPrice" :key="trade">
              <td>
                <span class="text-danger">{{ trade.price }}</span>
              </td>
              <td class="text-center">{{ trade.amount }}</td>
              <td >{{ trade.total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex flex-direction-row gap-4">
        <div class="h3">{{ price }}</div>
        <div class="align-self-center">
          <small class="text-secondary">${{ price }}</small>
        </div>
        <div class="ms-5 align-self-center">
        More
        </div>
      </div>
      <div class="d-flex flex-direction-column">
        <table class="table table-sm">
          <thead>
            <tr>
              <th scope="col" style="width: 30%"></th>
              <th scope="col" style="width: 40%"></th>
              <th scope="col" style="width: 30%"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="show in priceGroup.buyPrice" :key="show">
              <td>
                <span class="text-success">{{ show.price }}</span>
              </td>
              <td class="text-center">{{ show.amount }}</td>
              <td >{{ show.total }}</td>
            </tr>
            <tr v-for="show in priceGroup.buyPrice" :key="show">
              <td>
                <span class="text-success">{{ show.price }}</span>
              </td>
              <td class="text-center">{{ show.amount }}</td>
              <td >{{ show.total }}</td>
            </tr>
            <tr v-for="show in priceGroup.buyPrice" :key="show">
              <td>
                <span class="text-success">{{ show.price }}</span>
              </td>
              <td class="text-center">{{ show.amount }}</td>
              <td >{{ show.total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="col-6">
      <div class="row mb-4">
        <div class="col-12">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Limit
              </button>
              <button
                class="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Market
              </button>
              <button
                class="nav-link"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Stop Limit
              </button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <LimitSpot :pair="pair" />
            </div>
            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <MarketSpot :pair="pair" />
            </div>
            <div
              class="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <StopLimit :pair="pair" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-3">
      <div class="d-flex flex-direction-column">
        <table class="table table-sm">
          <thead>
            <tr>
              <th scope="col" style="width: 40%">Pair</th>
              <th scope="col" style="width: 40%">Price</th>
              <th scope="col" style="width: 20%">Change</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="pair in pairGroup.pairPrice" :key="pair">
              <td>{{ pair.pair }}</td>
              <td>{{ pair.price }}</td>
              <td>{{ pair.Change }}</td>
            </tr>
            <tr v-for="pair in pairGroup.pairPrice" :key="pair">
              <td>{{ pair.pair }}</td>
              <td>{{ pair.price }}</td>
              <td>{{ pair.Change }}</td>
            </tr>
            <tr v-for="pair in pairGroup.pairPrice" :key="pair">
              <td>{{ pair.pair }}</td>
              <td>{{ pair.price }}</td>
              <td>{{ pair.Change }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex flex-direction-column">
        <table class="table table-sm">
          <thead>
            <tr>
              <th scope="col" style="width: 40%">Price</th>
              <th scope="col" style="width: 40%">Amount</th>
              <th scope="col" style="width: 20%">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="market in pairGroup.marketTrade" :key="market">
              <td>{{ market.price }}</td>
              <td>{{ market.amount }}</td>
              <td>{{ market.timeChange }}</td>
            </tr>
            <tr v-for="market in pairGroup.marketTrade" :key="market">
              <td>{{ market.price }}</td>
              <td>{{ market.amount }}</td>
              <td>{{ market.timeChange }}</td>
            </tr>
            <tr v-for="market in pairGroup.marketTrade" :key="market">
              <td>{{ market.price }}</td>
              <td>{{ market.amount }}</td>
              <td>{{ market.timeChange }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
// import CandlestickChart from "../components/trade/CandlestickChart.vue";
import LimitSpot from "../components/trade/trade_form/LimitSpot.vue";
import MarketSpot from "../components/trade/trade_form/MarketSpot.vue";
import StopLimit from "../components/trade/trade_form/StopLimit.vue";
import VolumePair from "../components/trade/trade_form/VolumePair.vue";
export default {
  components: {
    // CandlestickChart,
    LimitSpot,
    MarketSpot,
    StopLimit,
    VolumePair,
  },
  data() {
    return {
      price: 21300,
      pair: "BTC/USDT",
      priceGroup: {
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
      },
      pairGroup: {
        pairPrice: [
          {
            pair: "BTC/USDT",
            price: 21300.9,
            Change: 1.71,
          },
        ],
        marketTrade: [
          {
            price: 21300,
            amount: 0.098989,
            timeChange: "04245",
          },
        ],
      },
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
