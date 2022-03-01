<template>
  <div>
    <v-row align="center" justify="center">
      <v-col
        :cols="$vuetify.breakpoint.smAndDown ? 12 : 4"
        v-for="(value, index) in values"
        :key="index"
      >
        <v-img :src="value.image"></v-img>
        <v-card-text
          class="text-center mb-5 orange--text"
          :class="
            $vuetify.breakpoint.smAndDown
              ? ourValuesConfig.titleMobile
              : ourValuesConfig.titlePc
          "
        >
          {{ titles[index].toUpperCase() }}
        </v-card-text>
        <p
          :class="
            $vuetify.breakpoint.smAndDown
              ? ourValuesConfig.descriptionMobile
              : ourValuesConfig.descriptionPc
          "
        >
          {{ bodyText[index] }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    values: Array,
    ourValuesConfig: Object,
  },
  computed: {
    titles() {
      return Object.values(this.$t("aboutpage.ourvaluestitles"));
    },
    bodyText() {
      return Object.values(this.$t("aboutpage.ourvalues"));
    },
  },
  created() {
    console.log();
  },
  data() {
    return {};
  },
};
</script>
