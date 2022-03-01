<template>
  <div>
    <v-img
      :style="{ cursor: 'pointer' }"
      class="gl-img"
      :height="$vuetify.breakpoint.smAndDown ? '150' : '200'"
      :width="300"
      :src="images[0]"
      @click="index = 0"
      @mouseover="
        overlay = true;
        expand = true;
      "
      @mouseleave="
        overlay = false;
        expand = false;
      "
    >
      <v-expand-transition>
        <v-overlay
          v-show="expand"
          :absolute="absolute"
          :opacity="opacity"
          :value="overlay"
          class="mx-auto"
          color="black accent-3"
        >
          <v-card-text class="text-wrap white--text" @click="overlay = false">
            {{ `${this.$t("homepage.photogallery.button")}`.toUpperCase() }}
          </v-card-text>
        </v-overlay>
      </v-expand-transition>
    </v-img>

    <vue-gallery-slideshow
      :images="images"
      :index="index"
      @close="index = null"
    ></vue-gallery-slideshow>
  </div>
</template>





<script>
import VueGallerySlideshow from "vue-gallery-slideshow";
export default {
  props: {
    images: Array,
    imageLabel: String,
    date: String,
  },
  components: {
    VueGallerySlideshow,
  },
  data() {
    return {
      absolute: true,
      opacity: 0.7,
      overlay: false,
      expand: false,
      index: null,
    };
  },
  methods: {},
};
</script>


<style lang="scss" scoped>
.gl-img {
  // border-radius: 5px;
  // outline: 2px solid goldenrod;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 0 1pt rgb(202, 159, 16);
  outline: none;
}
.vgs {
  background: rgba(0, 0, 0, 0.95);
}
</style>

