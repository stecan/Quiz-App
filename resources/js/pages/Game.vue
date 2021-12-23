<template>
<div>
  <v-container fluid>
    <!-- 問題&回答表示エリア -->
    <v-row>
      <v-col cols="10" offset="1">
        <question-area />
      </v-col>
    </v-row>
    <!-- 手札表示エリア -->
    <v-row class="ma-5">
      <card-list-area
        :cardList="cardList"
      />
    </v-row>
  </v-container>
</div>
</template>

<script>
import axios from 'axios';
//axios.defaults.baseURL = '/bingo2021';

const CardListArea = () => import("../components/CardListArea");
const QuestionArea = () => import("../components/QuestionArea");

const IMAGE_DIR = '/images/';
const NO_IMAGE = 'NoImage.png';
const EXTENSION = '.png';

export default {
  components: {
    CardListArea,
    QuestionArea,
  },
  data() {
    return {
      cardList: [...Array(20)].map((_, i) => i + 1).map(value => {
        return {
          profileImagePath: "https://placehold.jp/150x200.png",
          userName: "テストユーザ" + value,
          department: "テスト部署" + value,
        }
      })
    };
  },
  created() {
    this.getCardList();
  },
  methods: {
    getCardList: async function() {
          await axios.get('/api/axios/getcard', {
              params: {
                my_user_id: "04660"
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