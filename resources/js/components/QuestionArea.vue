<template>
<v-card>
    <div class="d-flex flex-no-warp">
        <!-- 問題画像＆解答画像表示エリア -->
        <question-image
            v-if="!aDispFlg"
            :imgPath="qImgPath"
        />
        <question-image
            v-else
            :imgPath="qImgPath"
        />
        <div>
            <!-- 選択肢表示エリア -->
            <choices-area
                :adminFlg="adminFlg"
                :choices="choices"
            />
            <!-- 回答者表示エリア -->
            <panelists-area v-if="adminFlg == false"
                :panelists="panelists"
            />
        </div>
    </div>
</v-card>

</template>

<script>
import axios from 'axios';
//axios.defaults.baseURL = '/bingo2021';

const QuestionImage = () => import("./common/QuestionImage")
const PanelistsArea = () => import("./PanelistsArea")
const ChoicesArea = () => import("./ChoicesArea")

const IMAGE_DIR = './images/';
const NO_IMAGE = 'NoImage.png';
const QUESTION_SUFFIX = 'quiz/quiz';
const ANSWER_SUFFIX = 'answer/ans_quiz';
const EXTENSION = '.JPG';
const EXTENSION_USER = '.jpg';

export default {
    /* コンポーネント */
    components: {
        QuestionImage,
        PanelistsArea,
        ChoicesArea,
    },
    props: {
        /* 親からの(カスタム属性で)引渡し値 */
        adminFlg:{type: Boolean, default: false},
        qId:{type: String, default: null},
    },
    data() {
        return {
            aDispFlg: false,
            qText: '',
            qImgPath: IMAGE_DIR + NO_IMAGE,
            aImgPath: IMAGE_DIR + NO_IMAGE,
            choices: [],
            panelists: [],
        }
    },
    methods: {
        // 問題抽選
        getQuestion: async function() {
            // q_kbn = 1の問題を取得
            await axios.get('/api/axios/getquestion')
                    .then(res => {
                        this.setQuestionData(res.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                        return;
                    });
        },
        getPanelists: async function() {
            await axios.get('/api/axios/getplayer')
                    .then(res => {
                        this.setPanelists(res.data);
                    })
                    .catch(error => {
                        return;
                    });
        },
        setQuestionData: function(question) {
            this.aDispFlg = question.a_disp_flg;
            this.qText = question.q_text;
            this.choices = new Array(question.option_1, question.option_2, question.option_3)
            this.qImgPath = IMAGE_DIR + QUESTION_SUFFIX + question.q_id + EXTENSION;
            this.aImgPath = IMAGE_DIR + ANSWER_SUFFIX + question.q_id + EXTENSION;
        },
        setPanelists: function(panelists) {
            this.panelists = panelists.map(panelist => {
                imgDir = IMAGE_DIR + panelist.user_id + EXTENSION_USER;
                return {
                    profileImagePath: imgDir
                }
                // ほんとはこう書きたい
                // return {
                //      profileImagePath: fs.existsSync(imgDir) ? imgDir : IMAGE_DIR + NO_IMAGE
                // }
            });
        },
    },
    created() {
        /* 初期表示 */
        this.getQuestion();
    },
}
</script>
