<template>
  <div class="blogs-page">
    <v-container fluid>
      <v-row>
        <v-col cols="2">
          <div v-if="!$vuetify.breakpoint.smAndDown" class="sidebar">
            <BlogsSidebar
              :text="this.blogsText.blogsArray"
              :SideBar="sidebarBlogs"
            />
          </div>
        </v-col>
        <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 9">
          <Section
            v-if="loadedBlog"
            :sectionConfig="{
              title: `${this.blogsText.blogText.title}`,
              subtitle: null,
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
                :height="$vuetify.breakpoint.smAndDown ? 350 : 450"
                :src="loadedBlog.projectImages[0]"
                class="mb-10"
              >
              </v-img>
              <v-container v-html="this.blogsText.blogText.body" fluid>
                {{ this.blogsText.blogText.body }}
              </v-container>
              <!-- <v-container>
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
import BlogsSidebar from "@/components/BlogsC/BlogsSidebar.vue";
import Section from "../components/Utilities/Section.vue";

export default {
  components: {
    BlogsSidebar,
    Section,
  },
  created() {
    let data = this.$route.params.data;
    if (data === undefined || data === null) {
      this.loadedBlog = this.$store.getters.getBlogsById(this.$route.params.id);
    } else {
      this.loadedBlog = this.$route.params.data;
    }
    this.sidebarBlogs = this.$store.getters.getAllBlogs();
  },
  computed: {
    blogsText() {
      let array = [];
      let keys = Object.keys(this.$t("blogs"));
      keys.forEach((key) => {
        let obj = {};
        obj["id"] = key;
        Object.keys(this.$t(`blogs.${key}`)).forEach((singleKey) => {
          let temp = this.$t(`blogs.${key}.${singleKey}`);
          obj[`${singleKey}`] = temp;
        });
        array.push(obj);
      });
      array.forEach((blog) => {
        if (blog.id === this.loadedBlog.id.toString()) {
          this.loadedTextforBlog = blog;
        }
      });
      return { blogsArray: array, blogText: this.loadedTextforBlog };
    },
    share() {
      return this.$t("shareon");
    },
  },
  data() {
    return {
      loadedBlog: null,
      loadedTextforBlog: null,
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