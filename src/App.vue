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

    <v-dialog v-model="dialogOpen" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">{{ dialogTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-stepper v-model="step" vertical>
              <v-stepper-step step="1" :complete="step > 1">
                基本信息
              </v-stepper-step>

              <v-stepper-content step="1">
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>

                  <v-select
                    v-model="select"
                    :items="items"
                    :rules="[v => !!v || 'Item is required']"
                    label="Item"
                    required
                  ></v-select>

                  <v-checkbox
                    v-model="checkbox"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    label="Do you agree?"
                    required
                  ></v-checkbox>
                </v-form>
                <v-btn small color="primary" @click="step = 2">
                  下一步
                </v-btn>
              </v-stepper-content>

              <v-stepper-step step="2" :complete="step > 2">
                求助说明
              </v-stepper-step>

              <v-stepper-content step="2">
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>

                  <v-select
                    v-model="select"
                    :items="items"
                    :rules="[v => !!v || 'Item is required']"
                    label="Item"
                    required
                  ></v-select>

                  <v-checkbox
                    v-model="checkbox"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    label="Do you agree?"
                    required
                  ></v-checkbox>
                </v-form>
                <v-btn small color="primary" @click="step = 3">
                  下一步
                </v-btn>
                <v-btn small text @click="step = 1">
                  返回
                </v-btn>
              </v-stepper-content>

              <v-stepper-step
                :rules="[() => true]"
                step="3"
                :complete="step > 3"
              >
                医疗证明
              </v-stepper-step>

              <v-stepper-content step="3">
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>

                  <v-select
                    v-model="select"
                    :items="items"
                    :rules="[v => !!v || 'Item is required']"
                    label="Item"
                    required
                  ></v-select>

                  <v-checkbox
                    v-model="checkbox"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    label="Do you agree?"
                    required
                  ></v-checkbox>
                </v-form>
                <v-btn small color="primary" @click="step = 4">
                  下一步
                </v-btn>
                <v-btn small text @click="step = 2">
                  返回
                </v-btn>
              </v-stepper-content>

              <v-stepper-step step="4">
                经济状况
              </v-stepper-step>

              <v-stepper-content step="4">
                <!-- form -->
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>

                  <v-select
                    v-model="select"
                    :items="items"
                    :rules="[v => !!v || 'Item is required']"
                    label="Item"
                    required
                  ></v-select>

                  <v-checkbox
                    v-model="checkbox"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    label="Do you agree?"
                    required
                  ></v-checkbox>
                </v-form>
                <v-btn small color="primary" @click="step = 1">
                  下一步
                </v-btn>
                <v-btn small text @click="step = 3">
                  返回
                </v-btn>
              </v-stepper-content>
            </v-stepper>
          </v-container>
          <v-card-actions>
            <small>* 请先开通账户 *</small>
            <v-spacer></v-spacer>
            <v-btn color="secondary" @click="dialogOpen = false">
              关闭
            </v-btn>
          </v-card-actions>
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
        <span>账务信息</span>
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
    dialogOpen: false,
    step: 1,
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    dialogTitle: "发起筹款"
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
      this.dialogOpen = true
    },
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    }
  }
}
</script>
<style>
#app .v-bottom-navigation .v-btn {
  height: inherit !important;
}
</style>
