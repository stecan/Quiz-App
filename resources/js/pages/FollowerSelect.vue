<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="320">
      <v-card>
        <v-card-title class="text-h5"> 注意 </v-card-title>
        <v-card-text>手札が20枚ではありません。再選択を行ってください。</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="closeDialog"> 閉じる </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="confirmDialog" persistent max-width="320">
      <v-card>
        <v-card-title class="text-h5"> 注意 </v-card-title>
        <v-card-text>一度確定を行うと取り消しはできません。</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="closeDialog"> 閉じる </v-btn>
          <v-btn color="primary darken-1" text @click="confirmFollower"> 確定 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-app-bar id="app-bar" fixed app>
      <div style="margin: auto">
        <v-btn class="mr-5" color="primary" outlined x-large @click="getFollowerList"
          >再選択</v-btn
        >
        <v-btn color="red" outlined x-large @click="execConfirmDialog">確定</v-btn>
      </div>
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
const EXTENSION = ".JPG";

export default {
  components: {
    UserInfoCard,
  },
  data() {
    return {
      overlay: false,
      cardList: [],
      confirmDialog: false,
      dialog: false,
    };
  },
  methods: {
    execConfirmDialog() {
      this.confirmDialog = true;
    },
    closeDialog() {
      this.confirmDialog = false;
      this.dialog = false;
      this.overlay = false;
    },
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
    async confirmFollower() {
      await axios
        .get("/api/axios/confirmcard", {
          params: {
            my_user_id: this.$store.state.userId,
          },
        })
        .then((res) => {
          if (res.data) {
            this.overlay = false;
            this.$router.push("/");
          } else {
            this.dialog = true;
          }
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
#app-bar {
  text-align: center;
}
</style>
