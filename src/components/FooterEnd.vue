<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-around gap-5 mb-4">
      <div v-for="data in infoSocial" :key="data.info">
        <h5 class="service-title">{{ data.title }}</h5>
        <div>
          <a href="#" class="footer-link text-muted all-service">{{
            data.about
          }}</a>
        </div>
        <div>
          <a href="#" class="footer-link text-muted all-service">{{
            data.careers
          }}</a>
        </div>
        <div>
          <a href="#" class="footer-link text-muted all-service">{{
            data.business
          }}</a>
        </div>
        <div>
          <a href="#" class="footer-link text-muted all-service">{{
            data.community
          }}</a>
        </div>
        <div>
          <a href="#" class="footer-link text-muted all-service">{{
            data.binance
          }}</a>
        </div>
      </div>

      <div class="text-center">
        <h5 class="service-title">Community</h5>
        <div class="row justify-content-center">
          <div class="col-3 my-2 p-0" v-for="app in img" :key="app.img">
            <a href="#" class="text-center"
              ><img :src="`/img/${app.img}.png`" width="14" height="14" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="border-top"></div>
    <p class="mt-4 text-center service-title text-muted">Binance © 2023</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoSocial: [
        {
          title: "About Us",
          about: "about",
          careers: "careers",
          business: "Business Contacts",
          community: "Community",
          binance: "Binance Blog",
        },
        {
          title: "Products",
          about: "Exchange",
          careers: "Academy",
          business: "Binance Live",
          community: "Charity",
          binance: "Card",
        },
        {
          title: "Service",
          about: "Dowloads",
          careers: "Desktop Application",
          business: "Institutional ",
          community: "Referral",
          binance: "BNB",
        },
        {
          title: "Support",
          about: "Give Us Feedback",
          careers: "Support Center",
          business: "Submit Request",
          community: "APIs",
          binance: "Fees",
        },
        {
          title: "learn",
          about: "learn & Earn",
          careers: "Bitcoin Price",
          business: "Buy BNB",
          community: "Buy BUSD",
          binance: "Buy Bitcoin",
        },
      ],
      img: [
        {
          img: "mac",
        },
        {
          img: "android",
        },
        {
          img: "googleplay",
        },
        {
          img: "macos",
        },
        {
          img: "windows",
        },
        {
          img: "linux",
        },
        {
          img: "api",
        },
      ],
    };
  },
};
</script>

<style scoped>
.scan-to-download {
  background-color: #fafafa;
}
.all-service {
  font-size: 13px;
}

.service-title {
  font-size: 1rem;
}

.footer-link {
  text-decoration: none;
}

.footer-position {
}
</style>
