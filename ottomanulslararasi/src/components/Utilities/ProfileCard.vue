<template>
  <v-row>
    <v-col
      :cols="$vuetify.breakpoint.smAndDown ? 12 : 6"
      v-for="(profileCard, index) in profileCards"
      :key="index"
    >
      <v-card class="text-center profile-card" width="100%" outlined shaped>
        <img
          :style="{ width: '70%' }"
          class="profile-card-image"
          :src="profileCard.image"
        />
        <h3
          class="profile-card-title"
          :class="
            $vuetify.breakpoint.smAndDown
              ? profileCardConfig.titleMobile
              : profileCardConfig.titlePc
          "
        >
          {{ profileCard.title.toUpperCase() }}
        </h3>
        <h6
          class="profile-card-subtitle"
          :class="
            $vuetify.breakpoint.smAndDown
              ? profileCardConfig.subtitleMobile
              : profileCardConfig.subtitlePc
          "
        >
          {{ profileCard.subtitle }}
        </h6>
        <!-- <p
          class="profile-card-description"
          :class="
            $vuetify.breakpoint.smAndDown
              ? profileCardConfig.descriptionMobile
              : profileCardConfig.descriptionPc
          "
        >
          {{ profileCard.description }}
        </p> -->
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    profileCards: Array,
    profileCardConfig: Object,
  },
};
</script>


<style >
@import url("https://fonts.googleapis.com/css?family=Montserrat");

.profile-card-title {
  margin: 10px 0;
}

.profile-card-subtitle {
  margin: 5px 0;
  text-transform: uppercase;
}

.profile-card-description {
  font-size: 14px;
  line-height: 21px;
  margin: 3px;
  padding-top: 1rem;
}

.profile-card {
  background-color: #ffff;
  border-radius: 5px;
  color: #2d3d7e;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  position: relative;
  width: 350px;
  max-width: 100%;
  text-align: center;
}

.profile-card-image {
  border: 2px solid #c7af29;
  border-radius: 50%;
  padding: 5px;
  overflow: hidden;
}
.profile-card-image:hover {
  border: 2px solid #03cb35;
  border-radius: 50%;
  padding: 7px;
  box-shadow: 0px 10px 20px -10px rgb(0, 0, 0);
}
</style>