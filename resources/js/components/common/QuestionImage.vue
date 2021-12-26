<template>
    <v-img
        class="ma-5"
        aspect-ratio="1.9"
        max-width="640px"
        max-height="480px"
        :src="imgPath"
    />
</template>

<script>
export default {
    props: {
        imgPath: {
            type: String,
            required: true,
        }
    }
}
</script>