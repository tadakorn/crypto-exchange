<template>
    <div class="d-flex align-items-center p-4 mb-4 gap-4 start-trade">
      <div>
        <img :src="`/img/${img}.png`" width="32" height="32" />
      </div>
      <div>
        <div>
          <h5 class="featurette-heading fw-normal lh-1">
            {{ title }}
          </h5>
        </div>
        <div>
          {{ description }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["img", "title", "description"],
  };
  </script>
  
  <style scoped>
  .start-trade {
    background-color: #fafafa;
  }
  </style>