import { defineStore } from "pinia";
import VueCookies from "vue-cookies";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    accessToken: VueCookies.get("accessToken"),
    email: null,
  }),
  actions: {
    async login(email, password) {
      const res = await axios.post(
        "https://express-auth-kihk.onrender.com/api/auth/login",
        {
          email: email,
          password: password,
        }
      );
      const accessToken = res.data.access_token;
      VueCookies.set("accessToken", accessToken, {
        expires: "1h",
        // secure: process.env.NODE_ENV === 'production'
      });
      this.accessToken = accessToken;
    },
    logout() {
      VueCookies.remove("accessToken");
      this.accessToken = null;
    },
  },
});
