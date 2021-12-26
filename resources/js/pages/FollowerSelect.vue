<template>
  <div>
    <v-app-bar id="app-bar" absolute app>
      <v-spacer />
      <v-btn class="mr-5" color="primary" outlined x-large @click="getFollowerList"
        >再選択</v-btn
      >
      <v-btn to="/" color="red" outlined x-large>確定</v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-row id="innerContainer">
          <v-col cols="12" xs="12" sm="4" md="3" v-for="card in cardList" :key="card.id">
            <user-info-card
              :profileImagePath="card.img_path"
              :userName="card.user_name"
              :department="card.department"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>
<script>
import axios from "axios";
//axios.defaults.baseURL = '/bingo2021';
import UserInfoCard from "../components/UserInfoCard.vue";

const IMAGE_DIR = "./images/player/";
const NO_IMAGE = "NoImage.png";
const EXTENSION = ".jpg";

export default {
  components: {
    UserInfoCard,
  },
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
            my_user_id: this.$store.state.userId,
          },
        })
        .then((res) => {
          this.cardList = res.data.map((card) => {
            return {
              user_name: card.user_name,
              department: card.department,
              img_path: IMAGE_DIR + card.user_id + EXTENSION,
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
<style scoped>
#innerContainer {
  max-width: 1175px;
  margin: auto;
}
</style>
