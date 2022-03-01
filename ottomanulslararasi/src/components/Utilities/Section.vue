
<template>
  <section
    :id="sectionConfig.id"
    :style="{ minHeight: minHeight, background: background }"
  >
    <v-container>
      <v-row align="center" justify="center">
        <v-col
          cols="12"
          class="
            lighten-2
            fill-height
            d-flex
            flex-column
            justify-center
            align-center
          "
        >
          <v-card flat color="transparent">
            <span>
              <v-card-text
                v-if="sectionConfig.title !== null"
                class="letter-space-title title-selector mb-0"
                :class="
                  $vuetify.breakpoint.smAndDown
                    ? sectionConfig.titleDesignMobile
                    : sectionConfig.titleDesign
                "
              >
                {{ sectionConfig.title.toUpperCase() }}
              </v-card-text>
            </span>
            <v-divider
              v-if="sectionConfig.title !== null"
              class="divider mb-5"
              :style="sectionConfig.dividerDesign"
            ></v-divider>
            <v-card-text
              v-if="sectionConfig.subtitle !== null"
              class="letter-space-subtitle mt-2 mb-2 text-center"
              :class="
                $vuetify.breakpoint.smAndDown
                  ? sectionConfig.subtitleDesignMobile
                  : sectionConfig.subtitleDesign
              "
            >
              {{ sectionConfig.subtitle.toUpperCase() }}
            </v-card-text>
          </v-card>
          <slot></slot>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>


<script>
export default {
  props: {
    minHeight: String,
    background: String,
    sectionConfig: Object,
  },

  data: () => ({}),
};
</script>
<style scoped>
.letter-space-title {
  letter-spacing: 0.4rem !important;
}
.letter-space-subtitle {
  letter-spacing: 0.08rem !important;
}
.divider {
  margin-left: auto;
  margin-right: auto;
  border-width: 0.09rem !important;
  height: 100%;
  width: 40%;
}

.title-selector:hover {
  cursor: pointer;
  opacity: 0.6;
}

.bg-grey {
  background: #ececec;
}
</style>