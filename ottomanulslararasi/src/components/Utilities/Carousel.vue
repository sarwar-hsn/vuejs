<template>
  <v-carousel
    continuous
    cycle
    show-arrows
    hide-delimiter-background
    delimiter-icon="mdi-minus"
    :show-arrows-on-hover="$vuetify.breakpoint.smAndDown ? true : false"
    height="auto"
    progress-color="orange"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :to="{ name: 'projects' }"
    >
      <v-img
        :src="$vuetify.breakpoint.smAndDown ? item.mb : item.pc"
        :style="{
          height: `${$vuetify.breakpoint.smAndDown ? '100%' : '100%'}`,
          objectFit: 'contain',
        }"
        :alt="item.src"
      />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      sideBar: this.$store.getters.projectSidebar,
      outline: false,
      items: [
        {
          pc: require("@/assets/carousel/pc/su_kuyusu.jpg"),
          mb: require("@/assets/carousel/mb/su_kuyusu.jpg"),
        },
        {
          pc: require("@/assets/carousel/pc/sadirvan.jpg"),
          mb: require("@/assets/carousel/mb/sadirvan.jpg"),
        },
        {
          pc: require("@/assets/carousel/pc/konaklama.jpg"),
          mb: require("@/assets/carousel/mb/konaklama.jpg"),
        },

        {
          pc: require("@/assets/carousel/pc/cami_insaat.jpg"),
          mb: require("@/assets/carousel/mb/cami_insaat.jpg"),
        },

        {
          pc: require("@/assets/carousel/pc/kurban.jpg"),
          mb: require("@/assets/carousel/mb/kurban.jpg"),
        },
        {
          pc: require("@/assets/carousel/pc/yemek.jpg"),
          mb: require("@/assets/carousel/mb/yemek.jpg"),
        },
        {
          pc: require("@/assets/carousel/pc/kurani_kerim.jpg"),
          mb: require("@/assets/carousel/mb/kurani_kerim.jpg"),
        },
        {
          pc: require("@/assets/carousel/pc/yetim_destek.jpg"),
          mb: require("@/assets/carousel/mb/yetim_destek.jpg"),
        },
        {
          pc: require("@/assets/carousel/pc/erzak_dagitimi.jpg"),
          mb: require("@/assets/carousel/mb/erzak_dagitimi.jpg"),
        },
      ],
    };
  },
};
</script>


<style >
.v-icon {
  color: rgb(255, 145, 0) !important;
}
.v-window__next .v-window__prev {
  display: none !important;
}
.theme--dark.v-btn.v-btn--icon {
  color: rgba(255, 145, 0, 0.863);
  opacity: 1;
}
</style>