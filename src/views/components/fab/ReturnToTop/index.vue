<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-fab-transition>
        <v-btn
          v-on="on"
          v-show="fab"
          v-scroll="onScroll"
          style="bottom: 70px;right:20px"
          aria-label="Scroll to top"
          color="red"
          x-small
          dark
          fab
          fixed
          bottom
          right
          title="Scroll to top"
          @click="toTop"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
      </v-fab-transition>
    </template>
    <span>返回顶部</span>
  </v-tooltip>
</template>

<script>
// Utilities
export default {
  data: () => ({ fab: false }),
  methods: {
    onScroll() {
      if (typeof window === "undefined") return
      const top = window.pageYOffset || document.documentElement.offsetTop || 0
      this.fab = top > 80
    },
    toTop() {
      //   this.$router.push({ hash: '' })
      this.$vuetify.goTo(0)
    }
  }
}
</script>
