<template>
  <div class="d-flex mb-3 gap-4 d-flex justify-content-between">
    <div>
      <div>
        <h2>Trade on the go. Anywhere, anytime.</h2>
      </div>
      <div>
        <p>Stay in the know with our app and desktop client.</p>
      </div>
    </div>

    <div class="ms-auto p-2 bd-highlight">
      <span class="p-2"
        ><a href="#" class="device-link">More download options</a></span
      >
    </div>
  </div>

  <div class="col-sm-12 col-md-6" v-for="data in imgs" :key="data.imgs">
    <div class="d-flex flex-column">
      <img class="img fluid" :src="`/img/${data.imgs}.png`" />
    </div>
  </div>

  <div class="col-sm-12 col-md-6">
    <div class="d-flex align-items-center p-4 mb-4 gap-4 scan-to-download">
      <div>
        <img src="" />
      </div>
      <div>
        <div>
          <h5 class="featurette-heading fw-normal lh-1">Scan to Download</h5>
        </div>
        <div>iOS & Android</div>
      </div>
    </div>

    <div class="d-flex flex-wrap p-4">
      <div
        class="text-center device-download"
        v-for="app in appTokens"
        :key="app.img"
      >
        <CryptoTradeChild :img="app.img" :title="app.textApp" />
      </div>
    </div>
  </div>
</template>
<script>
import CryptoTradeChild from "./CryptoTradeChild.vue";
export default {
  components: {
    CryptoTradeChild,
  },
  data() {
    return {
      appTokens: [
        {
          img: "mac",
          textApp: "App Store",
        },
        {
          img: "android",
          textApp: "Android APK",
        },
        {
          img: "googleplay",
          textApp: "Google Play",
        },
        {
          img: "macos",
          textApp: "MacOS",
        },
        {
          img: "windows",
          textApp: "Windows",
        },
        {
          img: "linux",
          textApp: "Linux",
        },
        {
          img: "api",
          textApp: "API",
        },
      ],
      imgs: [
        {
          imgs: "online",
        },
      ],
    };
  },
};
</script>

<style scoped>
.device-download {
  flex: 0 0 33.33%;
  margin-bottom: 40px;
}

.scan-to-download {
  background-color: #fafafa;
}
.device-link {
  text-decoration: none;
  color: black;
}
</style>
