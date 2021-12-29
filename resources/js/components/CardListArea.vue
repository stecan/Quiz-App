<template>
  <Slick ref="slick" :options="slickOptions" class="slick-outer">
    <div v-for="card in cardList" :key="card.id" class="image-thumb">
      <v-card outlined flat height="250" min-width="180">
        <v-img
          class="grey darken-3"
          height="180"
          contain
          :src="card.profileImagePath"
        />
        <v-card-title class="pt-1">{{ card.userName }}</v-card-title>
        <v-card-subtitle class="pb-1">{{ card.department }}</v-card-subtitle>
        <div :class="checkStatus(card)"></div>
        <img v-show="card.status == '1'" class="medal" src="https://frame-illust.com/fi/wp-content/uploads/2016/04/6903.png" />
      </v-card>
    </div>
  </Slick>
</template>
<script>
import Slick from "vue-slick";

export default {
  props: ["cardList"],
  components: {
      Slick,
  },
  data() {
    return {
      slickOptions: {
        autoplay: true,
        infinite: true,
        speed: 450,
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
    // マーク表示
    checkStatus: function(card) {
      var cssClass = 'frame';
      if (card.kbn == '2')
      {
        cssClass += ' spot'; // 回答中
      }
      else if (card.kbn == '9')
      {
        // 回答済み
        cssClass += ' fix';
      }
      else
      {
        // 未回答
        cssClass += ' pre';
      }
      return cssClass;
    },
  },
};
</script>

<style lang="scss" scoped>

.frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
}

.medal {
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    z-index: 100;
}

@keyframes spot-ani{
    0%   { opacity:0; }
    100% { opacity:1; }
}
@-webkit-keyframes spot-ani{
    0%   { opacity:0; }
    100% { opacity:1; }
}

.spot {
  border: 3px violet solid !important;
  animation:spot-ani ease-in-out 1s infinite forwards;
  -webkit-animation:spot-ani ease-in-out 1s infinite alternate;
}
.pre {
  border: 3px rgba(145, 224, 145, 0.685) solid !important;
}
.fix {
  border: 3px gray solid !important;
}

</style>
