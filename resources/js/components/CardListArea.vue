<template>
    <v-row>
        <v-col cols="3" v-for="(card, idx) in cardList" :key="idx">
            <user-info-card
                :profileImagePath="card.profileImagePath"
                :userName="card.userName"
                :department="card.department"
            />

        </v-col>
    </v-row>
</template>

<script>
import UserInfoCard from './UserInfoCard'
export default {
    props: {
        cardList: {
            type: Array,
            default: []
        }
    },
    components: {
        UserInfoCard,
    }
}
</script>