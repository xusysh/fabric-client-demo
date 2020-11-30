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
      title: {
        text: "资金流向",
        left: "center",
        top: "2%"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: "horizontal",
        top: "bottom",
        data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
        type: "scroll"
      },
      series: [
        {
          type: "pie",
          radius: "60%",
          center: ["50%", "50%"],
          data: [
            { value: 335, name: "直接访问" },
            { value: 310, name: "邮件营销" },
            { value: 234, name: "联盟广告" },
            { value: 135, name: "视频广告" },
            { value: 400, name: "网页广告" },
            { value: 60, name: "搜索引擎" }
          ],
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
  },
  mounted() {},
  methods: {}
}
</script>

<style></style>
