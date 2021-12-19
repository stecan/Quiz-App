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
                :choices="choices"
            />
            <!-- 回答者表示エリア -->
            <panelists-area
                :panelists="panelists"
            />
        </div>
    </div>
</v-card>

</template>

<script>
import axios from 'axios';
const QuestionImage = () => import("./common/QuestionImage")
const PanelistsArea = () => import("./PanelistsArea")
const ChoicesArea = () => import("./ChoicesArea")

const IMAGE_DIR = '/images/';
const NO_IMAGE = 'NoImage.png';
const QUESTION_SUFFIX = '_question.png';
const ANSWER_SUFFIX = '_answer.png';

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
            await axios.get('/api/axios/getquestion', {
                params: {
                    q_id: 1
                }
            })
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
            this.qImgPath = IMAGE_DIR + question.q_id + QUESTION_SUFFIX;
            this.aImgPath = IMAGE_DIR + question.q_id + ANSWER_SUFFIX;
        },
        setPanelists: function(panelists) {
            this.panelists = panelists.map(panelist => {
                imgDir = IMAGE_DIR + panelist.user_id + EXTENSION;
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
