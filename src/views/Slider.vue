<template>
  <v-carousel
      class="corousel__shop"
      cycle
      height="400"
      width="1150"
      hide-delimiter-background
  >
    <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
    >
      <v-sheet
          v-if="banners.length==0"
          :color="colors[i]"
          height="100%"
      >
        <v-row
            class="fill-height"
            align="center"
            justify="center"
        >
          <div class="text-h2">
            {{ slide }}
          </div>
        </v-row>
      </v-sheet>
      <img :src="'https://api.kenesmebel.kz'+slide.image_path" alt="">
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'Мебельный магазин',
        'Second',
        'Высокая качество',
        'Выгодные цены',
        'Fifth',
      ],
      banners: []
    }
  },
  mounted() {
    this.getBanner();
  },
  methods: {
    getBanner() {
      const config = {
        headers: { 'Authorization': `Bearer ${this.token}` }
      };
      this.$http.get('/get/banners',  config)
          .then(res => {
            this.banners = res.data
            this.slides = res.data
          });
    },
  }
}
</script>

<style lang="scss">
  .corousel__shop {
    margin-top: 100px;
    width: 80%;
    @media(max-width: 900px) {
        height: unset !important;
    }
    img {
      @media(max-width: 900px) {
          width: 100%;
      }
    }
  }
</style>