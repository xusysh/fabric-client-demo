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
      <router-view></router-view>
    </v-main>

    <v-bottom-navigation
      app
      v-model="tab"
      :background-color="tabColor"
      dark
      shift
    >
      <v-btn @click="changeTab('/index')">
        <span>首页</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn @click="changeTab('/union-account')">
        <span>工会账务</span>
        <v-icon>mdi-account-group</v-icon>
      </v-btn>

      <v-btn @click="changeTab('/transaction-info')">
        <span>交易查询</span>
        <v-icon>mdi-currency-usd</v-icon>
      </v-btn>

      <v-btn @click="changeTab('/my-wallet')">
        <span>我的钱包</span>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},
  computed: {
    tabColor() {
      switch (this.tab) {
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
        case 2:
          return "brown";
        case 3:
          return "indigo";
        default:
          return "blue-grey";
      }
    }
  },
  data: () => ({
    tab: ""
    //
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
  methods: {
    changeTab(tabName) {
      const curPath = window.location.pathname;
      console.log(curPath);
      console.log(tabName);
      if (curPath.indexOf(tabName) === -1) {
        this.$router.push(tabName);
      }
    }
  }
};
</script>
