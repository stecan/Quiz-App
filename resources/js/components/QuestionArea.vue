<template>
    <v-container width="100%">
        <v-row width="100%">
            <v-col>
                <v-img max-height="350px" max-width="350px" :src="qImgPath"></v-img>
            </v-col>
            <v-col v-if="question.a_disp_flg">
                <v-img max-height="350px" max-width="350px" :src="aImgPath"></v-img>
            </v-col>
        </v-row>
        <v-row v-if="question && question.q_text">
            <v-col>
                <v-card>
                    <v-card-title>{{ question.q_text }}</v-card-title>
                    <v-card-text>{{ question.option_1 }}</v-card-text>
                    <v-card-text>{{ question.option_2 }}</v-card-text>
                    <v-card-text>{{ question.option_3 }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL = '/bingo2021';

export default {
    components: {
        /* コンポーネント */
    },
    props: {
        /* 親からの(カスタム属性で)引渡し値 */
        adminFlg:{type: Boolean, default: false},
        qId:{type: String, default: null},
    },
    data:() => ({
        /* 初期処理 */
        qaImgPath: '/images/',
        question: {a_disp_flg:false, q_text:''},
        qImgPath: '/images/NoImage.png',
        aImgPath: '/images/NoImage.png',
        result: null,
    }),
    methods: {
        // 問題抽選
        getQuestion: async function() {
            var self = this;
            await axios.get('/api/axios/getquestion',
            {
            }).then(res =>
            {
                self.result = res.data;
            }).catch(function (error) {
               console.log(error);
               return;
            });
            var ret = self.result;
            if(!ret) return;
            self.question = ret;
            self.qImgPath = self.qaImgPath + ret.q_id + '_question.png';
            if(ret.a_disp_flg)
            {
                self.aImgPath = self.qaImgPath + ret.q_id + '_answer.png';
            }
        },
    },
    created() {
        /* 初期表示 */
        this.getQuestion();
    },
}
</script>
