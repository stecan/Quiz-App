<template>
    <v-card
        height="230"
    >
        <v-img
            style="height:150px;width: aoto"
            :src="profileImagePath"
        >
        </v-img>
        <v-card-text class="mb-0 pb-0 text-left">
            {{ department }}
        </v-card-text>
        <v-card-text class="mt-0 pt-0 text-left">
            {{ userName }}
        </v-card-text>


    </v-card>
</template>

<script>
export default {
    props: {
        profileImagePath: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        }
    },
}
</script>