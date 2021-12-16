<template>
    <v-container width="100%">
        <v-row width="100%">
            <v-col>
                <v-img max-height="350px" max-width="350px" :src="q_path"></v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title>{{ q_text }}</v-card-title>
                    <v-card-text v-if="ans1">{{ q_sel1 }}</v-card-text>
                    <v-card-text v-if="ans2">{{ q_sel2 }}</v-card-text>
                    <v-card-text v-if="ans3">{{ q_sel3 }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    components: {
        /* コンポーネント */
    },
    props: {
        /* 親からの(カスタム属性で)引渡し値 */
        q_path:{type: String, default:'/images/NoImage.png'},
        q_text:{type: String, default:null},
        q_sel1:{type: String, default:null},
        q_sel2:{type: String, default:null},
        q_sel3:{type: String, default:null},
        ans1:{type: Boolean, default:false},
        ans2:{type: Boolean, default:false},
        ans3:{type: Boolean, default:false},
    },
}
</script>
