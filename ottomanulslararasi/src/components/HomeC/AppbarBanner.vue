<template>
  <Carousel />
</template>


<script>
import Carousel from "@/components/Utilities/Carousel.vue";
export default {
  components: {
    Carousel,
  },
  computed: {
    banner() {
      return {
        title: this.$t("homepage.banner.title"),
        body: this.$t("homepage.banner.body"),
      };
    },
  },
  data() {
    return {
      isIntersecting: false,
    };
  },
};
</script>



<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Questrial");

.banner {
  font-family: "Questrial" !important;
}
.body {
  line-height: 150%;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: rgb(20, 6, 29) !important;
}
</style>