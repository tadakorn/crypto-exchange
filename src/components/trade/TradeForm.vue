<template>
  <div class="d-flex flex-column">
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
</template>

<script>
import LimitSpot from "../../components/trade/trade_form/LimitSpot.vue";
import MarketSpot from "../../components/trade/trade_form/MarketSpot.vue";
import StopLimit from "../../components/trade/trade_form/StopLimit.vue";

export default {
  components: {
    LimitSpot,
    MarketSpot,
    StopLimit,
  },
  data() {
    return {
      pair: "BTC/USDT",
    };
  },
};
</script>
