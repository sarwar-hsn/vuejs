<template>
  <div class="projects-page">
    <v-container fluid>
      <v-row>
        <v-col
          v-if="!$vuetify.breakpoint.smAndDown"
          cols="3"
          :style="{ backgroundColor: '#ececec' }"
        >
          <div v-if="!$vuetify.breakpoint.smAndDown" class="sidebar">
            <SideBar
              :sidebarConfig="{ routeName: 'projects' }"
              :SideBar="sideBar"
            />
          </div>
        </v-col>
        <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 9">
          <Section
            v-if="loadedProject"
            :sectionConfig="{
              title: `${projectText.title}`,
              subtitle:null,
              titleDesign: [
                'orange--text',
                'text-h4',
                'font-weight-medium',
                'text-center',
              ],
              titleDesignMobile: [
                'orange--text',
                'text-h6',
                'font-weight-medium',
                'text-center',
              ],
              dividerDesign: { borderColor: 'orange', background: 'orange' },
            }"
          >
            <template>
              <v-img
                :style="{
                  borderRadius: '5px',
                  border: '2px solid orange',
                  width: '100%',
                  height: 'auto',
                }"
                height="350"
                width="1080"
                :src="loadedProject.projectImages[0]"
              >
              </v-img>
              <v-container v-html="projectText.body" fluid>
                {{ projectText.body }}
              </v-container>
              <v-container>
                <v-row>
                  <v-col
                    :cols="$vuetify.breakpoint.smAndDown ? '6' : '3'"
                    v-for="(image, key_index) in loadedProject.projectImages"
                    :key="key_index"
                  >
                    <v-img
                      :style="{ cursor: 'pointer' }"
                      class="gl-img"
                      height="150"
                      width="300"
                      :src="loadedProject.projectImages[key_index]"
                      @click="index = 0"
                    >
                    </v-img>
                  </v-col>
                </v-row>
                <vue-gallery-slideshow
                  :images="loadedProject.projectImages"
                  :index="index"
                  @close="index = null"
                ></vue-gallery-slideshow>
              </v-container>
              <!-- <v-container fluid>
                <v-card-text>
                  {{ share }}:
                  <v-btn icon><v-icon class="">mdi-facebook</v-icon></v-btn>
                  <v-btn icon><v-icon class="">mdi-whatsapp</v-icon></v-btn>
                </v-card-text>
              </v-container> -->
            </template>
          </Section>
          <div v-else>
            <h3>content not found</h3>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import SideBar from "../components/AboutC/SideBar.vue";
import Section from "../components/Utilities/Section.vue";
import VueGallerySlideshow from "vue-gallery-slideshow";

export default {
  components: {
    SideBar,
    Section,
    VueGallerySlideshow,
  },
  props: {
    allProjectsText: Array,
  },
  created() {
    let data = this.$route.params.data;
    if (data === undefined || data === null) {
      this.loadedProject = this.$store.getters.getProjectsById(
        this.$route.params.id
      );
    } else {
      this.loadedProject = this.$route.params.data;
    }
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
    projectText() {
      var obj = {};
      Object.keys(this.$t("projectdetails")).forEach((mainKey) => {
        let idKeys = Object.keys(this.$t(`projectdetails.${mainKey}`));
        idKeys.forEach((key) => {
          if (key === this.loadedProject.id.toString()) {
            obj["id"] = key;
            let values = this.$t(`projectdetails.${mainKey}.${key}`);
            obj["title"] = values.title;
            obj["date"] = values.date;
            obj["body"] = values.body;
          }
        });
      });
      return obj;
    },
    share() {
      return this.$t("shareon");
    },
  },
  data() {
    return {
      index: null,
      loadedProject: null,
      loadedProjectText: null,
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

.sicons {
  color: bisque;
  padding-left: 10;
}
</style>