<template>
  <v-app-bar flat>
    <v-spacer />
    <p class="text-h5 mr-5" style="margin: 0">USER : {{ userInfo.user_name }}</p>
    <p class="text-h5 mr-5" style="margin: 0">SCORE : {{ userInfo.point }}点</p>
  </v-app-bar>
</template>
<script>
export default {
  props: ["userInfo"],
};
</script>
