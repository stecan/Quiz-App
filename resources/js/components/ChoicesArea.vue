<template>
    <div>
        <v-card-text>
            <v-radio-group
                v-model="selection"
                hide-details
            >
                <v-radio
                    v-for="(choice, index) in choices"
                    :key="'sel' + index"
                    :value="index + 1"
                    :label="(index + 1) + '：' + choice"
                />
            </v-radio-group>
        </v-card-text>
        <v-card-actions
            v-if="!adminFlg"
            class="d-flex justify-center mb-2"
        >
            <v-btn
                color="deep-purple lighten-2"
                elevation="10"
                class="mt-0 pt-0"
                text
                outlined
                :disabled="sentAnswer"
                @click="sendAnswer()"
            >
            <span v-if="!sentAnswer">回答を送信する</span>
            <span v-if="sentAnswer">回答送信済み</span>
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script>
import axios from 'axios';
//axios.defaults.baseURL = '/bingo2021';
const TextButton = () => import('./common/TextButton');
export default {
    components:{
        TextButton,
    },
    props: {
        adminFlg:{type: Boolean, default: false},
        choices: {
            type: Array,
        },
    },
    data() {
        return {
            selection: this.choices[0],
            sentAnswer: false,
        }
    },
    methods: {
        sendAnswer: async function() {
            if (window.confirm("選択している回答：" + this.selection + "\n回答を送信します。\nよろしいですか？")) {
                await axios.post('/api/axios/sendanswer', {
                                my_user_id: this.$store.state.userId,
                                my_answer: this.selection,
                            })
                        .then(res => {
                            this.sentAnswer = true;
                            window.alert(this.selection + " : " + this.choices[this.selection - 1] + "が送信されました。");
                            console.log(this.selection + "が送信されました。");
                        })
                        .catch(err => {
                            window.alert("回答の送信に失敗しました。再度送信を実施してください。");
                            console.log(err);
                        });
            }
            return false;
        }
    }
}
</script>