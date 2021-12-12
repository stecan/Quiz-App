<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <player-info-area userId="99999" userName="テストユーザー" />
        <player-score-area :point="100" />
        <reset-card-list-btn />
        <logout-btn />
      </v-col>
      <v-col cols="8" offset="1">
        <panelist-area :panelists="panelists" />
      </v-col>
    </v-row>
    <v-row>
      <question-modal :question="question" :choices="choices" />
    </v-row>
    <v-row class="mt-10">
      <card-list-area
        :cardList="cardList"
      />
    </v-row>
  </v-container>
</template>

<script>
const CardListArea = () => import("../components/CardListArea");
const LogoutBtn = () => import("../components/LogoutBtn");
const PanelistArea = () => import("../components/PanelistArea");
const PlayerInfoArea = () => import("../components/PlayerInfoArea");
const PlayerScoreArea = () => import("../components/PlayerScoreArea");
const QuestionModal = () => import("../components/QuestionModal");
const ResetCardListBtn = () => import("../components/ResetCardListBtn");

export default {
  components: {
    CardListArea,
    LogoutBtn,
    PanelistArea,
    PlayerInfoArea,
    PlayerScoreArea,
    QuestionModal,
    ResetCardListBtn,
  },
  data() {
    return {
      question: "問題文がここに入る\n改行もOK",
      choices: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
      panelists: [
        {
          profileImagePath:
            "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          userName: "テストユーザ１",
          department: "テスト部署１",
        },
        {
          profileImagePath:
            "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          userName: "テストユーザ２",
          department: "テスト部署２",
        },
        {
          profileImagePath:
            "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          userName: "テストユーザ３",
          department: "テスト部署３",
        },
      ],
      cardList: [
        {
          profileImagePath: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          userName: "テストユーザ１",
          department: "テスト部署１",
        },
        {
          profileImagePath: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          userName: "テストユーザ２",
          department: "テスト部署２",
        },
        {
          profileImagePath: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          userName: "テストユーザ３",
          department: "テスト部署３",
        },
        {
          profileImagePath: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          userName: "テストユーザ４",
          department: "テスト部署４",
        },
        {
          profileImagePath: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          userName: "テストユーザ５",
          department: "テスト部署５",
        },
        {
          profileImagePath: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          userName: "テストユーザ６",
          department: "テスト部署６",
        },
      ]      
    };
  },
};
</script>