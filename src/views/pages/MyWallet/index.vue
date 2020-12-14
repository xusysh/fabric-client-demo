<template>
  <div>
    <v-card class="mx-auto" max-width="400">
      <v-card dark flat>
        <v-card class="mx-auto" max-width="434" tile>
          <v-img
            height="100%"
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606065482158&di=73e8b9395d3c085f1f38db694174ab41&imgtype=0&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F12%2F29%2F16pic_1229082_b.jpg"
          >
            <v-row align="end" class="fill-height">
              <v-col align-self="start" class="pa-0" cols="12">
                <v-avatar
                  class="profile"
                  size="164"
                  tile
                  style="margin-left:16px;margin-top:10px"
                >
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row> </template
                  ></v-img>
                </v-avatar>
              </v-col>
              <v-col class="py-0">
                <!-- <v-skeleton-loader
                  :v-bind="true"
                  type="list-item-two-line"
                  style="background: transparent;"
                ></v-skeleton-loader> -->
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content>
                    <v-list-item-title class="title">
                      {{ curUserInfo.name }} - 江苏
                    </v-list-item-title>
                    <v-list-item-subtitle
                      >当前余额：₿
                      {{ curUserInfo.balance }}</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </v-card>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item
            v-for="(userTx, index) in txTimeline"
            :key="index"
            :color="userTx.type === 'income' ? 'success' : 'pink'"
            small
          >
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>{{ userTx.time }}</strong>
              </v-col>
              <v-col>
                <strong>{{
                  userTx.type === "income" ? "转入" : "转出"
                }}</strong>
                <div class="caption">
                  <span style="height: 100%;">
                    {{ userTx.type === "income" ? "收到" : "向"
                    }}{{ idToName[userTx.cpId] }}转账
                  </span>
                  <!-- toto:对齐 -->
                  <v-chip
                    class="ma-2"
                    :color="userTx.type === 'income' ? 'success' : 'pink'"
                    outlined
                    x-small
                  >
                    <v-icon left x-small>
                      mdi-currency-btc
                    </v-icon>
                    {{ userTx.amount }}
                  </v-chip>
                  <br />备注：{{ userTx.comment }} <br />钱包余额：₿
                  {{ userTx.balance }}
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>

          <!-- <v-timeline-item color="blue darken-2" small>
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>2020-10-20 12:00</strong>
              </v-col>
              <v-col>
                <strong>捐款到账</strong>
                <div class="caption mb-2">
                  工会从我的捐款中取出
                  <v-chip class="ma-2" color="blue" outlined x-small>
                    <v-icon left x-small>
                      mdi-currency-btc
                    </v-icon>
                    10.20
                  </v-chip>
                  ，分别捐给
                  <v-chip class="ma-2" color="primary" label small>
                    <v-icon left small>
                      mdi-account-circle-outline
                    </v-icon>
                    朱浩 </v-chip
                  ><v-chip class="ma-2" color="primary" label small>
                    <v-icon left small>
                      mdi-account-circle-outline
                    </v-icon>
                    王涛
                  </v-chip>
                  <v-chip class="ma-2" color="primary" label small>
                    <v-icon left small>
                      mdi-account-circle-outline
                    </v-icon>
                    曹陈宸
                  </v-chip>
                </div>
                <v-avatar>
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row> </template
                  ></v-img>
                </v-avatar>
                <v-avatar>
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row> </template
                  ></v-img>
                </v-avatar>
                <v-avatar>
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Wayfarers&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row> </template
                  ></v-img>
                </v-avatar>
              </v-col>
            </v-row>
          </v-timeline-item> -->

          <!-- 固定初始金额 -->
          <v-timeline-item color="blue" small>
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>2020-08-08 18:00</strong>
              </v-col>
              <v-col>
                <strong>充值到账</strong>
                <div class="caption">
                  从银行卡中充值<v-chip
                    class="ma-2"
                    color="blue"
                    outlined
                    x-small
                  >
                    <v-icon left x-small>
                      mdi-currency-btc
                    </v-icon>
                    100.00
                  </v-chip>
                  <br />钱包余额：₿ 100.00
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
    <v-snackbar
      v-model="message.show"
      :color="message.type"
      :timeout="message.timeout"
      top
    >
      {{ message.text }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "MyWallet",
  components: {},
  computed: {
    curUserInfo() {
      return this.$store.state.userInfo
    },
    idToName() {
      return this.$store.state.idToName
    }
  },
  watch: {
    curUserInfo(val) {
      val
      this.getUserWalletInfo()
    }
  },
  data: () => ({
    message: {
      show: false,
      type: "success"
    },
    txTimeline: [
      {
        type: "outcome",
        time: "2020-11-01 09:00",
        cpId: "gonghui.js",
        comment: "捐给施铭杰",
        amount: "25.00",
        balance: "50.00"
      },
      {
        type: "income",
        time: "2020-11-01 09:00",
        cpId: "gonghui.js",
        comment: "10月捐款汇总",
        amount: "22.40",
        balance: "75.00"
      },
      {
        type: "outcome",
        time: "2020-11-01 09:00",
        cpId: "gonghui.js",
        comment: "捐给有需要的人",
        amount: "12.60",
        balance: "87.40"
      }
    ]
  }),
  created() {
    this.getUserWalletInfo()
  },
  mounted() {},
  methods: {
    async getUserWalletInfo() {
      console.log(this.curUserInfo)
      try {
        const { data } = await this.$axios.get(
          `/tx/filter/${this.curUserInfo.userId}`
        )
        console.log(data)
        this.$toast.success("获取钱包信息成功", {
          position: "top-right",
          timeout: 2000,
          closeOnClick: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: false,
          closeButton: "button",
          icon: true,
          rtl: false
        })
      } catch (ex) {
        console.log(ex)
        this.$toast.error("获取钱包信息失败：" + ex.message, {
          position: "top-right",
          timeout: 2000,
          closeOnClick: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: false,
          closeButton: "button",
          icon: true,
          rtl: false
        })
      }
    },
    ShowMessage(type, text, timeout) {
      this.message.timeout = timeout | 1000
      this.message.type = type
      this.message.text = text
      this.message.show = true
    }
  }
}
</script>

<style></style>
