<template>
  <v-app-bar flat>
    <v-spacer />
    <p class="text-h5 mr-5" style="margin: 0">USER : {{ userInfo.user_name }}</p>
    <p class="text-h5 mr-5" style="margin: 0">SCORE : {{ userInfo.point }}点</p>
  </v-app-bar>
</template>
<script>
import axios from "axios";
//axios.defaults.baseURL = '/bingo2021';

export default {
  props: {
  },
  data() {
    return {
      userInfo: { user_name: '', point: 0},
    }
  },
  methods: {
    getUserInfo: async function() {
      await axios
        .get("/api/axios/getuser", {
          params: {
            my_user_id: this.$store.state.userId,
          },
        })
        .then((res) => {
          this.userInfo = res.data;
        })
        .catch((error) => {
          console.log("error:", error);
          return;
        });
    },
    created() {
      this.getUserInfo();
    },
  },
}
</script>
