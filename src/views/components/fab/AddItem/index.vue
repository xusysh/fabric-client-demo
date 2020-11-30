<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-fab-transition>
        <v-speed-dial
          v-model="fab"
          fixed
          style="bottom: 70px;left:20px"
          :top="top"
          :bottom="bottom"
          :right="right"
          :left="left"
          :direction="direction"
          :open-on-hover="hover"
          :transition="transition"
        >
          <template v-slot:activator>
            <v-btn
              v-model="fab"
              color="blue darken-2"
              dark
              fab
              x-small
              v-on="on"
            >
              <v-icon v-if="fab">mdi-close</v-icon>
              <v-icon v-else>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn
                fab
                dark
                small
                color="indigo"
                v-on="on"
                @click="donate()"
                x-small
                disabled
              >
                <v-icon>mdi-handshake</v-icon>
              </v-btn>
            </template>
            <span>捐赠</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn
                fab
                dark
                small
                color="green"
                v-on="on"
                @click="fundRaising()"
                x-small
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </template>
            <span>发布筹款</span>
          </v-tooltip>
        </v-speed-dial>
      </v-fab-transition>
    </template>
    <span>操作</span>
  </v-tooltip>
</template>

<script>
// Utilities
export default {
  data: () => ({
    direction: "top",
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: false,
    right: false,
    bottom: true,
    left: true,
    transition: "slide-y-reverse-transition"
  }),
  methods: {
    openDialog() {
      this.$emit("openDialog")
    },
    fundRaising() {
      this.openDialog()
    },
    donate() {
      this.openDialog()
    }
  }
}
</script>

<style scoped>
#create .v-speed-dial {
  position: absolute;
  bottom: 160px;
  right: 40px;
}

#create .v-btn--floating {
  position: relative;
}
</style>
