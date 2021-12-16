<template>
    <v-container style="background-image : url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrEtiRUI7c3D-z3dIu4fJq29QPppfMK6KapQ&usqp=CAU');background-repeat:repeat;">
        <v-row>
            <v-col>
                <v-btn rounded elevation="10" @click="drawingQuestion">問題抽選</v-btn>
            </v-col>
        </v-row>

        <question-area :q_path="imgQuestion" :q_text="text" 
                             :q_sel1="selectItem1" :q_sel2="selectItem2" :q_sel3="selectItem3"
                             :ans1="answer1" :ans2="answer2" :ans3="answer2">
        </question-area>

        <v-row>&nbsp;</v-row>
        <v-row>
            <v-col>
                <v-btn rounded elevation="10" @click="drawingChallenger">回答者抽選</v-btn>
            </v-col>
        </v-row>

        <v-row>&nbsp;</v-row>
        <challenger-area v-bind:challengers="challengers"></challenger-area>

        <v-row>&nbsp;</v-row>
        <v-row>
            <v-col>
                <v-btn rounded elevation="10">回答状況確認</v-btn>
            </v-col>
        </v-row>
        <v-row>&nbsp;</v-row>
        <v-row>
            <v-col>
                <v-btn rounded elevation="10">解答開示</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import QuestionArea from '../components/QuestionArea.vue'
import ChallengerArea from '../components/ChallengerArea.vue'
import axios from 'axios';

export default {
    components: {
        ChallengerArea,
        QuestionArea,
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
        answer1: true,
        answer2: true,
        answer3: true,
        challengers: [],
        result: null,
    }),
    methods: {
        /* メソッド */
        // 問題抽選
        drawingQuestion: async function() {
            var self = this;
            await axios.get('/api/axios/drawingquestion',
            {
                dummy: '',
            }).then((res)=>
            {
                this.result = res
            }).catch(function (error) {
               console.log(error);
            });
            if(this.result == null || !this.result.length) return;
            self.imgQuestion = require('/images/' + this.result.q_id + '_question.png');
            self.text = this.result.q_text;
            self.selectItem1 = this.result.option_1;
            self.selectItem2 = this.result.option_2;
            self.selectItem3 = this.result.option_3;
            self.answer1 = this.result.option_1_selected;
            self.answer2 = this.result.option_2_selected;
            self.answer3 = this.result.option_3_selected;
        },
        // 回答者抽選
        drawingChallenger: function() {
            var self = this;
            axios.get('/api/axios/drawingplayer',
            {
                dummy: '',
            }).then((res)=>
            {
                this.result = res
            });
            if(this.result == null || !this.result.length) return;
            self.challengers = this.result;
        },
        // 回答開示
        takeAnswer: function() {
            var self = this;
            axios.post('/api/axios/takeanswer',
            {
                dummy: '',
            }).then((res)=>
            {
                
            })
        },
    },
}
</script>
