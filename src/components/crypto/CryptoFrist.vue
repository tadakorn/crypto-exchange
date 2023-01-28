<template>
  <div class="col-md-7 align-self-center">
    <h2 class="featurette-heading fw-normal lh-1">Buy, trade, and hold 350+</h2>
    <h2 class="featurette-heading fw-normal lh-1">
      cryptocurrencies on Binance
    </h2>
    <p class="lead">
      Some great placeholder content for the first featurette here. Imagine some
      exciting prose here.
    </p>
  </div>
  <div class="col-md-5" v-for="data in img" :key="data.img">
    <div class="d-flex flex-column">
      <img class="img-fluid" :src="`/img/${data.img}.png`" />
    </div>
  </div>

  <div class="d-flex flex-wrap justify-content-between">
    <div class="p-2" v-for="infos in info" :key="infos.info">
      <h2 class="fw-normal">{{ infos.title }}</h2>
      <p>{{ infos.description }}</p>
    </div>
  </div>

  <!-- START THE FEATURETTES -->
</template>

<script>
export default {
  data() {
    return {
      lowestTransaction: "<0.10%",
      img: [
        {
          img: "reality",
        },
      ],
      info: [
        {
          title: "$38 billion",
          description: "24h trading volume on Binance exchange",
        },
        {
          title: "350+",
          description: "Cryptocurrencies listed",
        },
        {
          title: "120 million",
          description: "Registered users",
        },
        {
          title: "<0.10%",
          description: "Lowest transaction fees",
        },
      ],
    };
  },
};
</script>
