<template>
  <div class="container">
    <div
      class="rounded border border-2 form-outline position-absolute top-50 start-50 translate-middle"
    >
      <form id="form" class="form" @submit.prevent="validateForm">
        <h2 class="text-center">Sign Up</h2>
        <div class="mb-3">
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
    };
  },
  methods: {
    validateForm() {
      if (this.email && this.password && this.confirmPassword) {
        if (this.password != this.confirmPassword) {
          alert("คุณใส่รหัสผ่านไม่ตรงกัน");
        } else {
          axios
            .post("https://express-auth-kihk.onrender.com/api/auth/register", {
              email: this.email,
              password: this.password,
            })
            .then((res) => {
              console.log(res.data);
              this.$router.push("/login-1/login");
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
  width: 392px;
  padding: 10px 15px;
  box-sizing: inherit;
}

.form {
  padding: 30px;
}
</style>
