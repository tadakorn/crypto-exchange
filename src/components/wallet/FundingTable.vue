<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col " style="width: 15%">Assets</th>
        <th scope="col " style="width: 10%" class="text-center">Tota Amount</th>
        <th scope="col " style="width: 10%" class="text-center">Avalable</th>
        <th scope="col " style="width: 10%" class="text-center">Frozen</th>
        <th scope="col " style="width: 20%" class="text-center">BTC Value</th>
        <th scope="col " style="width: 20%" class="text-end">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="info in fundingInfo" :key="info.coin">
        <td>
          <div class="d-flex align-items-center gap-4">
            <img
              :src="`https://cryptoicon.s3.amazonaws.com/32/color/${info.coin.toLowerCase()}.png`"
              width="30"
            />
            <div>
              <h6 class="m-0">
                {{ info.assetInfo }}
              </h6>
              <small class="text-secondary m-0">{{ info.name }}</small>
            </div>
          </div>
        </td>
        <td class="text-center align-middle">{{ info.totalAmount }}</td>
        <td class="text-center align-middle">{{ info.avalable }}</td>
        <td class="text-center align-middle">{{ info.frozen }}</td>
        <td class="text-center align-middle">{{ info.btcValue }}</td>
        <td class="text-end align-middle">
          <button type="button" class="btn btn-sm actions">
            {{ info.action }}
          </button>
          <button type="button" class="btn btn-sm actions">
            {{ info.deposit }}
          </button>
          <button type="button" class="btn btn-sm actions">
            {{ info.receive }}
          </button>
          <button type="button" class="btn btn-sm actions">
            {{ info.convert }}
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      fundingInfo: [
        {
          coin: "BTC",
          name: "Bitcoin",
          assetInfo: "BTC",
          totalAmount: "0.000",
          avalable: "0.000",
          frozen: "0.000",
          btcValue: "0.00",
          action: "Buy/Sell",
          deposit: "Deposit",
          receive: "Receive",
          convert: "Convert",
        },
        {
          coin: "ETH",
          name: "Ethereum",
          assetInfo: "ETH",
          totalAmount: "0.000",
          avalable: "0.000",
          frozen: "0.000",
          btcValue: "0.00",
          action: "Buy/Sell",
          deposit: "Deposit",
          receive: "Receive",
          convert: "Convert",
        },
        {
          coin: "BNB",
          name: "BNB",
          assetInfo: "BNB",
          totalAmount: "0.000",
          avalable: "0.000",
          frozen: "0.000",
          btcValue: "0.00",
          action: "Buy/Sell",
          deposit: "Deposit",
          receive: "Receive",
          convert: "Convert",
        },
        {
          coin: "BUSD",
          name: "BUSD",
          assetInfo: "BUSD",
          totalAmount: "0.000",
          avalable: "0.000",
          frozen: "0.000",
          btcValue: "0.00",
          action: "Buy/Sell",
          deposit: "Deposit",
          receive: "Receive",
          convert: "Convert",
        },
        {
          coin: "USDT",
          name: "TetherUS",
          assetInfo: "USDT",
          totalAmount: "0.000",
          avalable: "0.000",
          frozen: "0.000",
          btcValue: "0.00",
          action: "Buy/Sell",
          deposit: "Deposit",
          receive: "Receive",
          convert: "Convert",
        },
        {
          coin: "ACA",
          name: "Acala Token",
          assetInfo: "ACA",
          totalAmount: "0.000",
          avalable: "0.000",
          frozen: "0.000",
          btcValue: "0.00",
          action: "Buy/Sell",
          deposit: "Deposit",
          receive: "Receive",
          convert: "Convert",
        },
      ],
    };
  },
};
</script>

<style scoped>
.actions {
  color: #ffc107;
  border: none;
}
</style>
