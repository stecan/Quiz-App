<template>
   <v-card>
    <v-img
      :src="profileImagePath"
    >
    <!-- <v-img
      :src="profileImagePath"
      height="200px"
    > -->
        <v-card-title class="white--text">
        {{ userName }}
        </v-card-title>

        <v-card-subtitle class="white--text">
            {{ department }}
        </v-card-subtitle>
    </v-img>
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