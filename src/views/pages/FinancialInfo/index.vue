<template>
  <div>
    <bar-animation-delay></bar-animation-delay>
    <nested-pies></nested-pies>
  </div>
</template>

<script>
import BarAnimationDelay from "@/views/components/charts/BarChart/BarAnimationDelay"
import NestedPies from "@/views/components/charts/PieChart/NestedPies"
export default {
  name: "UnionAccount",
  components: { BarAnimationDelay, NestedPies },
  data: () => ({}),
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style></style>
