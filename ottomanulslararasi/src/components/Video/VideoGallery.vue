<template>
  <div>
    <Section
      :sectionConfig="{
        title: `${this.$t('homepage.videogallery')}`,
        subtitle: null,
        titleDesign: [
          'ma-5',
          'orange--text',
          'text-h4',
          'font-weight-medium',
          'text-center',
        ],
        titleDesignMobile: ['orange--text', 'text-h5', 'font-weight-medium'],
        subtitleDesignMobile: [],
        dividerDesign: { backgroundColor: 'orange', borderColor: 'orange' },
      }"
    >
      <template>
        <VideoPlayer :videos="['Znv9nJ4dAgA', 'oFMQcl8bWSg', 'hmYsS6l-lnk']" />
      </template>
    </Section>
  </div>
</template>

<script>
import Section from "../Utilities/Section.vue";
import VideoPlayer from "./VideoPlayer.vue";
export default {
  props: {},
  components: {
    Section,
    VideoPlayer,
  },
};
</script>