<template>
  <div :style="{ height: height, width: width }" id="chart"></div>
</template>
<script>
import echarts from "echarts"
export default {
  props: {
    height: {
      type: String,
      default: "30vh"
    },
    width: {
      type: String,
      default: "100%"
    },
    option: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      //初始化echart实例，获取dom
      var chart = echarts.init(document.getElementById("chart"))
      chart.setOption(this.option)
    }
  },
  components: {}
}
</script>
