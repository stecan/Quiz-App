<template>
    <v-row>
        <v-col>
            score
        </v-col>
        <v-col>
            {{ point }}pt
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        point: {
            type: Number,
            required: true,
        }
    }
}
</script>