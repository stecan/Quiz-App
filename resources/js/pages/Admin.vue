<template>
    <div>
        <v-container style="background-repeat:repeat; background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrEtiRUI7c3D-z3dIu4fJq29QPppfMK6KapQ&usqp=CAU');">
            <v-row>
                <v-col>
                    <v-btn rounded elevation="10" @click="drawingQuestion">問題抽選</v-btn>
                </v-col>
            </v-row>

            <question-area :key="'q' + resetQuestion" />

            <v-row>
                <v-col>
                    <v-btn rounded elevation="10" @click="drawingChallenger">回答者抽選</v-btn>
                </v-col>
            </v-row>

            <challenger-area :key="'c' + resetChallenger" />

            <answer-status-area />

            <v-row>
                <v-col>
                    <v-btn rounded elevation="10" @click="takeAnswer">解答開示</v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn rounded elevation="10" @click="getRanking">ランキング表示</v-btn>
                </v-col>
            </v-row>
        </v-container>
        <ranking-dialog :dialog="dispRanking" />
    </div>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL = '/bingo2021';
import QuestionArea from '../components/QuestionArea.vue'
import ChallengerArea from '../components/ChallengerArea.vue'
import RankingDialog from '../components/RankingDialog.vue';
import AnswerStatusArea from '../components/AnswerStatusArea.vue';

export default {
    components: {
        ChallengerArea,
        QuestionArea,
        RankingDialog,
        AnswerStatusArea,
    },
    prpps: {
    },
    data:() => ({
        /* 変数宣言 */
        resetQuestion: 0,
        resetChallenger: 0,
        dispRanking: false,
        result: null,
    }),
    created() {
        /* 初期表示 */
    },
    methods: {
        /* メソッド */
        // 問題抽選
        drawingQuestion: async function() {
            var self = this;
            await axios.post('/api/axios/drawingquestion',
            {
            }).then(res =>
            {
            }).catch(function (error) {
               console.log(error);
               return;
            });
            self.resetQuestion++;
        },
        // 回答者抽選
        drawingChallenger: async function() {
            var self = this;
            await axios.post('/api/axios/drawingplayer',
            {
            }).then(res =>
            {
            }).catch(function (error) {
               console.log(error);
               return;
            });
            self.resetChallenger++;
        },
        // 回答開示
        takeAnswer: async function() {
            var self = this;
            await axios.post('/api/axios/takeanswer',
            {
            }).then(res=>
            {
            }).catch(function (error) {
               console.log(error);
               return;
            });
            alert('プレイヤーに解答を開示しました。');
            self.resetQuestion++;
        },
        // ランキング表示
        getRanking: function() {
            this.dispRanking = true;
        },
    },
}
</script>
