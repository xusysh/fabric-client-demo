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
        <v-card style="padding: 20px 0;background: #333333">
          <bar-animation-delay></bar-animation-delay>
        </v-card>
        <v-card style="padding-bottom:20px;background: #333333">
          <nested-pies></nested-pies>
        </v-card>
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
  computed: {
    curUserInfo() {
      return this.$store.state.userInfo
    }
  },
  watch: {
    curUserInfo(val) {
      console.log(val)
    }
  },
  data: () => ({
    option: true
  }),
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style></style>
