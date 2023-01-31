<template>
  <div class="d-flex justify-content-center">
    <div class="rounded border border-2 form-outline p-4">
      <form id="form" class="form" @submit.prevent="validateForm">
        <h3 class="text-center">Login</h3>
        <div class="my-3">
          <label for="email">Email</label>
          <input
            class="form-control"
            type="email"
            placeholder="Enter Your Email"
            v-model="email"
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
      </form>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../stores/auth";

export default {
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
      errorMessageShow: false,
    };
  },
  methods: {
    async validateForm() {
      if (this.email && this.password) {
        try {
          await this.authStore.login(this.email, this.password);
          this.$router.push("/");
        } catch (err) {
          this.errorMessage = err.response.data.detail;
          this.errorMessageShow = true;
        }
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
  width: 400px;
  box-sizing: inherit;
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
  padding: 5px;
}
</style>
