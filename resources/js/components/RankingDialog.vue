<template>
    <v-dialog v-model="dialog" class="dig-base" max-width="550px" max-height="80%">
        <v-card>
            <v-card-title>
                <v-btn rounded elevation="10" @click="close">閉じる</v-btn>
                <span>&nbsp;&nbsp;</span>
                <span>結果発表</span>
            </v-card-title>
            <v-card-text class="scroll">
                <v-container>
                    <v-row v-for="(user, index) in rankings" :key="index">
                        <transition name="ranking-row">
                        <v-col v-if="user.rank == 1 && index > show">
                            <v-img class="icon" src="https://frame-illust.com/fi/wp-content/uploads/2015/02/medal-crown-2623-gold.png" />
                        </v-col>
                        <v-col v-else-if="user.rank == 2 && index > show">
                            <v-img class="icon" src="https://frame-illust.com/fi/wp-content/uploads/2015/02/medal-crown-2623-silver.png" />
                        </v-col>
                        <v-col v-else-if="user.rank == 3 && index > show">
                            <v-img class="icon" src="https://frame-illust.com/fi/wp-content/uploads/2015/02/medal-crown-2623-bronze-400x400.png" />
                        </v-col>
                        <v-col v-else-if="index > show" class="title">
                            {{user.rank}} 位
                        </v-col>
                        </transition>
                        <transition name="ranking-row">
                        <v-col v-show="index > show">
                            <v-img class="icon" :src="IMAGE_DIR + user.user_id + EXTENSION" />
                        </v-col>
                        </transition>
                        <transition name="ranking-row">
                        <v-col v-show="index > show" class="title">{{user.user_name}}</v-col>
                        </transition>
                        <transition name="ranking-row" class="title">
                        <v-col v-show="index > show">{{user.point}}</v-col>
                        </transition>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';
//axios.defaults.baseURL = '/bingo2021';

const IMAGE_DIR = './images/player/';
const NO_IMAGE = 'NoImage.png';
const EXTENSION = '.JPG';

export default {
    components: {
    },
    props: {
        adminFlg:{type: Boolean, default: false},
        dialog:{type: Boolean, default: false},
    },
    data:() => ({
        IMAGE_DIR: IMAGE_DIR,
        NO_IMAGE : NO_IMAGE,
        EXTENSION: EXTENSION,
        rankings:[],
        result: null,
        show: 99,
    }),
    methods: {
        // ランキング表示
        getRanking: async function() {
            var self = this;
            await axios.get('/api/axios/getranking',
            {
            }).then(res =>
            {
                self.result = res.data
            }).catch(function (error) {
               console.log(error);
               return;
            });
            var ret = self.result;
            if(!ret) return;
            self.rankings = ret;
            self.show = ret.length;
        },
        close: function() {
            this.$emit('change', false);
        },
        ani_rankingDisplay: function() {
            this.show--;
            if(this.show < 0) return;
            setTimeout(this.ani_rankingDisplay, 1000);
        },
    },
    created() {
        /* 初期表示 */
        this.getRanking();
    },
    mounted() {
        this.ani_rankingDisplay();
    },
}
</script>

<style lang="scss" scoped>

@keyframes ani-spin {
    0% {
        transform: rotateX(0deg);
    }
    100% {
        transform: rotateX(360deg);
    }
}
.ranking-row{
    &-enter{
        opacity: 0;
    }
    &-enter-to{
        opacity: 1;
        animation: ani-spin 0.3s 30 forwards,
                   ani-spin 0.6s 15 forwards,
                   ani-spin 0.7s 5 forwards,
                   ani-spin 1.0s 1 forwards;
    }
}

.icon{
    height: 80px;
    max-width:80px;
}
.scroll{
    height: 80vh;
    max-height: 80vh;
    overflow-y: auto;
}
</style>