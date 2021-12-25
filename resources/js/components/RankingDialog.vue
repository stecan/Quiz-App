<template>
    <v-dialog v-model="dialog" max-height="80%" max-width="80%">
        <v-card>
            <v-card-title>
                <v-btn rounded elevation="10" @click="close">閉じる</v-btn>
                <span>&nbsp;&nbsp;</span>
                <span>結果発表</span>
            </v-card-title>
            <v-card-text max-height="100%">
                <v-container>
                    <v-row v-for="(user, index) in rankings" :key="index">
                        <v-col>{{user.rank}} 位</v-col>
                        <v-col>
                            <v-img height="80px" min-width="80px" :src="IMAGE_DIR + user.user_id + EXTENSION" />
                        </v-col>
                        <v-col>{{user.user_name}}</v-col>
                        <v-col>{{user.point}} pt</v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL = '/bingo2021';

const IMAGE_DIR = './images/player/';
const NO_IMAGE = 'NoImage.png';
const EXTENSION = '.jpg';

export default {
    components: {
    },
    props: {
        adminFlg:{type: Boolean, default: false},
        dialog:{type: Boolean, default: false},
    },
    data:() => ({
        IMAGE_DIR: IMAGE_DIR,
        NO_IMAGE : NO_IMAGE,
        EXTENSION: EXTENSION,
        rankings:[],
        result: null,
    }),
    methods: {
        // ランキング表示
        getRanking: async function() {
            var self = this;
            await axios.get('/api/axios/getranking',
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
            self.rankings = ret;
        },
        close: function()
        {
            this.dialog = false;
        },
    },
    created() {
        /* 初期表示 */
        this.getRanking();
    },
}
</script>
