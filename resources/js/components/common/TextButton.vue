<template>
    <v-btn
        color="deep-purple lighten-2"
        text
        @click="onClick"
    >
        {{ btnText }}
    </v-btn>
</template>

<script>
export default {
    props: {
        onClick: {
            type: Function,
            required: false,
        },
        btnText: {
            type: String,
            required: false,
        }
    }
}
</script>