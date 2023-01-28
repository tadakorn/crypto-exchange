<template>
  <div class="container">
    <div class="row">
      <CryptoFrist />
    </div>
    <div class="mt-5">
      <CryptoPoppular />
    </div>
    <div class="row mt-5">
      <CryptoPortfolio />
    </div>
    <div class="mt-5">
      <CryptoDaily />
    </div>
    <div class="mt-5">
      <CryptoExplore />
    </div>
    <div class="row mt-5">
      <CryptoStart />
    </div>
    <div class="row mt-5">
      <CryptoTrade />
    </div>
    <div class="mt-5">
      <CryptoNeedHelp />
    </div>
  </div>
</template>
<script>
import CryptoFrist from "../components/crypto/CryptoFrist.vue";
import CryptoPoppular from "../components/crypto/CryptoPoppular.vue";
import CryptoPortfolio from "../components/crypto/CryptoPortfolio.vue";
import CryptoDaily from "../components/crypto/CryptoDaily.vue";
import CryptoExplore from "../components/crypto/CryptoExplore.vue";
import CryptoStart from "../components/crypto/CryptoStart.vue";
import CryptoTrade from "../components/crypto/CryptoTrade.vue";
import CryptoNeedHelp from "../components/crypto/CryptoNeedHelp.vue";

export default {
  components: {
    CryptoFrist,
    CryptoPoppular,
    CryptoPortfolio,
    CryptoDaily,
    CryptoExplore,
    CryptoStart,
    CryptoTrade,
    CryptoNeedHelp,
  },
};
</script>
