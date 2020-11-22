import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/pages/Index/index";
import UnionAccount from "@/views/pages/UnionAccount/index";
import TransactionInfo from "@/views/pages/TransactionInfo/index";
import MyWallet from "@/views/pages/MyWallet/index";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/index" },
  {
    path: "/index",
    name: "Index",
    component: Index
  },
  {
    path: "/union-account",
    name: "UnionAccount",
    component: UnionAccount
  },
  {
    path: "/transaction-info",
    name: "TransactionInfo",
    component: TransactionInfo
  },
  {
    path: "/my-wallet",
    name: "MyWallet",
    component: MyWallet
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
