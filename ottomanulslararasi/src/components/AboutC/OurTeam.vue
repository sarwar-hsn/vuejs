<template>
  <div>
    <v-row>
      <v-col cols="3" v-for="(ourTeam, index) in ourTeams" :key="index"
        ><v-img class="ourteam-image mx-auto" :src="ourTeam.image"></v-img>
        <v-card-text
          class="text-center text-position subtitle-1 font-weight-medium"
        >
          {{ ourTeam.name.toUpperCase() }}
        </v-card-text>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    ourTeams: Array,
  },
};
</script>

<style>
.ourteam-image {
  border: 2px solid #c7af29;
  width: 200px;
  height: 200px;
  padding: 5px;
  border-radius: 10%;
}
.ourteam-image:hover {
  border: 3px solid #9ab15b;
  padding: 15px;
  border-radius: 15%;
  box-shadow: 0px 10px 20px -10px rgb(0, 0, 0);
}
</style>