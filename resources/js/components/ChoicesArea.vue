<template>
    <div>
        <v-card-text>
            <v-radio-group
                v-model="selection"
                hide-details
            >
                <v-radio
                    v-for="choice in choices"
                    :key="choice"
                    :value="choice"
                    :label="choice"
                />
            </v-radio-group>
        </v-card-text>
        <v-card-actions
            v-if="adminFlg == false"
            class="d-flex justify-center"
        >
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="sendAnswer()"
            >
                回答を送信する
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
            selection: this.choices[0]
        }
    },
    methods: {
        sendAnswer: async function() {
            if (window.confirm("選択している回答：" + this.selection + "\n回答を送信します。\nよろしいですか？")) {
                await axios.post('/api/axios/sendanswer', {
                                params: {
                                    my_user_id: this.$store.state.userId,
                                    my_answer: this.selection,
                                }
                            })
                        .then(res => {
                            console.log(this.selection + "が送信されました。");
                        })
                        .catch(err => {
                            console.log(err);
                        });
            }
            return false;
        }
    }
}
</script>