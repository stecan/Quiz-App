<template>
    <v-btn text @click="logout">ログアウト</v-btn>
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