<template>
<div>
    <div
        v-if="panelists.length"
    >
        <v-row>
            <v-col
                cols="4"
                v-for="(panelist, index) in panelists"
                :key="index"
            >
                <v-card flat>
                    <v-row>
                        <v-col cols="12" class="pb-0">
                            <v-avatar
                                class="ma-2"
                                size="125"
                            >
                                <img 
                                    height="250" min-width="180"
                                    :src="panelist.profileImagePath"
                                />
                            </v-avatar>
                            <v-card-text class="text-center">
                                {{ panelist.user_name }}
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </div>
    <div v-else>
        <v-card-text>
            回答者が決定していません。
        </v-card-text>
    </div>

</div>
</template>

<script>

export default {
    props: {
        panelists: {
            type: Array,
            required: false,
        }
    },
}
</script>