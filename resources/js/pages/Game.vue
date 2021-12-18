<template>
<div>
  <v-container fluid>
    <!-- 問題&回答表示エリア -->
    <v-row>
      <v-col cols="10" offset="1">
        <question-area :question="question" :choices="choices" :panelists="panelists" />
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
const CardListArea = () => import("../components/CardListArea");
const LogoutBtn = () => import("../components/LogoutBtn");
const PanelistArea = () => import("../components/PanelistArea");
const PlayerInfoArea = () => import("../components/PlayerInfoArea");
const PlayerScoreArea = () => import("../components/PlayerScoreArea");
const QuestionArea = () => import("../components/QuestionArea");
const ResetCardListBtn = () => import("../components/ResetCardListBtn");

export default {
  components: {
    CardListArea,
    LogoutBtn,
    PanelistArea,
    PlayerInfoArea,
    PlayerScoreArea,
    QuestionArea,
    ResetCardListBtn,
  },
  data() {
    return {
      question: "問題文がここに入る\n改行もOK",
      choices: ["選択肢A", "選択肢B", "選択肢C",],
      panelists:[...Array(3)].map((_, i) => i + 1).map(value => {
        return {
          profileImagePath: "https://placehold.jp/150x200.png",
          userName: "テストユーザ" + value,
          department: "テスト部署" + value,
        }
      }),
      cardList: [...Array(20)].map((_, i) => i + 1).map(value => {
        return {
          profileImagePath: "https://placehold.jp/150x200.png",
          userName: "テストユーザ" + value,
          department: "テスト部署" + value,
        }
      })
    };
  },
};
</script>