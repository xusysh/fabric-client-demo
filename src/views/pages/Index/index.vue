<template>
  <div>
    <v-carousel v-model="model" height="30vh" hide-delimiters>
      <v-carousel-item v-for="item in items" :key="item" :src="item.src">
        <v-img
          alt=""
          class="shrink mr-2"
          contain
          :src="item.src"
          transition="scale-transition"
          height="70%"
          max-width="100%"
        />
        <v-sheet :color="item.color" height="30%" tile>
          <v-row align="center" justify="center" style="height: 40%;">
            <v-col cols="33%" xs="3" align="center">
              {{ item.target }}
            </v-col>
            <v-col cols="34%" xs="3" align="center">
              {{ item.current }}
            </v-col>
            <v-col cols="33%" xs="3" align="center">
              {{ item.times }}
            </v-col>
          </v-row>
          <v-row align="center" justify="center" style="height: 40%;">
            <v-col cols="33%" xs="3" align="center">
              目标金额
            </v-col>
            <v-col cols="34%" xs="3" align="center">
              已筹金额
            </v-col>
            <v-col cols="33%" xs="3" align="center">
              帮助人次
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-card
      elevation="6"
      max-width="90%"
      height="30vh"
      class="mx-auto"
      style="margin: 5vh 0"
    >
      <v-img
        alt=""
        :src="backPic"
        transition="scale-transition"
        height="64%"
        width="100%"
      >
        <v-card-text align="center">
          <div align="center" style="margin-top: 10%">
            采用
            <span style="color: darkgoldenrod; font-size: large">区块链</span>
            技术搭建，可
            <span style="color: darkgoldenrod; font-size: large">实时</span>
            查询
            <span style="color: darkgoldenrod; font-size: large">任意款项</span>
            去向，真正做到捐赠流程
            <span style="color: darkgoldenrod; font-size: large">全透明</span>
          </div>
        </v-card-text>
      </v-img>

      <v-row
        align="center"
        justify="center"
        style="height: 16%; margin-top: 1vh"
      >
        <v-img
          src="../../../assets/trace.png"
          max-width="10%"
          style="margin:0 12%;"
        />
        <v-img
          src="../../../assets/free.png"
          max-width="10%"
          style="margin:0 10%;"
        />
        <v-img
          src="../../../assets/clear.png"
          max-width="10%"
          style="margin:0 12%;"
        />
      </v-row>
      <v-row align="center" justify="center" style="height: 16%;">
        <v-col cols="33%" xs="3" align="center">可溯源</v-col>
        <v-col cols="33%" xs="3" align="center">0服务费</v-col>
        <v-col cols="33%" xs="3" align="center">全透明</v-col>
      </v-row>
    </v-card>

    <v-card elevation="6" max-width="80%" class="mx-auto">
      <v-card-title style="margin-left: 12%">不会向工会申请救助？</v-card-title>
      <v-card-text>
        <div align="center">点击左下角按钮，立即开始筹款！</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {},
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    drawer: false,
    group: null,
    selectedItem: 1,
    dialogOpen: true,
    items: [
      {
        color: "primary",
        target: "100000",
        current: "56800",
        times: "2113",
        src: require("../../../assets/1.jpg")
      },
      {
        color: "secondary",
        target: "800000",
        current: "349885",
        times: "10574",
        src: require("../../../assets/2.jpg")
      },
      {
        color: "yellow darken-2",
        target: "1000000",
        current: "22150",
        times: "100000",
        src: require("../../../assets/3.jpg")
      },
      {
        color: "red",
        target: "250000",
        current: "186440",
        times: "5987",
        src: require("../../../assets/4.jpg")
      },
      {
        color: "orange",
        target: "80000",
        current: "74558",
        times: "2643",
        src: require("../../../assets/5.jpg")
      }
    ],
    backPic: require("../../../assets/background2.jpg")
  }),
  created() {},
  mounted() {},
  watch: {
    group() {
      this.drawer = false
    }
  },
  methods: {}
}
</script>

<style></style>
