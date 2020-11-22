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
                  />
                </v-avatar>
              </v-col>
              <v-col class="py-0">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content>
                    <v-list-item-title class="title">
                      郭靖宇 - 江苏
                    </v-list-item-title>
                    <v-list-item-subtitle
                      >guojingyu.js@ccb.com</v-list-item-subtitle
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
          <v-timeline-item color="cyan darken-1" small>
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>2020-11-01</strong>
              </v-col>
              <v-col>
                <strong>转入</strong>
                <div class="caption">
                  收到工会转账
                  <v-chip class="ma-2" color="success" outlined x-small>
                    <v-icon left x-small>
                      mdi-currency-btc
                    </v-icon>
                    6.10
                  </v-chip>
                  <br />备注：10月捐款汇总 <br />钱包余额：₿37.30
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item color="blue darken-2" small>
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>2020-10-20</strong>
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
                  ></v-img>
                </v-avatar>
                <v-avatar>
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                  ></v-img>
                </v-avatar>
                <v-avatar>
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Wayfarers&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                  />
                </v-avatar>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item color="pink" small>
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>2020-09-03</strong>
              </v-col>
              <v-col>
                <strong>转出</strong>
                <div class="caption">
                  向工会转账<v-chip class="ma-2" color="pink" outlined x-small>
                    <v-icon left x-small>
                      mdi-currency-btc
                    </v-icon>
                    18.80
                  </v-chip>
                  <br />备注：捐给有需要的人 <br />钱包余额：₿31.20
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item color="teal lighten-3" small>
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>2020-08-08</strong>
              </v-col>
              <v-col>
                <strong>充值到账</strong>
                <div class="caption">
                  从银行卡中充值<v-chip
                    class="ma-2"
                    color="success"
                    outlined
                    x-small
                  >
                    <v-icon left x-small>
                      mdi-currency-btc
                    </v-icon>
                    50.00
                  </v-chip>
                  <br />钱包余额：₿50.00
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MyWallet",
  components: {},
  data: () => ({
    timelineDataList: [
      {
        color: "red",
        date: "2020-02-03",
        title: "转出",
        message: "向工会转账￥10.20"
      },
      {
        color: "green",
        date: "2020-02-01",
        title: "转入",
        message: "收到工会转账￥8.30"
      },
      {
        color: "cyan",
        date: "2020-02-03",
        title: "事件",
        message: "消息"
      }
    ]
  }),
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style></style>
