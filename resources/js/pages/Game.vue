<template>
  <div>
    <player-info-area :userInfo="userInfo" />
    <div>
      <v-btn rounded elevation="10" @click="updateDisp">表示更新</v-btn>
      <v-btn rounded elevation="10" @click="getRanking">ランキング表示</v-btn>
    </div>
    <v-container fluid>
      <!-- 問題&回答表示エリア -->
      <v-row>
        <v-col cols="10" offset="1">
          <question-area :key="'q' + resetQuestion" />
        </v-col>
      </v-row>
      <!-- 手札表示エリア -->
      <div id="footer">
        <card-list-area :cardList="cardList" />
      </div>
    </v-container>
    <ranking-dialog :dialog="dispRanking" @change="dispRanking = $event" />
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = '/bingo2021';
const PlayerInfoArea = () => import("../components/PlayerInfoArea");
const CardListArea = () => import("../components/CardListArea");
const QuestionArea = () => import("../components/QuestionArea");
const RankingDialog = () => import("../components/RankingDialog");

const IMAGE_DIR = "./images/player/";
const NO_IMAGE = "NoImage.png";
const EXTENSION = ".JPG";

export default {
  components: {
    PlayerInfoArea,
    CardListArea,
    QuestionArea,
    RankingDialog,
  },
  data() {
    return {
      userInfo: "",
      cardList: [...Array(20)]
        .map((_, i) => i + 1)
        .map((value) => {
          return {
            profileImagePath: "https://placehold.jp/150x200.png",
            userName: "unknown name",
            department: "unknown dept",
          };
        }),
      resetQuestion: 0,
      dispRanking: false,
    };
  },
  created() {
    if (this.$store.state.userId == null || this.$store.state.userId == "") {
      this.$router.push("login");
      return;
    }
    this.getUserInfo();
    this.getCardList();
  },
  methods: {
    async getUserInfo() {
      await axios
        .get("/api/axios/getuser", {
          params: {
            my_user_id: this.$store.state.userId,
          },
        })
        .then((res) => {
          this.userInfo = res.data;
        })
        .catch((error) => {
          console.log("error:", error);
          return;
        });
    },
    getCardList: async function () {
      await axios
        .get("/api/axios/getcard", {
          params: {
            my_user_id: this.$store.state.userId,
          },
        })
        .then((res) => {
          this.setCardList(res.data);
        })
        .catch((error) => {
          console.log("error:", error);
          return;
        });
    },
    setCardList: function (cardList) {
      this.cardList = cardList.map((card) => {
        return {
          profileImagePath: IMAGE_DIR + card.user_id + EXTENSION,
          userName: card.user_name,
          department: card.department,
        };
      });
    },
    // 表示更新
    updateDisp: function() {
      this.resetQuestion++;
    },
    // ランキング表示
    getRanking: async function() {
      await axios
        .get("/api/axios/isopenranking", {
          params: {
          },
        })
        .then((res) => {
          if (res.data) {
              this.dispRanking = true;
          }
        })
        .catch((error) => {
          console.log("error:", error);
          return;
        });
    },
  },
};
</script>
