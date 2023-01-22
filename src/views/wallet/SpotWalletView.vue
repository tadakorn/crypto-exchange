<template>
  <div class="d-flex bd-highlight gap-3">
    <div class="flex-grow-1 bd-highlight wallet"><h2>Spot Wallet</h2></div>
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
    <div class="col-4">
      <p>Estimate</p>
      <p>0.0123</p>
    </div>
    <div class="col-3">
      <p>Spot Balance</p>
      <p>0.0123</p>
    </div>
    <div class="col-3">
      <p>Fiat Balance</p>
      <p>0.0123</p>
    </div>
    <div class="col-2">
      <p>Today's PNL</p>
      <p>0.0123</p>
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
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Coin</th>
            <th scope="col">Total</th>
            <th scope="col">Avalable</th>
            <th scope="col">In order</th>
            <th scope="col">BTC Value</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.wallet {
  padding-bottom: 50px;
}
</style>
