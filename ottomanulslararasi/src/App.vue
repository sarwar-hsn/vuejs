<template>
  <v-app>
    <SystemBar />
    <Navbar :decoration="decoration">
      <!-- <template v-slot:appbarBanner>
        <AppbarBanner />
      </template> -->
    </Navbar>

    <v-main>
      <keep-alive>
        <router-view :key="$route.fullPath"></router-view>
      </keep-alive>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
import SystemBar from "@/components/HomeC/SystemBar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    SystemBar,
    Footer,
  },
  data() {
    return {
      decoration: {
        homepageMobile: {
          height: "60vh",
          position: "relative",
          top: "90px",
          marginBottom: `${Math.ceil(
            this.$vuetify.breakpoint.height /
              (this.$vuetify.breakpoint.sm ? 3 : 5)
          ).toString()}px`,
        },
        homepage: {
          height: `auto`,
          position: "relative",
          top: "30px",
          marginBottom: `${(this.$vuetify.breakpoint.width / 3).toString()}px`,
        },
      },
    };
  },
};
</script>


