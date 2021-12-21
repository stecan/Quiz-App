<template>
    <v-row>
        <v-col>
            <v-btn text @click="logout" class="px-0">ログアウト</v-btn>
        </v-col>
    </v-row>
</template>

<script>
export default {
    methods: {
        logout: function() {
            if (window.confirm('ログアウトしてよろしいですか？')) {
                // ログアウト処理のAPIを実行する
                console.log('ログアウト処理が実行される');
            }
        }
    }
}
</script>