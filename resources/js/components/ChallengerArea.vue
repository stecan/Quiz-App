<template>
    <v-row>
        <v-col  v-for="(user, index) in challengers" :key="index">
            <v-card max-width="200px">
                <user-info-card :profileImagePath="userImgPath + user.user_id + '.jpg'" :userName="user.user_name" :department="user.department"></user-info-card>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
// 利用コンポーネントのローカル定義 import
import axios from 'axios';
axios.defaults.baseURL = '/bingo2021';

import UserInfoCard from "../components/UserInfoCard.vue"

export default {
    components: {
        /* コンポーネント */
        UserInfoCard,
    },
    props: {
        /* 親からの(カスタム属性で)引渡し値 */
        adminFlg:{type: Boolean, default: false},
    },
    data:() => ({
        /* 初期処理 */
        userImgPath: './images/player/',
        challengers: [],
        result: null,
    }),
    methods: {
        /* メソッド */
        // 回答者抽選
        getChallenger: async function() {
            var self = this;
            await axios.get('/api/axios/getplayer',
            {
            }).then(res =>
            {
                self.result = res.data
            }).catch(function (error) {
               console.log(error);
               return;
            });
            var ret = self.result;
            if(!ret) return;
            self.challengers = ret;
        },
    },
    created() {
        /* 初期表示 */
        this.getChallenger();
    },
}
</script>
