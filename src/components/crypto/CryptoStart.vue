<template>
  <div class="d-flex mb-3 gap-4 align-items-stretch">
    <div>
      <div>
        <h2>Your trusted crypto exchange</h2>
      </div>
      <div>
        <p>
          Here at Binance, we are committed to user protection with strict
          protocols and industry-leading technical measures.
        </p>
      </div>
    </div>

    <div class="ms-auto p-2 bd-highlight">
      <span class="p-2"
        ><a href="#" class="tokens-text">View more markets</a></span
      >
    </div>
  </div>
  <div class="col-sm-12 col-md-7 align-self-center">
    <div v-for="data in cryptoExchange" :key="data.img">
      <CryptoStartChild
        :img="data.img"
        :title="data.title"
        :description="data.shotArticles"
      />
    </div>
  </div>

  <div
    class="col-sm-12 col-md-5 align-self-center"
    v-for="data in img"
    :key="data.img"
  >
    <div class="d-flex flex-column">
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
          title: "Secure Asset Fund for Users (SAFU)",
          shotArticles:
            "Binance stores 10% of all trading fees in a secure asset fund to protect a share of user funds.",
        },
        {
          img: "stock",
          title: "Personalised Access Control",
          shotArticles:
            "Personalized access control allows you to restrict devices and addresses that can access your account, for greater ease of mind.",
        },
        {
          img: "user",
          title: "Advanced Data Encryption",
          shotArticles:
            "Your transaction data is secured via end-to-end encryption, ensuring that only you have access to your personal information.",
        },
      ],
      img: [
        {
          img: "learning",
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
