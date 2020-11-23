<template>
  <v-app>
    <v-app-bar app :color="tabColor" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/blockchain.png"
          transition="scale-transition"
          width="50"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">FABRIC DEMO APP - JSCCB</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <!-- <transition name="fade-transform" mode="out-in"> -->
      <router-view></router-view>
      <!-- </transition> -->
    </v-main>

    <v-bottom-navigation
      app
      v-model="tab"
      :background-color="tabColor"
      dark
      shift
    >
      <v-btn value="/index" @click="changeTab('/index')">
        <span>首页</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn value="/union-account" @click="changeTab('/union-account')">
        <span>工会账务</span>
        <v-icon>mdi-account-group</v-icon>
      </v-btn>

      <v-btn value="/transaction-info" @click="changeTab('/transaction-info')">
        <span>交易查询</span>
        <v-icon>mdi-currency-usd</v-icon>
      </v-btn>

      <v-btn value="/my-wallet" @click="changeTab('/my-wallet')">
        <span>我的钱包</span>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: "App",
  watch: {
    $route(to, from) {
      console.log(from.path)
      console.log(to.path)
      this.tab = to.path
    }
  },
  components: {},
  computed: {
    tabColor() {
      switch (this.tab) {
        case "/index":
          return "blue-grey"
        case "/union-account":
          return "teal"
        case "/transaction-info":
          return "brown"
        case "/my-wallet":
          return "indigo"
        default:
          return "blue-grey"
      }
    }
  },
  data: () => ({
    tab: ""
    //
  }),
  created() {
    this.$vuetify.theme.dark = true
    this.tab = window.location.pathname
  },
  methods: {
    changeTab(tabName) {
      const curPath = window.location.pathname
      // console.log(curPath);
      // console.log(tabName);
      if (curPath.indexOf(tabName) === -1) {
        this.$router.push(tabName)
      }
    }
  }
}
</script>
<style>
#app .v-bottom-navigation .v-btn {
  height: inherit !important;
}
</style>
