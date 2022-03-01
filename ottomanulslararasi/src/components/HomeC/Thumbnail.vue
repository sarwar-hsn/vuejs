<template>
  <v-container>
    <v-row justify="space-around" align="center">
      <v-col
        :cols="$vuetify.breakpoint.smAndDown ? 6 : 4"
        v-for="(item, index) in photoGallery"
        :key="index"
      >
        <gallery
          :imageLabel="photoGallery[index].title"
          :images="photoGallery[index].images"
          :date="photoGallery[index].date"
        />
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
import Gallery from "../HomeC/Gallery.vue";

export default {
  components: { Gallery },

  data() {
    return {
      photoGallery: this.$store.getters.photoGallery,
    };
  },
};
</script>