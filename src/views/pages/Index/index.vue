<template>
  <div>
    <v-carousel v-model="model" height="30vh">
      <v-carousel-item v-for="(color, i) in colors" :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">新闻 {{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {},
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
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"]
  }),
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style></style>
