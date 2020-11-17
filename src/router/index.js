import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/components/Index/index";
import UnionAccount from "@/components/UnionAccount/index";
import TransactionInfo from "@/components/TransactionInfo/index";
import MyWallet from "@/components/MyWallet/index";

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
