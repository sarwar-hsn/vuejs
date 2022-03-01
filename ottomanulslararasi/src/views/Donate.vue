<template>
  <div>
    <Section
      :sectionConfig="{
        title: `${donateTxt.title}`,
        subtitle: null,
        titleDesign: [
          'ma-5',
          'orange--text',
          'text-h3',
          'font-weight-medium',
          'text-center',
        ],
        titleDesignMobile: [
          'orange--text',
          'text-h5',
          'font-weight-bold',
          'text-center',
        ],
        dividerDesign: {
          backgroundColor: 'orange',
          borderColor: 'orange',
          width: '40%',
        },
      }"
      minHeight="400px"
    >
      <p class="subtitle-2 mr-0">
        {{ donateTxt.subtitle }}
        <v-btn
          :to="{ name: 'contactus' }"
          class="ma-0 pb-1 ml-0 pl-0 subtitle-2"
          plain
        >
          {{ donateTxt.btn }}
        </v-btn>
      </p>
      <div
        :style="{
          margin: 'auto',
          width: '100%',
          textAlign: 'center',
        }"
        v-for="(image, index) in images"
        :key="index"
      >
        <v-img
          :max-width="$vuetify.breakpoint.smAndDown ? '100%' : '70%'"
          :style="{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '10px',
            marginBottom: '20px',
          }"
          :src="image"
        ></v-img>
      </div>
    </Section>
  </div>
</template>


<script>
import Section from "../components/Utilities/Section.vue";
export default {
  components: {
    Section,
  },
  computed: {
    donateTxt() {
      return {
        title: this.$t("donatepage").title,
        subtitle: this.$t("donatepage").subtitle,
        btn: this.$t("donatepage").btn,
      };
    },
  },

  data() {
    return {
      images: this.$store.getters.bankImages,
    };
  },
};
</script>