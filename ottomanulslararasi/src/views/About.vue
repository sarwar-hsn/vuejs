<template>
  <div class="about-page">
    <v-container fluid>
      <v-row>
        <v-col
          v-if="!$vuetify.breakpoint.smAndDown"
          cols="2"
          :style="{ backgroundColor: '#ececec' }"
        >
          <div class="sidebar">
            <SideBar :SideBar="sidebarTitles" />
          </div>
        </v-col>
        <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 10">
          <div id="whoarewe">
            <AboutPageTitles
              :barTitleConfig="{
                sectionStyle: {
                  minHeight: '300px',
                },
                title: `${sidebarTitles[0].title}`,
                borderDesign: '4px solid orange',
                titlePc: ['text-h4', 'orange--text', 'font-weight-bold'],
                titleMobile: ['text-h4', 'orange--text', 'font-weight-bold'],
              }"
            >
              <template>
                <v-card-text class="body-1 mt-10 pl-5 pr-5">
                  {{ this.$t("aboutpage.whoarewe") }}
                </v-card-text>
              </template>
            </AboutPageTitles>
          </div>
          <div id="ourmissions">
            <AboutPageTitles
              :barTitleConfig="{
                sectionStyle: { minHeight: '300px' },
                title: `${sidebarTitles[1].title}`,
                borderDesign: '4px solid orange',
                titlePc: ['text-h4', 'orange--text', 'font-weight-bold'],
                titleMobile: ['text-h4', 'orange--text', 'font-weight-bold'],
              }"
            >
              <template>
                <v-card-text class="body-1 mt-10 pl-5 pr-5">
                  {{ this.$t("aboutpage.ourmission") }}
                </v-card-text>
              </template>
            </AboutPageTitles>
          </div>
          <div id="BoardOfDirectors">
            <AboutPageTitles
              class="mt-10 mb-15"
              :barTitleConfig="{
                title: `${sidebarTitles[2].title}`,
                borderDesign: '4px solid orange',
                titlePc: ['text-h4', 'orange--text', 'font-weight-bold'],
                titleMobile: ['text-h4', 'orange--text', 'font-weight-bold'],
              }"
            >
              <template>
                <ProfileCard
                  class="mt-10"
                  :profileCards="this.profiles"
                  :profileCardConfig="{
                    titleMobile: ['text-h5'],
                    titlePc: ['text-h5'],
                    subtitleMobile: ['text-subtitle-1'],
                    subtitlePc: ['text-subtitle-1'],
                    descriptionMobile: ['text-body-1'],
                    descriptionPc: ['text-body-1'],
                  }"
                />
              </template>
            </AboutPageTitles>
          </div>
          <div id="OurValues">
            <AboutPageTitles
              class="mb-10 pl-5 pr-5"
              :barTitleConfig="{
                title: `${sidebarTitles[3].title}`,
                borderDesign: '4px solid orange',
                titlePc: ['text-h4', 'orange--text', 'font-weight-bold'],
                titleMobile: ['text-h4', 'orange--text', 'font-weight-bold'],
              }"
            >
              <template>
                <OurValues
                  class="mt-10 mb-15 pl-5 pr-5"
                  :values="values"
                  :ourValuesConfig="{
                    titleMobile: ['text-h6'],
                    titlePc: ['text-h6'],
                    descriptionMobile: ['body-1'],
                    descriptionPc: ['body-1'],
                  }"
                />
              </template>
            </AboutPageTitles>
          </div>
          <!-- <div id="OurTeam">
            <AboutPageTitles
              :barTitleConfig="{
                title: `${sidebarTitles[4].title}`,
                borderDesign: '4px solid orange',
                titlePc: ['text-h4', 'orange--text', 'font-weight-bold'],
                titleMobile: ['text-h4', 'orange--text', 'font-weight-bold'],
              }"
            >
              <template>
                <OurTeam class="mt-15 pl-5 pr-5" :ourTeams="ourTeams" />
              </template>
            </AboutPageTitles>
          </div> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SideBar from "../components/AboutC/SideBar.vue";

import ProfileCard from "../components/Utilities/ProfileCard.vue";

import AboutPageTitles from "../components/Utilities/AboutPageTitles.vue";
//import OurTeam from "../components/AboutC/OurTeam.vue";
import OurValues from "../components/AboutC/OurValues.vue";
export default {
  components: {
    SideBar,
    ProfileCard,
    AboutPageTitles,
    OurValues,
  },
  computed: {
    profiles() {
      return [
        {
          image: this.profileCards[0].image,
          title: this.profileCards[0].title,
          subtitle: this.$t("contactpage.director"),
          description: this.profileCards[0].description,
        },
        {
          image: this.profileCards[1].image,
          title: this.profileCards[1].title,
          subtitle: this.$t("contactpage.assistantDirector"),
          description: this.profileCards[1].description,
        },
      ];
    },
    appbarHeight() {
      return this.$vuetify.application.top;
    },
    sidebarTitles() {
      let titles = Object.values(this.$t("aboutpage.sidebartitles"));
      var array = [];
      for (let i = 0; i < titles.length; i++) {
        let obj = {};
        obj["title"] = titles[i];
        obj["href"] = this.sideBar[i];
        array.push(obj);
      }
      return array;
    },
  },
  data() {
    return {
      sideBar: [
        "whoarewe",
        "ourmissions",
        "BoardOfDirectors",
        "OurValues",
        "OurTeam",
      ],
      values: [
        {
          image: require("@/assets/values1.png"),
        },
        {
          image: require("@/assets/values2.png"),
        },
        {
          image: require("@/assets/values3.png"),
        },
      ],
      profileCards: [
        {
          image: require("@/assets/users/admin.jpg"),
          title: "Shihab Ahmed",
          subtitle: "FOUNDER & CEO",
          description: "",
        },
        {
          image: require("@/assets/users/admin2.jpg"),
          title: "Nurnabi Ahmed",
          subtitle: "ASSISTANT DIRECTOR",
          description: "",
        },
      ],
    };
  },
};
</script>




<style >
.sidebar {
  position: -webkit-sticky;
  position: sticky;
  top: 76px;
}
</style>