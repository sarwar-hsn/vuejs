<template>
  <div>
    <v-container>
      <v-row align="center" justify="center">
        <v-col v-for="(project, index) in projects" :key="index">
          <GeneralCard
            @btnhandler="changeRoute(project)"
            :cardConfig="{
              cardwidth: `${
                $vuetify.breakpoint.smAndDown ? '85vw' : project.width
              }`,
              imageStyle: {
                height: `${$vuetify.breakpoint.smAndDown ? '150px' : '200px'}`,
                width: '100%',
              },
              titlePc: ['caption'],
              titleMobile: ['body-2', 'font-weight-medium'],
              subtitlePc: [],
              subtitleMobile: [],
            }"
            :project="project"
            :textInfo="projectsText[index]"
            :allProjectsText="allProjectsText"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import GeneralCard from "@/components/Utilities/GeneralCard.vue";
export default {
  props: {
    projects: Array,
    projectsText: Array,
    allProjectsText: Array,
  },
  created() {},
  components: {
    GeneralCard,
  },
  data() {
    return {};
  },
  methods: {
    changeRoute(project) {
      this.$router.push({
        name: "projectsdetail",
        params: {
          id: project.id,
          data: project,
          allProjectsText: this.allProjectsText,
        },
      });
    },
  },
};
</script>