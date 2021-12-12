<template>
    <div>
        <v-row>
            <v-col>Player</v-col>
            <v-col>{{ userId }}</v-col>
            <v-col>{{ userName }}</v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    props: {
        userId: {
            type: String,
            required:true
        },
        userName: {
            type: String,
            required: true,
            default: "ゲスト"
        }
    }
}
</script>