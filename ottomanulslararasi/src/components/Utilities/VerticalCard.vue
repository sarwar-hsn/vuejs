<template>
  <div>
    <v-container>
      <v-card
        shaped
        outlined
        :width="
          $vuetify.breakpoint.smAndDown
            ? cardConfig.cardWidthMobile
            : cardConfig.cardWidthPc
        "
      >
        <v-container>
          <v-row dense>
            <v-col cols="4">
              <div :style="{ overflow: 'hidden', borderRadius: '5px' }">
                <v-img
                  class="image-hover"
                  :height="cardConfig.imageStyle.height"
                  :width="cardConfig.imageStyle.width"
                  :src="project.projectImages[0]"
                >
                </v-img>
              </div>
            </v-col>
            <v-col cols="8">
              <v-card flat>
                <v-card-text
                  class="ma-0 pt-0 pb-0 subtitle-1 font-weight-medium"
                >
                  {{ textInfo.title.toUpperCase() }}
                </v-card-text>
                <v-card-text class="text-truncate pt-2 pb-2">
                  {{ textInfo.body }}
                </v-card-text>
                <v-card-text class="ml-0">
                  <v-btn
                    @click="btnHandler"
                    outlined
                    color="white"
                    class="button"
                  >
                    {{ `${this.$t("homepage.recentProjects.buttonTwo")}` }}
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    cardConfig: Object,
    project: Object,
    textInfo: Object,
  },
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6,
      },
    ],
  }),
  methods: {
    btnHandler() {
      this.$emit("btnhandler");
    },
  },
};
</script>


<style scoped>
.image-hover:hover {
  opacity: 0.8;
  transform: scale(1.1);
  overflow: hidden;
}
.button {
  z-index: 1;
  position: relative;
  background-color: hsl(64, 56%, 32%);
  overflow: hidden;
  cursor: pointer;
}

.button::after {
  content: "";
  z-index: -1;
  background-color: hsla(0, 0%, 100%, 0.2);
  position: absolute;
  top: -50%;
  bottom: -50%;
  width: 1.25em;
  transform: translate3d(-525%, 0, 0) rotate(35deg);
}

.button:hover::after {
  transition: transform 0.45s ease-in-out;
  transform: translate3d(500%, 0, 0) rotate(35deg);
}
</style>