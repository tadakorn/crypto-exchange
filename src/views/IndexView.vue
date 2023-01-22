<template>
  <div class="container mt-5 p-5">
    <p>สวัสดีครับคุณ {{ username }}</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let accessToken = sessionStorage.getItem("accessToken");
      if (accessToken) {
        axios
          .get("https://express-auth-kihk.onrender.com/api/user/profile", {
            headers: { Authorization: `Bearer ${accessToken}` },
          })
          .then((res) => {
            this.username = res.data.username;
          });
      } else {
        this.$router.push("/login");
      }
    },
    logout() {
      sessionStorage.removeItem("accessToken");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
button {
  padding: 5px;
  background-color: black;
  color: #fff;
  border: 5px;
  border-radius: 5px;
}
</style>
