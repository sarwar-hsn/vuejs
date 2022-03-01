<template>
  <div>
    <v-container fluid>
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
          <figure
            :class="$vuetify.breakpoint.smAndDown ? 'text-h5' : 'display-1'"
            class="text-center mt-8 pt-8 hsl(64, 56%, 32%)--text"
          >
            <blockquote class="custom-font-blockquote">
              <p>
                {{ this.quote.quote }}
              </p>
            </blockquote>
            <figcaption :style="{ display: 'flex' }" class="orange--text">
              <div class="subtitle-1" :style="{ marginLeft: 'auto' }">
                {{ this.quote.writer }}
              </div>
            </figcaption>
          </figure>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>



<script>
export default {
  computed: {
    quote() {
      return {
        quote: this.$t("homepage.quote"),
        writer: this.$t("homepage.quoteAuthor"),
      };
    },
  },
  data() {
    return {};
  },
};
</script>



<style scoped>
blockquote p::before {
  content: "\201C";
}

blockquote p::after {
  content: "\201D";
}

.custom-font-blockquote {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
</style>