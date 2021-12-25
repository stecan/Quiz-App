<template>
<div>
    <div
        v-if="panelists.length"
    >
        <v-avatar
            class="ma-2"
            v-for="(panelist, index) in panelists"
            :key="index"
            size="125"
        >
            <img 
                height="250" min-width="180"
                :src="panelist.profileImagePath"
            />
        </v-avatar>
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