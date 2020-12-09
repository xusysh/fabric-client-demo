<template>
  <div>
    <v-tabs color="primary" centered>
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
        <bar-animation-delay></bar-animation-delay>
        <nested-pies></nested-pies>
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
  data: () => ({
    option: true
  }),
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style></style>
