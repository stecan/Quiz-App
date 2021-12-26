<template>
<div>
  <PlayerInfoArea :userInfo="userInfo" />
  <v-container fluid>
    <!-- 問題&回答表示エリア -->
    <v-row>
      <v-col cols="10" offset="1">
        <question-area />
      </v-col>
    </v-row>
    <!-- 手札表示エリア -->
      <card-list-area
        :cardList="cardList"
      />
  </v-container>
</div>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL = '/bingo2021';
const PlayerInfoArea = () => import("../components/PlayerInfoArea");
const CardListArea = () => import("../components/CardListArea");
const QuestionArea = () => import("../components/QuestionArea");

const IMAGE_DIR = './images/player/';
const NO_IMAGE = 'NoImage.png';
const EXTENSION = '.jpg';

export default {
  components: {
    PlayerInfoArea,
    CardListArea,
    QuestionArea,
  },
  data() {
    return {
      userInfo:{
        userName:"●● ●●●●",
        point:"100"
      },
      cardList: [...Array(20)].map((_, i) => i + 1).map(value => {
        return {
          profileImagePath: "https://placehold.jp/150x200.png",
          userName: "unknown name",
          department: "unknown dept",
        }
      })
    };
  },
  created() {
    if(this.$store.state.userId == null ||this.$store.state.userId == "")
    {
      this.$router.push("login");
      return;
    }
    this.getCardList();
  },
  methods: {
    getCardList: async function() {
          await axios.get('/api/axios/getcard', {
              params: {
                my_user_id: this.$store.state.userId,
              }
            })
              .then(res => {
                this.setCardList(res.data);
              })
              .catch(error => {
                console.log('error:', error)
                return;
              })
    },
    setCardList: function(cardList) {
      this.cardList = cardList.map(card => {
        return {
          profileImagePath: IMAGE_DIR + card.user_id + EXTENSION,
          userName: card.user_name,
          department: card.department,
        }
      })
    } 
  },
};
</script>
