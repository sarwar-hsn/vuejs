<template>
  <div class="projects-page">
    <v-container fluid>
      <v-row>
        <v-col
          v-if="!$vuetify.breakpoint.smAndDown"
          cols="3"
          :style="{ backgroundColor: '#ececec' }"
        >
          <div class="sidebar">
            <SideBar :SideBar="sideBar" />
          </div>
        </v-col>
        <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 9">
          <Section
            v-for="(project, index) in allProjects"
            :key="index"
            :background="index % 2 !== 0 ? '#ececec' : ''"
            :sectionConfig="{
              id: `${sideBar[index].href}`,
              title: `${sideBar[index].title}`,
              subtitle: null,
              titleDesign: ['orange--text', 'text-h4', 'font-weight-medium'],
              titleDesignMobile: [
                'orange--text',
                'text-h6',
                'font-weight-medium',
                'text-center',
              ],
              dividerDesign: { borderColor: 'orange', background: 'orange' },
            }"
          >
            <ProjectsGridView
              :projectsText="allProjectsText[index]"
              :projects="allProjects[index]"
              :allProjectsText="allProjectsText"
            />
          </Section>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import SideBar from "../components/AboutC/SideBar.vue";
import Section from "../components/Utilities/Section.vue";
import ProjectsGridView from "../components/ProjectsC/ProjectsGridView.vue";
export default {
  components: {
    SideBar,
    Section,
    ProjectsGridView,
  },

  computed: {
    sideBar() {
      let array = [];
      let pSKeys = Object.keys(this.$t("projects"));
      let i = 0;
      Object.values(this.$t("projects")).forEach((item) => {
        let obj = {
          href: pSKeys[i++].replace(/ /g, ""),
          title: item,
        };
        array.push(obj);
      });
      return array;
    },
    allProjectsText() {
      let keys = Object.keys(this.$t("projectdetails"));
      let mainArray = [];
      keys.forEach((key) => {
        let idkeys = Object.keys(this.$t(`projectdetails.${key}`));

        let secondArray = [];
        idkeys.forEach((idkey) => {
          let obj = {};
          obj["id"] = idkey;
          let temp = this.$t(`projectdetails.${key}.${idkey}`);
          obj["title"] = temp.title;
          obj["date"] = temp.date;
          obj["body"] = temp.body;
          secondArray.push(obj);
        });
        mainArray.push(secondArray);
      });
      return mainArray;
    },
  },
  data() {
    return {
      allProjects: this.$store.getters.allProjects,
      projectNames: this.$store.getters.projectNames,
    };
  },
};
</script>


<style scoped>
.sidebar {
  position: -webkit-sticky;
  position: sticky;
  top: 110px;
}
</style>