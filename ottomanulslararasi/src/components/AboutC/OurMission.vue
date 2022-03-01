<template>
  <div>
    <v-row>
      <v-col
        :cols="$vuetify.breakpoint.smAndDown ? 12 : 4"
        v-for="(mission, index) in missions"
        :key="index"
      >
        <v-img :src="mission.image"></v-img>
        <h3
          class="text-center"
          :class="
            $vuetify.breakpoint.smAndDown
              ? ourMissionsConfig.titleMobile
              : ourMissionsConfig.titlePc
          "
        >
          {{ mission.title.toUpperCase() }}
        </h3>
        <p
          :class="
            $vuetify.breakpoint.smAndDown
              ? ourMissionsConfig.descriptionMobile
              : ourMissionsConfig.descriptionPc
          "
        >
          {{ mission.description }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>


<script>
export default {
  props: {
    missions: Array,
    ourMissionsConfig: Object,
  },
  data() {
    return {};
  },
};
</script>