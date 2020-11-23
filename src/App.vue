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

    <return-to-top />
    <add-item @openDialog="openDialog()" />

    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">发起筹款</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-stepper v-model="step" vertical>
              <v-stepper-step step="1" complete>
                Name of step 1
              </v-stepper-step>

              <v-stepper-content step="1">
                <v-card
                  color="grey lighten-1"
                  class="mb-12"
                  height="200px"
                ></v-card>
                <v-btn small color="primary" @click="step = 3">
                  下一步
                </v-btn>
                <v-btn small text>
                  取消
                </v-btn>
              </v-stepper-content>

              <v-stepper-step step="2" complete>
                Name of step 2
              </v-stepper-step>

              <v-stepper-content step="2">
                <v-card
                  color="grey lighten-1"
                  class="mb-12"
                  height="200px"
                ></v-card>
                <v-btn small color="primary" @click="step = 3">
                  下一步
                </v-btn>
                <v-btn small text>
                  取消
                </v-btn>
              </v-stepper-content>

              <v-stepper-step :rules="[() => false]" step="3">
                Ad templates
                <small>Alert message</small>
              </v-stepper-step>

              <v-stepper-content step="3">
                <v-card
                  color="grey lighten-1"
                  class="mb-12"
                  height="200px"
                ></v-card>
                <v-btn small color="primary" @click="step = 3">
                  下一步
                </v-btn>
                <v-btn small text>
                  取消
                </v-btn>
              </v-stepper-content>

              <v-stepper-step step="4">
                View setup instructions
              </v-stepper-step>

              <v-stepper-content step="4">
                <v-card
                  color="grey lighten-1"
                  class="mb-12"
                  height="200px"
                ></v-card>
                <v-btn small color="primary" @click="step = 3">
                  下一步
                </v-btn>
                <v-btn small text>
                  取消
                </v-btn>
              </v-stepper-content>
            </v-stepper>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
      </v-card>
    </v-dialog>

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
import AddItem from "@/views/components/fab/AddItem"
import ReturnToTop from "@/views/components/fab/ReturnToTop"
export default {
  name: "App",
  components: { ReturnToTop, AddItem },
  watch: {
    $route(to, from) {
      // console.log(from.path)
      // console.log(to.path)
      from.path //占位
      this.tab = to.path
    }
  },
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
    tab: "",
    dialog: false,
    step: 2
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
    },
    openDialog() {
      this.dialog = true
    }
  }
}
</script>
<style>
#app .v-bottom-navigation .v-btn {
  height: inherit !important;
}
</style>
