<template>
    <v-row>
        <v-col cols="4" v-for="(panelist, idx) in panelists" :key="idx">
            <user-info-card
                :profileImagePath="panelist.profileImagePath"
                :userName="panelist.userName"
                :department="panelist.department"
            />

        </v-col>
    </v-row>
</template>

<script>
import UserInfoCard from './UserInfoCard'
export default {
    props: {
        panelists: {
            type: Array,
            default: []
        }
    },
    components: {
        UserInfoCard,
    }
}
</script>