<template>
    <v-dialog v-model="dialog">
        <v-card>
            <v-card-title>
                <v-btn rounded elevation="10" @click="close">閉じる</v-btn>
                結果発表
            </v-card-title>
            <v-card-text max-height=500px>
                <v-container>
                    <v-row v-for="(user, index) in rankings" :key="index">
                        <v-col>{{user.rank}} 位</v-col>
                        <v-col>
                            <v-img height="80px" width="80px" :src="'/images/' + user.user_id + '.png'" />
                        </v-col>
                        <v-col>{{user.user_name}}</v-col>
                        <v-col>{{user.point}} pt</v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    components: {
    },
    props: {
        dialog:{type: Boolean, default: false},
        rankings:{type: Array, default: ()=>([])},
    },
    methods: {
        close: function()
        {
            this.dialog = false;
        },
    },
    data:() => ({
    }),
}
</script>
