<template>
  <div>
    <basic-chart :option="option"></basic-chart>
  </div>
</template>

<script>
import BasicChart from "@/views/components/charts/BasicChart"
// import DateToStr from "@/utils/time"
export default {
  components: { BasicChart },
  data: () => ({
    option: {}
  }),
  props: {
    title: {
      type: String,
      default: "收支情况"
    },
    legendList: {
      type: Array,
      default: () => ["收入", "支出", "总计"]
    },
    xAxisData: {
      type: Array,
      default: () => [
        "2020-01-01",
        "2020-01-02",
        "2020-01-03",
        "2020-01-04",
        "2020-01-05"
      ]
    },
    dataListSeries: {
      type: Array,
      default: () => [
        [1, 2, 3, 4, 5],
        [1, 3, 2, 1, 6],
        [3, 2, 1, 2, 4]
      ]
    }
  },
  watch: {
    dataListSeries() {
      this.init()
    }
  },
  created() {
    // var xAxisData = []
    // var data1 = []
    // var data2 = []
    // var data3 = []
    // var date = new Date(2020, 0, 1)
    // for (var i = 0; i < 100; i++) {
    // xAxisData.push(DateToStr(date, "yyyy-MM-dd"))
    // date.setDate(date.getDate() + 1)
    // data1.push(
    //   Math.abs((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5).toFixed(2)
    // )
    // data2.push(
    //   Math.abs((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5).toFixed(2)
    // )
    // data3.push(((Math.cos(i / 5) * (i / 5 - 20) + i / 6) * 5).toFixed(2))
    // }
  },
  mounted() {},
  methods: {
    init() {
      this.option = {
        title: {
          left: "10px",
          top: "6%",
          text: this.title
        },
        legend: {
          top: "6%",
          right: "10px",
          data: this.legendList
        },
        toolbox: {
          orient: "vertical",
          top: "20%",
          feature: {
            dataZoom: {
              yAxisIndex: false
            },
            magicType: {
              type: ["stack", "tiled"]
            },
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        dataZoom: [
          {
            type: "inside"
          },
          {
            type: "slider"
          }
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        xAxis: {
          data: this.xAxisData,
          silent: false,
          splitLine: {
            show: false
          },
          splitArea: {
            show: false
          }
        },
        yAxis: {},
        series: [
          {
            name: "支出",
            type: "bar",
            data: this.dataListSeries[0],
            animationDelay: function(idx) {
              return idx * 10
            }
          },
          {
            name: "收入",
            type: "bar",
            data: this.dataListSeries[1],
            animationDelay: function(idx) {
              return idx * 10 + 100
            }
          },
          {
            name: "总计",
            type: "bar",
            data: this.dataListSeries[2],
            animationDelay: function(idx) {
              return idx * 10 + 100
            },
            itemStyle: {
              normal: {
                color: "#82AF5F"
              }
            }
          }
        ],
        animationEasing: "elasticOut",
        animationDelayUpdate: function(idx) {
          return idx * 5
        }
      }
    }
  }
}
</script>

<style></style>
