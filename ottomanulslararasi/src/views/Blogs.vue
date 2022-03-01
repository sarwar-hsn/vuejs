<template>
  <div class="blogs-page">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 12">
          <Section
            :sectionConfig="{
              title: `${blogsTitle}`,
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
            <BlogsGridView :blogs="blogs" />
          </Section>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Section from "../components/Utilities/Section.vue";
import BlogsGridView from "../components/BlogsC/BlogsGridView.vue";
export default {
  components: {
    Section,
    BlogsGridView,
  },
computed: {
    blogsTitle() {
      let temp = this.$t("navbar");
      return this.$t(temp.blogs);
    },
  },
  data() {
    return {
      blogs: this.$store.getters.blogs,
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