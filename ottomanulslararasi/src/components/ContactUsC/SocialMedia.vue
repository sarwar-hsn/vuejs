<template>
  <v-btn :target="target" :href="goto" outlined :color="color" width="100%">
    <v-row justify="center" align="center">
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
        <v-card-title>
          <v-icon :color="color">{{ btnIcon }}</v-icon> {{ btnText }}
        </v-card-title>
      </v-col>
    </v-row>
  </v-btn>
</template>


<script>
export default {
  props: {
    btnText: String,
    btnIcon: String,
    color: String,
    goto: String,
    target: String,
  },
};
</script>