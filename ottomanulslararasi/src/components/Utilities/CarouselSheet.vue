<template>
  <div>
    <v-divider :style="{ border: '2px solid orange' }"></v-divider>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :to="{ name: 'projects' }"
    >
      <img
        :src="item.src"
        style="max-width: 100%"
        :alt="item.src"
        :height="$vuetify.breakpoint.smAndDown ? '100%' : '100%'"
      />
      <!-- <v-container fluid class="text-center">
        <v-row align="center" justify="center" style="height: 70vh">
          <v-col
            :cols="$vuetify.breakpoint.smAndDown ? 12 : 6"
            class="d-flex flex-column justify-center"
          >
          </v-col>
        </v-row>
      </v-container> -->
    </v-carousel-item>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideBar: this.$store.getters.projectSidebar,
      outline: false,
      items: [
        {
          src: require("@/assets/carousel/cami_insaat.png"),
        },
        {
          src: require("@/assets/carousel/kurani_kerim.png"),
        },
        {
          src: require("@/assets/carousel/kurban.png"),
        },
        {
          src: require("@/assets/carousel/su_kuyusu.png"),
        },
        {
          src: require("@/assets/carousel/yemek.png"),
        },
        {
          src: require("@/assets/carousel/yetim_destek.png"),
        },
      ],
    };
  },
};
</script>

