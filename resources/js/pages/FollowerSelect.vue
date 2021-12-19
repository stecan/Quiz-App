<template>
  <div>
    <v-app-bar id="app-bar" absolute app>
      <v-spacer />
      <v-btn
        class="mr-5"
        color="primary"
        outlined
        x-large
        @click="getFollowerList"
        >再選択</v-btn
      >
      <v-btn color="red" outlined x-large>確定</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row
          ><v-col cols="12" xs="12" sm="4" md="3" v-for="card in cardList" :key="card.id"
            ><v-card max-width="220px">
              <v-img
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>
              <v-card-title>{{ card.user_name }}</v-card-title>
              <v-card-subtitle>{{ card.department }}</v-card-subtitle></v-card
            ></v-col
          ></v-row
        ></v-container
      ></v-main
    >
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      overlay: false,
      cardList: "",
    };
  },
  methods: {
    async getFollowerList() {
      this.overlay = true;
      await axios
        .post("/api/axios/drawingcard", {
          my_user_id: "05010", // ログインユーザーに置き換えが必要
        })
        .then((res) => {
          this.cardList = res.data;
          this.overlay = false;
        })
        .catch((error) => {
          console.log(error);
          this.overlay = false;
        });
    },
  },
  mounted() {
    this.getFollowerList();
  },
};
</script>
