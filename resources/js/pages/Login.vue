<template>
  <v-container style="height: 100%">
    <v-row style="height: 100%" justify="center" align-content="center">
      <v-card width="410px" height="450px">
        <v-card-title class="">
          <h1 class="display-1">ログイン</h1>
        </v-card-title>
        <v-divider />
        <v-alert v-if="messagevisible" border="left" text type="error">{{
          errorMessage
        }}</v-alert>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              label="社員番号"
              v-model="empNo"
              :rules="[(v) => !!v || '社員番号は必須です']"
              hint="5桁の社員番号を入力してください。"
            />
            <v-text-field
              label="パスワード"
              v-model="password"
              :rules="[(v) => !!v || 'パスワードは必須です']"
              hint="社員番号 + 生年月日を入力してください。"
            />
            <v-card-actions>
              <v-btn class="mt-4" block outlined large color="indigo" @click="loginExec"
                >ログイン</v-btn
              >
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
      <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay> </v-row
  ></v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      empNo: "",
      password: "",
      errorMessage: "",
      messagevisible: false,
      overlay: false,
    };
  },
  methods: {
    async loginExec() {
      if (this.$refs.form.validate()) {
        this.overlay = true;
        await axios
          .post("/api/axios/auth", {
            emp_no: this.empNo,
            password: this.password,
          })
          .then((response) => {
            this.overlay = false;
            if (response.data) {
              if (this.empNo == "99999") {
                this.$router.push("admin");
              } else {
                this.$router.push("followerSelect");
              }
            } else {
              this.messagevisible = true;
              this.errorMessage = "ログインに失敗しました。";
            }
          })
          .catch((error) => {
            this.overlay = false;
            this.messagevisible = true;
            this.errorMessage = error;
          });
      }
    },
  },
};
</script>
