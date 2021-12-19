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
                :src="panelist.profileImagePath"
            />
        </v-avatar>
    </div>
    <div v-else>回答者が決定していません。</div>

</div>
</template>

<script>
import axios from 'axios';

const IMAGE_DIR = '/images/';
const NO_IMAGE = 'NoImage.png';
const EXTENSION = '.png';
// const fs = require('fs');

export default {
    props: {
        panelists: {
            type: Array,
            required: false,
        }
    },
    created() {
        this.getPanelists();
    },
    methods: {

    },
}
</script>