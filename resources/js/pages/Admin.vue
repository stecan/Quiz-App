<template>
    <div>
        <v-container style="background-repeat:repeat; background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrEtiRUI7c3D-z3dIu4fJq29QPppfMK6KapQ&usqp=CAU');">
            <v-row>
                <v-col>
                    <v-btn rounded elevation="10" @click="getQuestion">問題抽選</v-btn>
                </v-col>
            </v-row>

            <question-area :q_path="imgQuestion" :q_text="text" :q_sel1="selectItem1" :q_sel2="selectItem2" :q_sel3="selectItem3"
                            :a_path="imgAnswer" :ans1="answer1" :ans2="answer2" :ans3="answer2">
            </question-area>

            <v-row>
                <v-col>
                    <v-btn rounded elevation="10" @click="getChallenger">回答者抽選</v-btn>
                </v-col>
            </v-row>

            <challenger-area v-bind:challengers="challengers"></challenger-area>

            <v-row>
                <v-col>
                    <v-btn rounded elevation="10" @click="checkAnswer">回答状況確認</v-btn>
                </v-col>
                <v-col>
                    <v-card>
                        <v-card-title>回答済み：</v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col v-for="(user, index) in answers" :key="index">{{user.user_name}}：{{user.answer}}</v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

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
        <ranking-dialog :dialog="dispRanking" :rankings="ranking"></ranking-dialog>
    </div>
</template>

<script>
import QuestionArea from '../components/QuestionArea.vue'
import ChallengerArea from '../components/ChallengerArea.vue'
import RankingDialog from '../components/RankingDialog.vue';
import axios from 'axios';

export default {
    components: {
        ChallengerArea,
        QuestionArea,
        RankingDialog,
    },
    prpps: {
    },
    data:() => ({
        /* 変数宣言 */
        imgQuestion: '/images/NoImage.png',
        text: 'テスト問題です。ＮＮＮＮＮＮＮＮＮＮ',
        selectItem1: '選択肢A',
        selectItem2: '選択肢B',
        selectItem3: '選択肢C',
        imgAnswer: '/images/NoImage.png',
        answer1: true,
        answer2: true,
        answer3: true,
        challengers: [],
        answers: [],
        ranking:[],
        dispRanking: false,
        result: null,
    }),
    created() {
        /* 初期表示 */
        this.getQuestion('1');
        this.getChallenger('1');
    },
    methods: {
        /* メソッド */
        // 問題抽選
        getQuestion: async function(mode) {
            var api = mode == '1' ? 'getquestion' : 'drawingquestion';
            var self = this;
            await axios.get('/api/axios/' + api,
            {
                flg_admin: '1',
            }).then(res =>
            {
                self.result = res.data;
            }).catch(function (error) {
               console.log(error);
               return;
            });
            var ret = self.result;
            if(!ret) return;
            self.imgQuestion = '/images/' + ret.q_id + '_question.png';
            self.text = ret.q_text;
            self.selectItem1 = ret.option_1;
            self.selectItem2 = ret.option_2;
            self.selectItem3 = ret.option_3;
            self.imgAnswer = '/images/' + ret.q_id + '_answer.png';
            self.answer1 = ret.option_1_selected;
            self.answer2 = ret.option_2_selected;
            self.answer3 = ret.option_3_selected;
        },
        // 回答者抽選
        getChallenger: async function(mode) {
            var api = mode == '1' ? 'getplayer' : 'drawingplayer';
            var self = this;
            await axios.get('/api/axios/' + api,
            {
                flg_admin: '1',
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
        // 回答状況確認
        checkAnswer: async function() {
            var self = this;
            await axios.get('/api/axios/checkanswer',
            {
                flg_admin: '1',
            }).then(res =>
            {
                self.result = res.data
            }).catch(function (error) {
               console.log(error);
               return;
            });
            var ret = self.result;
            if(!ret) return;
            self.answers = ret;
        },
        // 回答開示
        takeAnswer: async function() {
            await axios.post('/api/axios/takeanswer',
            {
                flg_admin: '1',
            }).then((res)=>
                //
            {
            }).catch(function (error) {
               console.log(error);
               return;
            });
            alert('プレイヤーに解答を開示しました。');
            return;
        },
        // ランキング表示
        getRanking: async function() {
            var self = this;
            await axios.get('/api/axios/getranking',
            {
                flg_admin: '1',
            }).then(res =>
            {
                self.result = res.data
            }).catch(function (error) {
               console.log(error);
               return;
            });
            var ret = self.result;
            if(!ret) return;
            self.ranking = ret;
            self.dispRanking = true;
        },
    },
}
</script>
