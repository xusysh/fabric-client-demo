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
          label="源用户（空值代表任意用户）"
          clearable
          required
        ></v-select>

        <v-select
          v-model="txQuery.targetId"
          :items="demoUsers"
          item-text="nickname"
          item-value="userId"
          label="目标用户（空值代表任意用户）"
          clearable
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
            @click="filter"
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

      <div v-if="txInfoLoading">
        <v-skeleton-loader
          v-for="n in 2"
          :key="n"
          class="mx-auto"
          type="table-heading, list-item-three-line"
        ></v-skeleton-loader>
      </div>

      <v-expansion-panels v-else v-model="expandedPanel" multiple popout>
        <v-expansion-panel v-for="(item, i) in txInfo" :key="i">
          <v-expansion-panel-header>
            <v-card flat>
              <v-row dense>
                <v-col>{{ item.date }} {{ item.time }}</v-col>
              </v-row>
              <v-row dense>
                <v-col>
                  {{ tranUserId(item.from) }}
                </v-col>
              </v-row>
            </v-card>
            <v-card flat align="right" style="padding-right:6px">
              <v-row dense>
                <v-col>
                  {{ item.money }}
                </v-col>
              </v-row>
              <v-row dense>
                <v-col>
                  {{ tranUserId(item.to) }}
                </v-col>
              </v-row>
            </v-card>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row dense>
              <v-col class="text--secondary">
                转出方: {{ tranUserId(item.from) }}
              </v-col>
              <v-col class="text--secondary" align="right">
                转入方: {{ tranUserId(item.to) }}
              </v-col>
            </v-row>
            <v-row dense>
              <v-col class="text--secondary" cols="8">
                日期: {{ item.date }} {{ item.time }}
              </v-col>
              <v-col class="text--secondary" align="right">
                金额：{{ item.money }}
              </v-col>
            </v-row>
            <v-row dense>
              <v-col class="text--secondary">备注：{{ item.comment }}</v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
import DatetimePicker from "@/views/components/DatetimePicker"
import DateToStr from "@/utils/time"

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
    expandedPanel: [0],
    txQuery: {
      sourceId: "gonghui.js",
      targetId: "",
      startTime: new Date(),
      endTime: new Date()
    },
    //form示例
    valid: true,
    demoUsers: [
      { userId: "guojingyu.js", nickname: "郭靖宇" },
      { userId: "zhuhao2.js", nickname: "朱浩" },
      { userId: "shimingjie.js", nickname: "施铭杰" },
      { userId: "gonghui.js", nickname: "工会" }
    ],
    txInfo: [],
    txInfoLoading: false
  }),
  created() {
    this.txQuery.startTime.setMonth(10)
    this.getTxInfo()
  },
  mounted() {},
  methods: {
    filter() {
      if (!this.$refs.form.validate()) {
        return
      }
      this.getTxInfo()
    },
    async getTxInfo() {
      this.txInfoLoading = true
      try {
        const { data } = await this.$axios.post(`/tx/filter`, {
          sourceId: this.txQuery.sourceId || "",
          targetId: this.txQuery.targetId || "",
          startTime: DateToStr(this.txQuery.startTime, "yyyy-MM-dd HH:mm:ss"),
          endTime: DateToStr(this.txQuery.endTime, "yyyy-MM-dd HH:mm:ss"),
          userId: this.curUserInfo.userId
        })
        console.log(data)
        this.txInfo = data.data
        this.txInfoLoading = false
        this.expandedPanel = [0]
      } catch (ex) {
        console.log(ex)
        this.$toast.error("获取交易信息失败：" + ex.message, {
          position: "top-right",
          timeout: 1500,
          closeOnClick: true,
          draggable: true,
          draggablePercent: 0.4,
          showCloseButtonOnHover: false,
          hideProgressBar: false,
          closeButton: "button",
          icon: true,
          rtl: false
        })
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    tranUserId(userId) {
      return this.$store.state.idToName[userId]
    }
  }
}
</script>
<style></style>
