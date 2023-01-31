<template>
  <div class="d-flex justify-content-center">
    <div class="rounded border border-2 form-outline p-2 col-12 col-md-4">
      <form id="form" class="form" @submit.prevent="validateForm">
        <h3 class="text-center">Sign Up</h3>
        <div class="my-3">
          <label for="email">Email</label>
          <input
            class="form-control"
            type="email"
            v-model="email"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password">Password</label>
          <input
            class="form-control"
            type="password"
            placeholder="Enter Your Password"
            v-model="password"
            required
          />
        </div>
        <div class="mb-3">
          <label for="confirm-password">Confirm Password</label>
          <input
            class="form-control"
            type="password"
            placeholder="Enter Your Re-Password"
            v-model="confirmPassword"
            required
          />
        </div>
        <div class="mb-3">
          <label for="confirm-password">API Key</label>
          <input
            class="form-control"
            type="text"
            placeholder="Enter Your API Key"
            v-model="apiKey"
            required
          />
        </div>
        <div class="mb-3">
          <label for="confirm-password">API Secret</label>
          <input
            class="form-control"
            type="text"
            placeholder="Enter Your API Secret"
            v-model="apiSecret"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      apiKey: "",
      apiSecret: "",
    };
  },
  methods: {
    validateForm() {
      if (
        this.email &&
        this.password &&
        this.confirmPassword &&
        this.apiKey &&
        this.apiSecret
      ) {
        if (this.password != this.confirmPassword) {
          alert("คุณใส่รหัสผ่านไม่ตรงกัน");
        } else {
          axios
            .post("https://express-auth-kihk.onrender.com/api/auth/register", {
              email: this.email,
              password: this.password,
              binanceApiKey: this.apiKey,
              binanceApiSecret: this.apiSecret,
            })
            .then((res) => {
              console.log(res.data);
              this.$router.push("/login");
            })
            .catch((err) => {
              alert(JSON.stringify(err.response.data));
            });
        }
      }
    },
  },
};
</script>

<style scoped>
.form-outline {
  border-radius: 1px;
  background-color: #fff;
  box-sizing: inherit;
}

.form {
  padding: 30px;
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
