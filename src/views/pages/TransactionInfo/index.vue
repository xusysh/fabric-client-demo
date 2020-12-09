<template>
  <div>
    <div>
      <v-form
        ref="form"
        style="padding:0 20px 20px 20px"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="[v => !!v || '输入不能为空']"
          label="源用户"
          required
        ></v-text-field>

        <v-select
          v-model="select"
          :items="items"
          :rules="[v => !!v || '输入不能为空']"
          label="目标用户"
          required
        ></v-select>

        <datetime-picker
          label="开始时间"
          :rules="[v => !!v || '输入不能为空']"
          v-model="txQuery.startTime"
          :clear-text="'清除'"
          :ok-text="'确定'"
          required
        >
        </datetime-picker>

        <datetime-picker
          label="结束时间"
          :rules="[v => !!v || '输入不能为空']"
          v-model="txQuery.endTime"
          :clear-text="'清除'"
          :ok-text="'确定'"
          required
        >
        </datetime-picker>

        <div style="text-align:right">
          <v-btn
            :disabled="!valid"
            color="indigo darken-1"
            class="mr-4"
            @click="validate"
          >
            搜索
          </v-btn>

          <v-btn @click="reset">
            重置
          </v-btn>
        </div>
      </v-form>

      <!-- <div class="text-center d-flex pb-4">
        <v-btn @click="all">
          全部展开
        </v-btn>
        <v-btn @click="none">
          全部关闭
        </v-btn>
      </div> -->

      <v-expansion-panels v-model="panel" multiple>
        <v-expansion-panel v-for="(item, i) in 5" :key="i">
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
import DatetimePicker from "@/views/components/DatetimePicker"
export default {
  name: "TransactionInfo",
  components: { DatetimePicker },
  data: () => ({
    panel: [0],
    txQuery: {
      startTime: null,
      endTime: null
    },
    //form示例
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
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
    },
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    }
  }
}
</script>
<style></style>
