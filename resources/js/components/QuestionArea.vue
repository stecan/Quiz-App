<template>
    <v-card
        width="960px"
    >
        <v-layout justify-center>
            <!-- 問題画像表示エリア -->
            <v-img
                aspect-ratio="1.5"
                position="center center"
                max-width="640px"
                max-height="480px"
                src="https://placehold.jp/640x480.png"
            />
        </v-layout>
        <!-- 選択肢表示エリア -->
        <v-card-text
            class="d-flex justify-center"
        >
            <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
            >
                <v-chip
                    v-for="choice in choices"
                    :key="choice"
                    :value="choice"
                    large
                >
                    {{ choice }}
                </v-chip>
            </v-chip-group>
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
    </v-card>
</template>

<script>
export default {
    props: {
        question: {
            type: String,
            required: true,
        },
        choices: {
            type: Array,
            required: true,
        }
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
