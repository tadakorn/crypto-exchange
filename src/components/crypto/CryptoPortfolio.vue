<template>
  <div class="col-sm-12 col-md-7 align-self-center">
    <div>
      <h2>Build your crypto portfolio</h2>
    </div>
    <div>
      <p>Start your first trade with these easy steps.</p>
    </div>
    <div v-for="data in cryptoExchange" :key="data.img">
      <CryptoStartChild
        :img="data.img"
        :title="data.title"
        :description="data.shotArticles"
      />
    </div>
  </div>

  <div class="col-sm-12 col-md-5 align-self-end" v-for="data in img" :key="data.img">
    <div class="d-flex flex-column ">
      <img class="img-fluid" :src="`/img/${data.img}.png`" />
    </div>
  </div>
</template>

<script>
import CryptoStartChild from "./CryptoStartChild.vue";
export default {
  components: {
    CryptoStartChild,
  },
  data() {
    return {
      cryptoExchange: [
        {
          img: "security",
          title: "Verify your identity",
          shotArticles:
            "Complete the identity verification process to secure your account and transactions.",
        },
        {
          img: "stock",
          title: "Fund your account",
          shotArticles:
            "Add funds to your crypto account to start trading crypto. You can add funds with a variety of payment methods.",
        },
        {
          img: "user",
          title: "Start trading",
          shotArticles:
            "You're good to go! Buy/sell crypto, set up recurring buys for your investments, and discover what Binance has to offer.",
        },
      ],
      img: [
        {
          img: "product",
        },
      ],
    };
  },
};
</script>

<style scoped>
.photo-exchange {
  margin-bottom: 48px;
}
.tokens-text {
  text-decoration: none;
  color: black;
}
</style>
