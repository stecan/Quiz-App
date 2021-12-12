<template>
    <v-dialog
    transition="dialog-bottom-transition"
    max-width="600"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            color="primary"
            v-bind="attrs"
            v-on="on"
            >現在の問題を見る</v-btn>
        </template>
        <template v-slot:default="dialog">
            <v-sheet>
                <v-row>
                    <v-col>
                        <div v-text="question" class="question-pre-wrap"/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6" v-for="(choice, idx) in choices" :key="idx">
                        {{ choice }}
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <div>
                            <v-btn
                            text
                            @click="dialog.value = false"
                            >閉じる</v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-sheet>
        </template>
    </v-dialog>
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
    }
}
</script>

<style scoped>
    .question-pre-wrap {
        white-space: pre-wrap;
    }
</style>