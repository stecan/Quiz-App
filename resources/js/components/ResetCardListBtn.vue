<template>
    <v-row>
        <v-col>
            <v-btn text @click="resetCardList" class="px-0">手札を変更する</v-btn>
        </v-col>
    </v-row>
</template>

<script>
export default {
    methods: {
        resetCardList: function() {
            if (window.confirm('手札をよろしいですか？')) {
                // リセマラ処理のAPIを実行する
                console.log('リセマラ処理が実行される');
            }
        }
    }
}
</script>