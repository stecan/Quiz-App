<template>
    <v-card>
    <!-- <div class="d-flex flex-no-wrap justify-space-between"> -->
    <div class="d-flex flex-no-wrap">
            <!-- 問題画像表示エリア -->
            <v-img
                class="ma-5"
                aspect-ratio="1.5"
                max-width="640px"
                max-height="480px"
                src="https://placehold.jp/640x480.png"
            />
        <div>
            <!-- 回答者表示エリア -->
            <v-card-title>回答者</v-card-title>
            <v-avatar
                class="ma-2"
                v-for="(panelist, index) in panelists"
                :key="index"
                size="125"
            >
                <img 
                    :src="panelist.profileImagePath"
                />
            </v-avatar>
            <!-- 選択肢表示エリア -->
            <v-card-title>選択肢</v-card-title>
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
                    @click="sendAnswer"
                >
                    回答を送信する
                </v-btn>
            </v-card-actions>
        </div>
    </div>
    </v-card>
</template>

<script>
import UserInfoCard from './UserInfoCard'

export default {
    props: {
        question: {
            type: String,
            required: true,
        },
        choices: {
            type: Array,
            required: true,
        },
        panelists: {
            type: Array,
            required: false,
        }
    },
    components: {
        UserInfoCard
    },
    data() {
        return {
            selection: this.choices[0],
        }
    },
    methods: {
        sendAnswer: function () {
            if (window.confirm('回答を送信します。\nよろしいですか？')) {
                // 回答送信用のAPIを呼ぶ
                // 選択した値は、this.selectionで取得可能
                console.log("回答:", this.selection);
            }
        }
    },
}
</script>
