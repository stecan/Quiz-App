<template>
    <v-row>
        <v-col  v-for="(user, index) in challengers" :key="index">
            <v-card max-width="200px">
                <user-info-card :profileImagePath="'/images/' + user.user_id + '.png'" :userName="user.user_name" :department="user.department"></user-info-card>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
// 利用コンポーネントのローカル定義 import
import UserInfoCard from "../components/UserInfoCard.vue"

export default {
    components: {
        /* コンポーネント */
        UserInfoCard,
    },
    props: {
        /* 親からの(カスタム属性で)引渡し値 */
        challengers:{type: Array, default: ()=>([])},
    },
    methods: {
        /* メソッド */
    },
    data:() => ({
        /* 初期処理 */
    }),
}
</script>
