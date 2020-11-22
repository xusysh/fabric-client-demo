<template>
  <div>
    <v-card class="mx-auto" max-width="400">
      <v-card dark flat>
        <v-btn absolute bottom color="pink" right fab>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/forest.jpg"
          gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
        >
          <v-container class="fill-height">
            <v-row align="center">
              <strong class="display-4 font-weight-regular mr-6">8</strong>
              <v-row justify="end">
                <div class="headline font-weight-light">
                  Monday
                </div>
                <div class="text-uppercase font-weight-light">
                  February 2015
                </div>
              </v-row>
            </v-row>
          </v-container>
        </v-img>
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
                  收到工会转账￥6.10<br />
                  备注：10月捐款汇总
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
                  工会从我的捐款中取出￥8.12，分别捐给朱浩、郭靖宇、施铭杰
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
                    src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                  ></v-img>
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
                  向工会转账￥10.20<br />
                  备注：捐给有需要的人
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
                  从银行卡中充值￥50.00
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
