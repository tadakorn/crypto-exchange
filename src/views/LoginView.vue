<template>
  <section class="login">
    <div
      class="rounded border border-2 form-outline position-absolute top-50 start-50 translate-middle"
    >
      <form id="form" class="form" @submit.prevent="validateForm">
        <h2 class="text-center">Login</h2>
        <div class="mb-3 mt-3">
          <label for="username">Username</label>
          <input
            class="form-control"
            type="text"
            placeholder="Enter Your Username"
            v-model="username"
          />
        </div>
        <div class="mb-3">
          <label for="password">Password</label>
          <input
            class="form-control"
            type="password"
            placeholder="Enter Your Password"
            v-model="password"
          />
        </div>
        <div>
          <p class="text-error" v-show="errorMessageShow">
            {{ errorMessage }}
          </p>
        </div>
        <button type="submit">Login</button>
        {{ process }}
      </form>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
      errorMessageShow: false,
    };
  },
  methods: {
    validateForm() {
      if (this.username && this.password) {
        axios
          .post("{{url}}/api/auth/login", {
            username: this.username,
            password: this.password,
          })
          .then((res) => {
            sessionStorage.setItem("accessToken", res.data.access_token);
            this.$router.push("/login-1");
          })
          .catch((err) => {
            this.errorMessage = err.response.data.detail;
            this.errorMessageShow = true;
          });
      } else {
        this.errorMessage = "คุณยังไม่ได้กรอก";
        this.errorMessageShow = true;
      }
    },
  },
};
</script>

<style scoped>
.form-outline {
  border-radius: 1px;
  background-color: #fff;
  width: 392px;
  padding: 10px 15px;
  box-sizing: inherit;
}
.form {
  padding: 30px;
}
.text-error {
  color: #ff2626;
  text-align: center;
}
.form button {
  cursor: pointer;
  background-color: #3498db;
  color: #fff;
  border: 2px solid #3498db;
  border-radius: 10px;
  margin-top: 20px;
  width: 100%;
  display: block;
  font-size: 16px;
  padding: 10px;
}
</style>
