<template>
  <div style="height: 400px; width: 1000px" id="chart"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      //初始化echart实例，获取dom
      var chart = echarts.init(document.getElementById("chart"));
      const option = {
        color: ["#618FC8"],
        backgroundColor: "#F8F8F8",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: 20,
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["Decade Ⅰ", "Decade Ⅱ", "Decade Ⅲ"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            min: 1600,
            max: 2100,
            interval: 50
          }
        ],
        series: [
          {
            name: "新增订单",
            type: "bar",
            barWidth: "40%",
            data: [1770, 1852, 2000]
          }
        ]
      };
      chart.setOption(option);
    }
  },
  components: {}
};
</script>
