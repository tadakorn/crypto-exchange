<template>
  <div class="d-flex bd-highlight gap-3">
    <div class="flex-grow-1 bd-highlight funding"><h2>Funding</h2></div>
    <div class="bd-highlight">
      <button type="button" class="btn btn-warning">Deposit</button>
    </div>
    <div class="bd-highlight">
      <button type="button" class="btn btn-light">Withdraw</button>
    </div>
    <div class="bd-highlight">
      <button type="button" class="btn btn-light">Send</button>
    </div>
    <div class="bd-highlight">
      <button type="button" class="btn btn-light">Tranfer</button>
    </div>
    <div class="bd-highlight">
      <button type="button" class="btn btn-light">Transaction History</button>
    </div>
  </div>

  <div class="row">
    <div class="col-9">
      <p>Estimated Balance</p>
      <p>{{ estimated }} BTC</p>
    </div>
    <div class="col-3">
      <p>Buy / Sell</p>
      <p>{{ buyEstimated }}</p>
    </div>
  </div>
  <hr />

  <div class="row p-2">
    <div class="col-4">
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
      </form>
    </div>
    <div class="col-4">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Hide Smallbalance
        </label>
      </div>
    </div>
  </div>

  <div class="row p-2">
    <div class="col-12">
      <SpotTable />
    </div>
  </div>
</template>

<script>
import SpotTable from "../../components/wallet/SpotTable.vue";

export default {
  components: {
    SpotTable,
  },
  data() {
    return {
      estimated: 0.0000365,
      buyEstimated: 0.0000365,
    };
  },
};
</script>

<style scoped>
.funding {
  padding-bottom: 50px;
}
</style>
