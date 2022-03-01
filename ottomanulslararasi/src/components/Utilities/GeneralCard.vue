<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card
          outlined
          :width="cardConfig.cardwidth"
          :height="cardConfig.cardheight"
        >
          <div class="image-container">
            <v-img
              class="zoom"
              :src="project.projectImages[0]"
              :style="cardConfig.imageStyle"
              width="100%"
              height="100%"
            ></v-img>
          </div>
          <v-card-text
            class="text-wrap pb-0 text-center"
            :class="
              $vuetify.breakpoint.smAndDown
                ? cardConfig.titleMobile
                : cardConfig.titlePc
            "
          >
            {{ textInfo.title.toUpperCase() }}
          </v-card-text>

          <v-card-text
            :style="{ overflow: 'hidden' }"
            class="text-truncate text-wrap"
          >
            {{ textInfo.body }}
          </v-card-text>

          <v-card-text class="text-center">
            <v-btn @click="btnHandler" outlined color="white" class="button">
              {{ `${this.$t("homepage.recentProjects.buttonOne")}` }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    cardConfig: Object,
    project: Object,
    textInfo: Object,
  },
  data() {
    return {};
  },
  methods: {
    btnHandler() {
      this.$emit("btnhandler");
    },
  },
};
</script>

<style scoped>
.image-container {
  height: 200;
  width: 400;
  overflow: hidden;
}
.zoom {
  padding: 50px;
  height: 200px;
  width: 400px;
  height: 200px;
  margin: 0 auto;
  transition: transform 0.2s; /* Animation */
}

.zoom:hover {
  transform: scale(1.1);
  overflow: hidden;
}

button {
  z-index: 1;
  position: relative;
  background-color: hsl(64, 56%, 32%);
  overflow: hidden;
  cursor: pointer;
}

button::after {
  content: "";
  z-index: -1;
  background-color: hsla(0, 0%, 100%, 0.2);
  position: absolute;
  top: -50%;
  bottom: -50%;
  width: 1.25em;
  transform: translate3d(-525%, 0, 0) rotate(35deg);
}

button:hover::after {
  transition: transform 0.45s ease-in-out;
  transform: translate3d(400%, 0, 0) rotate(35deg);
}
</style>