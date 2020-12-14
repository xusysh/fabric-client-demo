<template>
  <div>
    <div>
      <v-form
        ref="form"
        style="padding:20px 20px 20px 20px"
        v-model="valid"
        lazy-validation
      >
        <v-select
          v-model="txQuery.sourceId"
          :items="demoUsers"
          item-text="nickname"
          item-value="userId"
          label="源用户"
          required
        ></v-select>

        <v-select
          v-model="txQuery.targetId"
          :items="demoUsers"
          item-text="nickname"
          item-value="userId"
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
        <v-expansion-panel v-for="(item, i) in txInfo" :key="i">
          <v-expansion-panel-header>
            <v-card flat>
              <v-row dense>
                <v-col>{{ item.Date }} {{ item.Time }}</v-col>
              </v-row>
              <v-row dense>
                <v-col>
                  {{ item.From }}
                </v-col>
              </v-row>
            </v-card>
            <v-card flat align="right">
              <v-row dense>
                <v-col>
                  {{ item.Money }}
                </v-col>
              </v-row>
              <v-row dense>
                <v-col>
                  {{ item.To }}
                </v-col>
              </v-row>
            </v-card>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row dense>
              <v-col class="text--secondary">转出方: {{ item.From }}</v-col>
              <v-col class="text--secondary" align="right">
                转入方: {{ item.To }}
              </v-col>
            </v-row>
            <v-row dense>
              <v-col class="text--secondary" cols="8">
                日期: {{ item.Date }} {{ item.Time }}
              </v-col>
              <v-col class="text--secondary" align="right">
                金额：{{ item.Money }}
              </v-col>
            </v-row>
            <v-row dense>
              <v-col class="text--secondary">备注：{{ item.Comment }}</v-col>
            </v-row>
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
    panel: [0],
    txQuery: {
      sourceId: null,
      targetId: null,
      startTime: null,
      endTime: null
    },
    //form示例
    valid: true,
    demoUsers: [
      { userId: "guojingyu.js", nickname: "郭靖宇" },
      { userId: "zhuhao2.js", nickname: "朱浩" },
      { userId: "shimingjie.js", nickname: "施铭杰" },
      { userId: "gonghui.js", nickname: "工会" }
    ],
    txInfo: [
      {
        Date: "2020-10-11",
        Time: "18:00:00",
        From: "朱浩",
        To: "工会",
        Money: 10.5,
        Comment: "10月捐赠"
      }
    ]
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
