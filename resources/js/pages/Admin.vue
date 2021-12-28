<template>
    <div>
        <!-- <v-container style="background-repeat:repeat; background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrEtiRUI7c3D-z3dIu4fJq29QPppfMK6KapQ&usqp=CAU');"> -->
        <v-container>
            <v-row>
                <v-col>
                    <v-btn rounded elevation="10" @click="drawingQuestion">問題抽選</v-btn>
                </v-col>
            </v-row>

            <v-row>&nbsp;</v-row>

            <question-area :adminFlg="true" :key="'q' + resetQuestion" />

            <v-row>&nbsp;</v-row>

            <v-row>
                <v-col>
                    <v-btn rounded elevation="10" @click="drawingChallenger">回答者抽選</v-btn>
                </v-col>
            </v-row>

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
            <v-row>
                <v-col>
                    <v-btn rounded elevation="10" @click="endGame">ゲーム終了</v-btn>
                    <v-btn rounded elevation="10" @click="resetSystem">システムリセット</v-btn>
                </v-col>
            </v-row>
        </v-container>
        <ranking-dialog :key="'rank' + resetRanking" :dialog="dispRanking" @change="dispRanking = $event" />
    </div>
</template>

<script>
import axios from 'axios';
//axios.defaults.baseURL = '/bingo2021';
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
        resetRanking: 0,
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
            if(!confirm('問題を抽選してよろしいですか？出題中の問題は出題済みとなります。'))
            {
                return;
            }
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
            var retryMode = '';
            if(!confirm('通常抽選の場合は[OK]、以外は[キャンセル]※次の確認があります。'))
            {
                if(confirm('再抽選の場合は[OK]、キャンセルの場合は[キャンセル]'))
                {
                    retryMode = '1';
                }
                else
                {
                    return;
                }
            }
            var self = this;
            await axios.get('/api/axios/drawingplayer',
            {
                params: {
                    retry: retryMode,
                },
            }).then(res =>
            {
            }).catch(function (error) {
               console.log(error);
               return;
            });
            self.resetQuestion++;
        },
        // 回答開示
        takeAnswer: async function() {
            if(!confirm('プレイヤーに解答の表示を許可しますか？'))
            {
                return;
            }
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
            alert('プレイヤーには見えません。');
            this.resetRanking++;
            this.dispRanking = true;
        },
        endGame: async function() {
            if(!confirm('全ての問題を出題済みとし、プレイヤーへランキングの表示を許可します。よろしいですか？'))
            {
                return;
            }
            var self = this;
            await axios.post('/api/axios/endgame',
            {
                reset_pass: 'bingo2021system',
            }).then(res=>
            {
            }).catch(function (error) {
               console.log(error);
               return;
            });
        },
        resetSystem: async function()
        {
            if(!confirm('システムを初期状態に戻します。よろしいですか？'))
            {
                return;
            }
            var self = this;
            await axios.post('/api/axios/resetsystem',
            {
                reset_pass: 'bingo2021system',
            }).then(res=>
            {
            }).catch(function (error) {
               console.log(error);
               return;
            });
            alert('システムを初期化しました。');
        }
    },
}
</script>
