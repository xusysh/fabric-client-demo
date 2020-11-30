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
  created() {
    this.option = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        left: 10,
        data: [
          "直达",
          "营销广告",
          "搜索引擎",
          "邮件营销",
          "联盟广告",
          "视频广告",
          "百度",
          "谷歌",
          "必应",
          "其他"
        ]
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          selectedMode: "single",
          radius: [0, "30%"],

          label: {
            position: "inner"
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 335, name: "直达", selected: true },
            { value: 679, name: "营销广告" },
            { value: 1548, name: "搜索引擎" }
          ]
        },
        {
          name: "访问来源",
          type: "pie",
          radius: ["40%", "55%"],
          label: {
            formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
            backgroundColor: "#eee",
            color: "#999",
            borderColor: "#aaa",
            borderWidth: 1,
            borderRadius: 4,
            // shadowBlur:3,
            // shadowOffsetX: 2,
            // shadowOffsetY: 2,
            // shadowColor: '#999',
            // padding: [0, 7],
            rich: {
              a: {
                color: "#999",
                lineHeight: 22,
                align: "center"
              },
              // abg: {
              //     backgroundColor: '#333',
              //     width: '100%',
              //     align: 'right',
              //     height: 22,
              //     borderRadius: [4, 4, 0, 0]
              // },
              hr: {
                borderColor: "#aaa",
                width: "100%",
                borderWidth: 0.5,
                height: 0
              },
              b: {
                color: "#999",
                fontSize: 16,
                lineHeight: 33
              },
              per: {
                color: "#999",
                backgroundColor: "#334455",
                padding: [2, 4],
                borderRadius: 2
              }
            }
          },
          data: [
            { value: 335, name: "直达" },
            { value: 310, name: "邮件营销" },
            { value: 234, name: "联盟广告" },
            { value: 135, name: "视频广告" },
            { value: 1048, name: "百度" },
            { value: 251, name: "谷歌" },
            { value: 147, name: "必应" },
            { value: 102, name: "其他" }
          ]
        }
      ]
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style></style>
