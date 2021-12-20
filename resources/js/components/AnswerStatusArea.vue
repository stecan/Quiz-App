<template>
    <v-row>
        <v-col>
            <v-btn rounded elevation="10" @click="checkAnswer">回答状況確認</v-btn>
        </v-col>
        <v-col>
            <v-card>
                <v-card-title>回答状況：</v-card-title>
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
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL = '/bingo2021';
export default {
    components: {
    },
    prpps: {
    },
    data:() => ({
        /* 変数宣言 */
        answers: [],
        result: null,
    }),
    methods: {
        // 回答状況確認
        checkAnswer: async function() {
            var self = this;
            await axios.get('/api/axios/checkanswer',
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
            self.answers = ret;
        },
    },
    created() {
        /* 初期表示 */
        this.checkAnswer();
    },
}
</script>