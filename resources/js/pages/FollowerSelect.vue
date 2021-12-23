<template>
  <div>
    <v-app-bar id="app-bar" absolute app>
      <v-spacer />
      <v-btn class="mr-5" color="primary" outlined x-large @click="getFollowerList"
        >再選択</v-btn
      >
      <v-btn to="/game" color="red" outlined x-large>確定</v-btn>
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
axios.defaults.baseURL = '/bingo2021';
export default {
  data() {
    return {
      overlay: false,
      cardList: [],
    };
  },
  methods: {
    async getFollowerList() {
      this.overlay = true;
      await axios
        .get("/api/axios/drawingcard", {
          params: {
            my_user_id: "05010",
          },
        })
        .then((res) => {
          this.cardList = res.data.map((card) => {
            return {
              user_name: card.user_name,
              department: card.department,
            };
          });
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
