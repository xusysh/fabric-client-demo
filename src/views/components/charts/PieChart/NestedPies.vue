<template>
  <div>
    <basic-chart :option="option"></basic-chart>
  </div>
</template>

<script>
import BasicChart from "@/views/components/charts/BasicChart"
export default {
  components: { BasicChart },
  data: () => ({
    option: {}
  }),
  props: {
    title: {
      type: String,
      default: "资金流向"
    },
    legendList: {
      type: Array,
      default: () => [
        "直接访问",
        "邮件营销",
        "联盟广告",
        "视频广告",
        "搜索引擎"
      ]
    },
    dataList: {
      type: Array,
      default: () => [
        { value: 335, name: "直接访问" },
        { value: 310, name: "邮件营销" },
        { value: 234, name: "联盟广告" },
        { value: 135, name: "视频广告" },
        { value: 400, name: "网页广告" },
        { value: 60, name: "搜索引擎" }
      ]
    }
  },
  created() {},
  mounted() {},
  watch: {
    dataList() {
      this.init()
    }
  },
  methods: {
    init() {
      console.log(this.legendList)
      console.log(this.dataList)
      this.option = {
        title: {
          text: this.title,
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "horizontal",
          top: "bottom",
          data: this.legendList,
          type: "scroll"
        },
        toolbox: {
          orient: "vertical",
          top: "26%",
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ["pie", "funnel"]
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: "资金流向",
            type: "pie",
            radius: "60%",
            center: ["50%", "50%"],
            data: this.dataList,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style></style>
