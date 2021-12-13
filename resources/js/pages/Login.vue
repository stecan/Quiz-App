<template>
  <v-row justify="center" align-content="center">
    <v-card width="410px" height="450px">
      <v-card-title class="">
        <h1 class="display-1">ログイン</h1>
      </v-card-title>
      <v-divider />
      <v-alert v-if="messagevisible" border="left" text type="error">{{ errorMessage }}</v-alert>
      <v-card-text>
        <v-form>
          <v-text-field
            label="社員番号"
            v-model="empNo"
            clearable
            required
            hint="5桁の社員番号を入力してください。"
          />
          <v-text-field
            label="パスワード"
            v-model="password"
            clearable
            required
            hint="社員番号 + 生年月日を入力してください。"
          />
          <v-card-actions>
            <v-btn
              class="mt-4"
              block
              outlined
              large
              color="indigo"
              @click="loginExec"
              >ログイン</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      empNo: "",
      password: "",
      errorMessage: "",
      messagevisible:false
    };
  },
  methods: {
    async loginExec() {
      await axios
        .post(window.location.origin + `/login`, {
          empNo: this.empNo,
          password: this.password,
        })
        .then((response) => {})
        .catch((error) => {
          this.messagevisible = true;
          this.errorMessage = "ログインに失敗しました。";
        });
    },
  },
};
</script>
<style scoped>
.login_alert {
}
</style>