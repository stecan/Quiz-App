<template>
  <v-app-bar flat>
    <v-btn rounded elevation="10" @click="emitRiseEvent('1')">表示更新</v-btn>
    <v-btn rounded elevation="10" @click="emitRiseEvent('2')">ランキング表示</v-btn>
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
  data:() => ({
      userInfo: {user_name:'', point:0},
      result: null,
  }),
  methods: {
    getUserInfo: async function() {
        var self = this;
        await axios.get('/api/axios/getuser',
        {
          params: {
            my_user_id: this.$store.state.userId,
          },
        }).then(res =>
        {
            self.result = res.data
        }).catch(function (error) {
            console.log(error);
            return;
        });
        var ret = self.result;
        if(!ret) return;
        self.userInfo = ret;
    },
    emitRiseEvent: function(mode){
      this.$emit('execute', mode);
    },
  },
  created() {
    this.getUserInfo();
  },
}
</script>
