<template>
  <div class="py-5">
    <!-- Explore -->

    <h1 class="mb-5">Need help?</h1>
    <div class="row">
      <div class="col-sm-12 col-md-4" v-for="data in needHelp" :key="data.img">
        <div class="d-flex align-items-start p-4 mb-4 gap-4 scan-to-download">
          <div>
            <img :src="`/img/${data.img}.png`" />
          </div>
          <div>
            <div>
              <h5 class="featurette-heading fw-normal lh-1">
                {{ data.title }}
              </h5>
            </div>
            <div>
              {{ data.description }}
              <a class="device-link"
                ><div>{{ data.option }}</div></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      needHelp: [
        {
          img: "support",
          title: "24/7 Chat Support",
          description:
            "Get 24/7 chat support with our friendly customer service agents at your service",
          option: "Chat Now",
        },
        {
          img: "chat",
          title: "FAQs",
          description:
            "View FAQs for detailed instructions on specific features",
          option: "Learn More",
        },
        {
          img: "blog",
          title: "Blog",
          description:
            "Stay up to date with the latest stories and commentary.",
          option: "Learn More",
        },
      ],
    };
  },
};
</script>
<style scoped>
.device-link {
  text-decoration: none;
  color: gold;
}
</style>
