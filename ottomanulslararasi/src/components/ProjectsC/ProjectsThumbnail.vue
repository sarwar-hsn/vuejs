<template>
  <div>
    <v-container>
      <v-row align="center" justify="center">
        <v-col
          v-for="(project, index) in projects"
          :key="index"
          :cols="$vuetify.breakpoint.smAndDown ? 10 : '3'"
        >
          <GeneralCard
            @btnhandler="changeRoute(project)"
            :cardConfig="{
              cardwidth: 300,
              imageStyle: { height: '100%', width: '100%' },
              titlePc: ['text-h6'],
              titleMobile: ['text-h6'],
              subtitlePc: [],
              subtitleMobile: [],
            }"
            :project="project"
            :textInfo="recentProjectsText[index]"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import GeneralCard from "@/components/Utilities/GeneralCard.vue";
export default {
  components: {
    GeneralCard,
  },
  computed: {
    recentProjectsText() {
      let array = [];
      Object.keys(this.$t("projectdetails")).forEach((mainKey) => {
        let idKeys = Object.keys(this.$t(`projectdetails.${mainKey}`));
        idKeys.forEach((key) => {
          this.projects.forEach((project) => {
            if (key === project.id.toString()) {
              let values = this.$t(`projectdetails.${mainKey}.${key}`);
              let obj = {};
              obj["id"] = key;
              obj["title"] = values.title;
              obj["date"] = values.date;
              obj["body"] = values.body;
              array.push(obj);
            }
          });
        });
      });
      return array;
    },
  },
  data() {
    return {
      projects: this.$store.getters.recentProjects,
    };
  },

  methods: {
    changeRoute(project) {
      this.$router.push({
        name: "projectsdetail",
        params: { id: project.id, data: project },
      });
    },
  },
};
</script>