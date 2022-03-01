<template>
  <section :style="barTitleConfig.sectionStyle">
    <v-card-text
      :class="
        $vuetify.breakpoint.smAndDown
          ? barTitleConfig.titleMobile
          : barTitleConfig.titlePc
      "
      class="text-center AboutPageTitles"
      :style="{
        borderLeft: barTitleConfig.borderDesign,
        borderRight: barTitleConfig.borderDesign,
      }"
    >
      {{ barTitleConfig.title.toUpperCase() }}
    </v-card-text>
    <slot></slot>
  </section>
</template>
<script>
export default {
  props: {
    barTitleConfig: Object,
  },
  data() {
    return {};
  },
};
</script>
<style>
.AboutPageTitles {
  letter-spacing: 5px;
  font-size: 3em;
}
</style>