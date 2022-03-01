<template>
  <v-parallax
    id="my-lax"
    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
  >
    <v-row align="center" justify="space-around">
      <v-card
        flat
        color="transparent"
        class="text-center"
        v-for="(item, index) in items"
        :key="index"
      >
        <v-card-text
          class="text-wrap text-body-1 font-weight-medium blurred-text"
          :class="item.color"
        >
          {{ titles[index] }}
        </v-card-text>
        <v-card-subtitle>
          <countTo
            class="white--text font-weight-bold"
            :class="$vuetify.breakpoint.smAndDown ? 'text-h4' : 'text-h1'"
            :autoplay="true"
            :startVal="item.startValue"
            :endVal="item.endValue"
            :duration="2000"
            separator=","
          >
          </countTo>
        </v-card-subtitle>
      </v-card>
    </v-row>
  </v-parallax>
</template>

<script>
import countTo from "vue-count-to";
export default {
  components: {
    countTo,
  },
  computed: {
    titles() {
      return Object.values(this.$t("homepage.parallex"));
    },
  },
  data() {
    return {
      isIntersecting: false,
      items: [
        {
          startValue: 0,
          endValue: 0,
          color: "red--text",
        },
        {
          startValue: 0,
          endValue: 0,
          color: "orange--text",
        },
      ],
    };
  },
  mounted() {
    let targetElement = document.getElementById("my-lax");

    let option = {
      threshold: 0.75,
    };
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          this.isIntersecting = false;
        } else {
          this.isIntersecting = true;
          this.items[0].endValue = 45050;
          this.items[1].endValue = 145;
          observer.unobserve(targetElement);
        }
      });
    }, option);
    observer.observe(targetElement);
  },
};
</script>

<style >
#my-lax .v-parallax__content {
  background: rgba(0, 0, 0, 0.514);
}
.blurred-text {
  background: rgba(41, 41, 41, 0.5);
}
</style>