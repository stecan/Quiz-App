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
const TextButton = () => import('./common/TextButton');
export default {
    components:{
        TextButton,
    },
    props: {
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
                // TODO: 回答送信のAPIを叩く
                await axios.post('/api/axios/sendanswer', {
                                params: {
                                    my_user_id: "",
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