<template>
  <div :style="{ height: height, width: width }"></div>
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
  watch: {
    option() {
      console.log(this.option)
      this.initChart()
    }
  },
  mounted() {},
  methods: {
    initChart() {
      //初始化echart实例，获取dom
      var chart = echarts.init(this.$el, "dark")
      chart.setOption(this.option)
    }
  },
  components: {}
}
</script>
