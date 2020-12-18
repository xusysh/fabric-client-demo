<template>
  <div>
    <v-tabs color="primary" centered @change="tabChange">
      <v-tab>
        <v-icon left>
          mdi-account
        </v-icon>
        我的
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-account-group
        </v-icon>
        工会
      </v-tab>
      <v-tab-item v-for="n in 2" :key="n" disabled>
        <v-card style="padding: 20px 0;background: #333333">
          <v-overlay absolute :value="finLocInfoLoading">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
          </v-overlay>
          <nested-pies
            ref="finLocChart"
            :legend-list="finLocLegendList"
            :data-list="finLocDataList"
          ></nested-pies>
        </v-card>
        <v-card style="padding-bottom:20px;background: #333333">
          <v-overlay absolute :value="finInfoLoading">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
          </v-overlay>
          <bar-animation-delay
            ref="finChart"
            :legend-list="finLegendList"
            :x-axis-data="finDates"
            :data-list-series="finDataListSeries"
          ></bar-animation-delay>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import BarAnimationDelay from "@/views/components/charts/BarChart/BarAnimationDelay"
import NestedPies from "@/views/components/charts/PieChart/NestedPies"
export default {
  name: "UnionAccount",
  components: { BarAnimationDelay, NestedPies },
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
      console.log(val)
      this.getFinLocInfo()
      this.getFinInfo()
    }
  },
  data: () => ({
    option: true,
    finLocLegendList: [],
    finLocDataList: [],
    finLegendList: ["收入", "支出", "总计"],
    finDates: [],
    finDataListSeries: [[], [], []],
    curTab: 0,
    finLocInfoLoading: false,
    finInfoLoading: true
  }),
  created() {},
  mounted() {
    this.getFinLocInfo()
    this.getFinInfo()
  },
  methods: {
    async getFinLocInfo() {
      this.finLocInfoLoading = true
      try {
        const { data } = await this.$axios.get(
          `/stat/fin-loc-info/${
            this.curTab === "union" ? "gonghui.js" : this.curUserInfo.userId
          }`
        )
        console.log(data)
        this.finLocLegendList = data.data.map(
          item => this.idToName[item.targetId]
        )
        this.finLocDataList = data.data.map(item => {
          return { value: item.amount, name: this.idToName[item.targetId] }
        })
        console.log(this.finLocLegendList)
        console.log(this.finLocDataList)
        this.$refs.finLocChart[0].init()
        this.finLocInfoLoading = false
      } catch (ex) {
        this.$toast.success("生成资金流向信息失败", {
          position: "top-right",
          timeout: 1500,
          closeOnClick: true,
          draggable: true,
          draggablePercent: 0.4,
          showCloseButtonOnHover: false,
          hideProgressBar: false,
          closeButton: "button",
          icon: true,
          rtl: false
        })
        this.finLocInfoLoading = false
      }
    },
    async getFinInfo() {
      this.finInfoLoading = true
      try {
        const { data } = await this.$axios.post(`/stat/fin-info`, {
          userId:
            this.curTab === "union" ? "gonghui.js" : this.curUserInfo.userId,
          startTime: "2020-12-01 00:00:00",
          endTime: "2021-12-01 00:00:00"
        })
        this.finDates = []
        this.finDataListSeries = [[], [], []]
        for (const finInfo of data.data) {
          this.finDates.push(finInfo.date)
          this.finDataListSeries[0].push(finInfo.income || 0)
          this.finDataListSeries[1].push(finInfo.expense || 0)
          this.finDataListSeries[2].push(finInfo.totalBalance || 0)
        }
        console.log(data)
        this.finInfoLoading = false
      } catch (ex) {
        this.$toast.success("生成收支情况信息失败", {
          position: "top-right",
          timeout: 1500,
          closeOnClick: true,
          draggable: true,
          draggablePercent: 0.4,
          showCloseButtonOnHover: false,
          hideProgressBar: false,
          closeButton: "button",
          icon: true,
          rtl: false
        })
        this.finLocInfoLoading = false
      }
    },
    tabChange(tab) {
      this.curTab = tab === 1 ? "union" : "user"
      this.getFinLocInfo()
      this.getFinInfo()
    }
  }
}
</script>

<style></style>
