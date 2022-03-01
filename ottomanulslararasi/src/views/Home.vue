<template>
  <div class="home">
    <Section
      :sectionConfig="{
        title: `${this.$t('homepage.whatwedo.title')}`,
        subtitle:null,
        titleDesign: ['ma-5', 'orange--text', 'text-h3', 'font-weight-medium'],
        titleDesignMobile: [
          'orange--text',
          'text-h5',
          'font-weight-bold',
          'text-center',
        ],

        subtitleDesignMobile: ['subtitle-1', 'green--text'],
        dividerDesign: { backgroundColor: 'orange', borderColor: 'orange' },
      }"
      minHeight="400px"
    >
      <v-card-text class="body-1 text--secondary"
        >{{ `${this.$t("homepage.whatwedo.body")}` }}
      </v-card-text>
    </Section>

    <Section
      background="#ececec"
      :sectionConfig="{
        title: `${this.$t('homepage.photogallery.title')}`,
        subtitle: null,
        titleDesign: ['orange--text', 'text-h4', 'font-weight-medium'],
        titleDesignMobile: [
          'orange--text',
          'text-h5',
          'font-weight-bold',
          'text-center',
        ],
        dividerDesign: {
          backgroundColor: 'orange',
          borderColor: 'orange',
        },
      }"
    >
      <template>
        <Thumbnail />
      </template>
    </Section>
    <Parallex></Parallex>
    <Section
      :sectionConfig="{
        title: `${this.$t('homepage.recentProjects.title')}`,
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
      <ProjectsThumbnail />
    </Section>
    <Section
      background="#ececec"
      :sectionConfig="{
        title: `${this.$t('homepage.joinus.title')}`,
        subtitle: `${this.$t('homepage.joinus.body')}`,
        titleDesign: [
          'orange--text',
          'text-h4',
          'font-weight-medium',
          'text-center',
          'mt-15',
        ],
        titleDesignMobile: [
          'orange--text',
          'text-h5',
          'font-weight-medium',
          'text-center',
          'mt-15',
        ],
        dividerDesign: {
          borderColor: 'orange',
          background: 'orange',
          width: '10%',
        },
      }"
      minHeight="400px"
    >
    </Section>

    <Section
      :sectionConfig="{
        title: `${this.$t('homepage.recentblogs')}`,
        subtitle: null,
        titleDesign: [
          'orange--text',
          'text-h4',
          'font-weight-medium',
          'text-center',
        ],
        titleDesignMobile: ['orange--text', 'text-h5', 'font-weight-medium'],
        dividerDesign: {
          borderColor: 'orange',
          background: 'orange',
          width: '30%',
        },
      }"
    >
      <BlogsThumbnail />
    </Section>
    <Section
      background="#ececec"
      :sectionConfig="{
        title: null,
        subtitle: null,
        titleDesign: [],
        titleDesignMobile: [],
        dividerDesign: {},
      }"
      minHeight="400px"
    >
      <BlockQuote />
    </Section>
    <VideoGallery />
  </div>
</template>

<script>
import Section from "@/components/Utilities/Section.vue";
// import Carousel from "@/components/Utilities/Carousel.vue";
import Thumbnail from "@/components/HomeC/Thumbnail.vue";
import Parallex from "@/components/Utilities/Parallex.vue";
import ProjectsThumbnail from "@/components/ProjectsC/ProjectsThumbnail.vue";
import BlogsThumbnail from "@/components/BlogsC/BlogsThumbnail.vue";
import BlockQuote from "@/components/HomeC/BlockQuote.vue";
import VideoGallery from "@/components/Video/VideoGallery.vue";
export default {
  name: "Home",
  components: {
    Section,

    Thumbnail,
    Parallex,
    ProjectsThumbnail,
    BlogsThumbnail,
    BlockQuote,
    VideoGallery,
  },
  data() {
    return {
      sectionOne:
        "OTTOMAN ULUSLARARASI tackles the issues of ecology, human rights and eradication of poverty simultaneously in order to make a sustainable living possible. Our goal is to provide a sustainable life for all living beings.",
    };
  },
};
</script>


