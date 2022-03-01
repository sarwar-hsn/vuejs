<template>
  <v-btn icon :href="btnConfig.url" target="_blank">
    <v-icon :color="btnConfig.color">{{ btnConfig.icon }}</v-icon>
  </v-btn>
</template>


<script>
export default {
  props: {
    btnConfig: Object,
  },
};
</script>