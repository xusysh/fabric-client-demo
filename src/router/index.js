import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: "/index" },
  {
    path: "/index",
    name: "Index",
    component: resolve => require(["@/views/pages/Index/index"], resolve)
  },
  {
    path: "/union-account",
    name: "UnionAccount",
    component: resolve =>
      require(["@/views/pages/FinancialInfo/index"], resolve)
  },
  {
    path: "/transaction-info",
    name: "TransactionInfo",
    component: resolve =>
      require(["@/views/pages/TransactionInfo/index"], resolve)
  },
  {
    path: "/my-wallet",
    name: "MyWallet",
    component: resolve => require(["@/views/pages/MyWallet/index"], resolve)
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
