<template>
  <Slick ref="slick" :options="slickOptions" class="slick-outer">
    <div v-for="card in cardList" :key="card.id" class="image-thumb">
      <v-card outlined flat height="250" min-width="180">
        <img
          class="grey darken-3"
          height="180"
          contain
          :src="IMAGE_DIR + card.user_id + EXTENSION"
        />
        <v-card-title class="pt-1">{{ card.user_name }}</v-card-title>
        <v-card-subtitle class="pb-1">{{ card.department }}</v-card-subtitle>
      </v-card>
    </div>
  </Slick>
</template>
<script>
import Slick from "vue-slick";

const IMAGE_DIR = './images/player/';
const NO_IMAGE = 'NoImage.png';
const EXTENSION = '.jpg';

export default {
  props: ["cardList"],
  components: { Slick },
  data() {
    return {
      slickOptions: {
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 10,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1760,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 1080,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 532,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },
  },
};
</script>
