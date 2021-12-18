<template>
<v-sheet
    max-width="100%"
>
    <v-slide-group
        show-arrows
    >
        <v-slide-item
            v-for="(card, index) in cardList"
            :key="index"
        >
            <user-info-card
                class="mx-2"
                :profileImagePath="card.profileImagePath"
                :userName="card.userName"
                :department="card.department"
            />
        </v-slide-item>
    </v-slide-group>
</v-sheet>
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