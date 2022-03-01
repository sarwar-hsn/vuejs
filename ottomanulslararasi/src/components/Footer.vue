<template>
  <div class="background">
    <v-container class="myfooter pb-0 mb-0">
      <div :class="$vuetify.breakpoint.smAndDown ? 'mt-15' : 'footercols'">
        <div class="fourcols">
          <v-row>
            <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 4">
              <div
                class="columns"
                :class="$vuetify.breakpoint.smAndDown ? 'text-center' : ''"
              >
                <div class="intocolumns aboutus">
                  <div class="coltitle orange--text">
                    <h4>{{ footerAbout.title.toUpperCase() }}</h4>
                  </div>
                  <div class="coldescription">
                    <p>
                      {{ footerAbout.body }}
                      <br /><br />
                      <span class="orange--text"
                        >{{ contact.address.toUpperCase() }} : Çayırova Mahalle
                        5203 Sk. No. 12/C Çayırova, Kocaeli, Türkiye</span
                      >
                      <br />
                      <v-btn
                        text
                        target="_blank"
                        href="tel:+905050083560"
                        outlined
                        class="ml-0 mt-2 pl-0 orange--text"
                      >
                        <v-icon>mdi-phone</v-icon> +905050083560
                      </v-btn>
                      <br />
                      <v-btn
                        text
                        target="_blank"
                        href="mailto:info@ottomanuluslararasi.org"
                        outlined
                        class="ml-0 pl-0 orange--text"
                        :style="{ textTransform: 'lowercase' }"
                      >
                        <v-icon>mdi-email</v-icon>
                        info@ottomanuluslararasi.org
                      </v-btn>
                    </p>
                  </div>
                </div>
              </div>
            </v-col>
            <!-- -------- -->
            <v-col :cols="$vuetify.breakpoint.smAndDown ? 5 : 2">
              <div class="columns">
                <div
                  class="intocolumns"
                  :class="$vuetify.breakpoint.smAndDown ? 'text-center' : ''"
                >
                  <div class="coltitle menutitle">
                    <h4 class="orange--text">{{ menu.toUpperCase() }}</h4>
                  </div>
                  <div class="coldescription">
                    <ul>
                      <li class="menulist">
                        <router-link :to="tabs[0].route">
                          {{ tabs[0].tabName }}</router-link
                        >
                      </li>
                      <li class="menulist">
                        <router-link :to="tabs[1].route">
                          {{ tabs[1].tabName }}</router-link
                        >
                      </li>
                      <li class="menulist">
                        <router-link :to="tabs[2].route">
                          {{ tabs[2].tabName }}</router-link
                        >
                      </li>
                      <li class="menulist">
                        <router-link :to="tabs[3].route">
                          {{ tabs[3].tabName }}</router-link
                        >
                      </li>
                      <li class="menulist">
                        <router-link :to="tabs[4].route">{{
                          tabs[4].tabName
                        }}</router-link>
                      </li>
                      <!-- <li class="menulist">
                        <router-link :to="tabs[5].route">{{
                          tabs[5].tabName
                        }}</router-link>
                      </li> -->
                    </ul>
                  </div>
                </div>
              </div>
            </v-col>
            <!-- ---------- -->
            <v-col
              :cols="$vuetify.breakpoint.smAndDown ? 7 : 2"
              class="col4 justify-end"
            >
              <div
                class="columns"
                :class="$vuetify.breakpoint.smAndDown ? 'text-center' : ''"
              >
                <div class="intocolumns">
                  <div class="coltitle socialmedia">
                    <h4 class="orange--text">
                      {{ socialmedia.toUpperCase() }}
                    </h4>
                  </div>
                  <div class="coldescription socialmedia">
                    <v-card flat color="transparent ">
                      <div class="socialmediaitems">
                        <a
                          target="_blank"
                          class="dev"
                          href="https://twitter.com/ottomanuluslara"
                        >
                          <v-icon class="icon" color="blue">mdi-twitter</v-icon>
                        </a>
                        <a
                          target="_blank"
                          class="dev"
                          href="https://www.instagram.com/ottomanuluslararasi"
                        >
                          <v-icon class="icon" color="red lighten-1"
                            >mdi-instagram</v-icon
                          >
                        </a>
                        <a
                          target="_blank"
                          class="dev"
                          href="https://www.facebook.com/ottomanuluslararasi"
                        >
                          <v-icon class="icon" color="primary"
                            >mdi-facebook</v-icon
                          >
                        </a>
                        <a
                          target="_blank"
                          class="dev"
                          href="https://api.whatsapp.com/send?phone=905050083560"
                        >
                          <v-icon class="icon" color="green"
                            >mdi-whatsapp</v-icon
                          >
                        </a>
                        <a
                          target="_blank"
                          class="dev"
                          href="https://www.youtube.com/OttomanUluslararasi"
                        >
                          <v-icon class="icon" color="red">mdi-youtube</v-icon>
                        </a>
                      </div>
                    </v-card>
                  </div>
                </div>
              </div>
            </v-col>

            <!-- -------- -->
            <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 4">
              <div class="columns text-center">
                <div class="intocolumns">
                  <div class="coltitle">
                    <h4 class="orange--text ml-2">
                      {{ "Ottoman Uluslararasi".toUpperCase() }}
                    </h4>
                  </div>
                  <div class="coldescription">
                    <img
                      class="colimage"
                      src="@/assets/logo_white.png"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    contact() {
      let keys = Object.keys(this.$t("contactpage"));
      let values = Object.values(this.$t("contactpage"));
      let obj = {};
      for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i];
      }
      return obj;
    },
    footerAbout() {
      return this.$t("footer.aboutus");
    },
    developer() {
      return this.$t("footer.developer");
    },
    menu() {
      return this.$t("footer.menu");
    },
    socialmedia() {
      return this.$t("footer.socialmedia");
    },
    tabs() {
      return [
        {
          tabName: `${this.$t("navbar.home").toUpperCase()}`,
          route: "/",
        },
        {
          tabName: `${this.$t("navbar.projects").toUpperCase()}`,
          route: "/projects",
        },

        {
          tabName: `${this.$t("navbar.blogs").toUpperCase()}`,
          route: "/blogs",
        },
        {
          tabName: `${this.$t("navbar.about").toUpperCase()}`,
          route: "/about",
        },
        {
          tabName: `${this.$t("navbar.contact").toUpperCase()}`,
          route: "/contactus",
        },
        {
          tabName: `${this.$t("navbar.donate").toUpperCase()}`,
          route: "/donate",
        },
      ];
    },
  },
};
</script>


<style scoped>
.background {
  background: #141414;
}
.myfooter {
  background: #141414;
  display: block;
  position: relative;
  background-position: center center;
  background-size: cover;
  border-bottom: 1px solid #141414;
}
.footercols {
  padding-top: 8rem;
}
.fourcols {
  width: 100%;
  position: relative;
}
.columns {
  width: 100%;
}
.intocolumns {
  padding: 0 10px;
  margin-bottom: 2rem;
}
.coltitle {
  color: #fff;
  padding-bottom: 1rem;
  font-size: 18px;
  line-height: 1.445em;
  font-weight: 700;
}
.socialmedia h4 {
  font-size: 17px;
}
.coldescription {
  color: #c7c7c7;
  margin-bottom: 10 px;
}
.textyellow {
  color: #ffb422;
}
.colimage {
  margin-top: 1rem;
  margin-left: 1rem;
}
.myfooter .columns .intocolumns ul li a {
  text-decoration: none;
  color: #c7c7c7;
  left: 0px;
}
.myfooter .columns .intocolumns ul li {
  margin-bottom: 0.8rem;
}
ul {
  list-style-type: none;
}
.socialmedia .icon {
  margin: auto;
}
.socialmedia p {
  color: #c7c7c7;
}
.aboutus {
  padding-left: 1rem;
}
.menutitle {
  margin-left: 1rem;
  margin-bottom: 0.4rem;
}
.dev {
  text-decoration: none;
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
}
a:hover {
  color: green !important;
}
</style>s