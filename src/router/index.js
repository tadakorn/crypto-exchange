import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/market",
      name: "market",
      component: () => import("../views/MarketView.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("../views/IndexView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/overview-wallet",
      name: "overview_wallet",
      component: () => import("../views/wallet/OverviewWalletView.vue"),
    },
    {
      path: "/spot-wallet",
      name: "spot_wallet",
      component: () => import("../views/wallet/SpotWalletView.vue"),
    },
    {
      path: "/funding-wallet",
      name: "funding_wallet",
      component: () => import("../views/wallet/FundingWalletView.vue"),
    },
    {
      path: "/trade",
      name: "trade",
      component: () => import("../views/TradeView.vue"),
    },
  ],
});

export default router;
