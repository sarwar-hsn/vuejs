<template>
  <div>
    <section
      id="img"
      :style="
        currentPathHome
          ? $vuetify.breakpoint.smAndDown
            ? decoration.homepageMobile
            : decoration.homepage
          : 'height:0px'
      "
    >
      <div>
        <v-app-bar
          :color="
            transparentAppBar
              ? $vuetify.breakpoint.smAndDown
                ? 'white'
                : 'rgba(255, 255, 255, 0.7)'
              : ''
          "
          flat
          clipped-left
          app
        >
          <div
            :style="{
              width: `${$vuetify.breakpoint.smAndDown ? '100%' : '40%'}`,
            }"
          >
            <v-row align="center" :style="{ flexWrap: 'no-wrap' }">
              <div :style="{ height: '55px', width: '55px' }">
                <v-img
                  :style="{ width: '100%', height: '100%', marginLeft: '19px' }"
                  :src="require('@/assets/footer.png')"
                >
                </v-img>
              </div>

              <v-toolbar-title
                :class="
                  transparentAppBar
                    ? ['orange--text', 'font-weight-bold']
                    : ['green--text', 'font-weight-medium']
                "
                class="green--text font-title ml-7 mr-1"
                :style="{
                  fontSize: `${
                    $vuetify.breakpoint.smAndDown ? '1.1rem' : '1.4rem'
                  }`,
                  letterSpacing: `${
                    $vuetify.breakpoint.smAndDown ? '.03' : '0.07rem'
                  }`,
                }"
              >
                OTTOMAN ULUSLARARASI
              </v-toolbar-title>
            </v-row>
          </div>
          <span class="hidden-md-and-up">
            <v-app-bar-nav-icon @click="isDrawer = !isDrawer">
            </v-app-bar-nav-icon>
          </span>
          <v-tabs
            class="hidden-sm-and-down ml-10"
            v-model="tab"
            background-color="transparent"
            slider-color="orange"
            align-with-title
            grow
          >
            <v-tab
              :class="
                transparentAppBar
                  ? ['orange--text', 'font-weight-bold']
                  : ['green--text', 'font-weight-bold']
              "
              class="text-title"
              :to="item.route"
              v-for="(item, index) in tabs"
              :key="index"
            >
              {{ item.tabName }}
            </v-tab>
          </v-tabs>
          <div v-if="!$vuetify.breakpoint.smAndDown">
            <Lang :size="35" />
          </div>
        </v-app-bar>
        <v-divider></v-divider>
      </div>

      <div
        :style="{
          height:
            $vuetify.breakpoint.mdAndDown || $vuetify.breakpoint.smAndDown
              ? decoration.homepageMobile.height
              : decoration.homepage.height,
        }"
        class="app-banner"
        v-if="currentPathHome"
      >
        <carousel />
      </div>
    </section>

    <v-navigation-drawer
      class="hidden-sm-and-up"
      width="200"
      v-model="isDrawer"
      app
    >
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col>
            <v-card-text
              class="green--text text-center text-wrap font-weight-bold text-h6"
            >
              OTTOMAN ULUSLARARASI
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
      <v-divider></v-divider>
      <v-tabs
        vertical
        v-model="tab"
        background-color="transparent"
        active-class="makeGreen"
        slider-color="green"
        grow
      >
        <v-tab
          class="green--text text-subtitle-1"
          :to="item.route"
          v-for="(item, index) in tabs"
          :key="index"
        >
          <v-card
            :style="{ borderColor: 'green' }"
            class="green--text"
            outlined
            min-width="100"
          >
            {{ item.tabName }}
          </v-card>
        </v-tab>
      </v-tabs>

      <v-divider class="mt-10"></v-divider>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Lang from "../HomeC/Lang.vue";
import Carousel from "../Utilities/Carousel.vue";
export default {
  components: {
    Lang,
    Carousel,
  },
  props: {
    decoration: Object,
  },
  mounted() {
    let targetElement = document.getElementById("img");
    let isMobile = this.$vuetify.breakpoint.smAndDown;
    let option = {
      threshold: `${isMobile ? 0.8 : 0.9}`,
    };
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          this.transparentAppBar = false;
        } else {
          this.transparentAppBar = true;
        }
      });
    }, option);
    observer.observe(targetElement);
  },
  data() {
    return {
      isDrawer: false,
      isIntersecting: false,
      transparentAppBar: true,
      tab: null,
    };
  },
  computed: {
    currentPathHome() {
      return this.$route.path === "/";
    },
    tabs() {
      return [
        {
          tabName: `${this.$t("navbar.home")}`,
          route: "/",
        },
        {
          tabName: `${this.$t("navbar.projects")}`,
          route: "/projects",
        },

        {
          tabName: `${this.$t("navbar.blogs")}`,
          route: "/blogs",
        },
        {
          tabName: `${this.$t("navbar.about")}`,
          route: "/about",
        },
        {
          tabName: `${this.$t("navbar.contact")}`,
          route: "/contactus",
        },
      ];
    },
  },

  methods: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Questrial");
.app-banner {
  width: 100%;
  object-fit: contain;
  position: absolute;
}
#img {
  background-color: #a1c7dd;

  background-position: center;
  background-repeat: no-repeat;
  background-repeat: no-repeat;
  background-size: cover;
}

.font-title {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

.text-title {
  font-family: "Courier New", Courier, monospace;
  font-size: 1.1rem;
}

.blurred-bg {
  background: rgba(255, 255, 255, 0.548);
}

.makeGreen {
  background: rgb(181, 204, 181);
}
</style>