<template>
  <div>
    <div>
      <div class="text-center d-flex pb-4">
        <v-btn @click="all">
          全部展开
        </v-btn>
        <v-btn @click="none">
          全部关闭
        </v-btn>
        <div>{{ panel }}</div>
      </div>

      <v-expansion-panels v-model="panel" multiple>
        <v-expansion-panel v-for="(item, i) in items" :key="i">
          <v-expansion-panel-header>交易 {{ item }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransactionInfo",
  data: () => ({
    panel: [0],
    items: 5
  }),
  created() {},
  mounted() {},
  methods: {
    all() {
      this.panel = [...Array(this.items).keys()].map((k, i) => i)
    },
    // Reset the panel
    none() {
      this.panel = []
    }
  }
}
</script>
<style></style>
