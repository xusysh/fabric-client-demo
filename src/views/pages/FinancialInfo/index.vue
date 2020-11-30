<template>
  <div>
    <bar-animation-delay></bar-animation-delay>
    <nested-pies></nested-pies>
    <v-switch v-model="option" inset :label="option.toString()"></v-switch>
  </div>
</template>

<script>
import BarAnimationDelay from "@/views/components/charts/BarChart/BarAnimationDelay"
import NestedPies from "@/views/components/charts/PieChart/NestedPies"
export default {
  name: "UnionAccount",
  components: { BarAnimationDelay, NestedPies },
  data: () => ({
    option: true
  }),
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style></style>
