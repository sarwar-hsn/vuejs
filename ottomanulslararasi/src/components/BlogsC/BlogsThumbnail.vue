<template>
  <div>
    <v-container>
      <v-row align="center" justify="center">
        <v-col :cols="$vuetify.breakpoint.smAndDown ? 10 : 7">
          <GeneralCard
            @btnhandler="changeRoute(blogs[0])"
            :cardConfig="{
              cardwidth: `${$vuetify.breakpoint.smAndDown ? 300 : 600}`,
              imageStyle: {
                width: '100%',
                height: 'auto',
              },
              titlePc: ['text-h6'],
              titleMobile: ['text-h6'],
              subtitlePc: [],
              subtitleMobile: [],
            }"
            :project="blogs[0]"
            :textInfo="blogsTextArray[0]"
          />
        </v-col>

        <v-col :cols="$vuetify.breakpoint.smAndDown ? 10 : 3">
          <div class="mb-2" v-for="i in 3" :key="i">
            <VerticalCard
              @btnhandler="changeRoute(blogs[i])"
              class="swr"
              :cardConfig="{
                cardWidthMobile: 300,
                cardWidthPc: 400,
                imageStyle: { height: 90, width: 150 },
                titlePc: ['text-h6'],
                titleMobile: ['text-h6'],
                subtitlePc: [],
                subtitleMobile: [],
              }"
              :project="blogs[i]"
              :textInfo="blogsTextArray[i]"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import VerticalCard from "@/components/Utilities/VerticalCard.vue";
import GeneralCard from "@/components/Utilities/GeneralCard.vue";
export default {
  components: {
    VerticalCard,
    GeneralCard,
  },
  data() {
    return {
      blogs: this.$store.getters.blogs,
    };
  },
  computed: {
    blogsTextArray() {
      let blogsArray = [];
      let keys = Object.keys(this.$t("blogs"));
      keys.forEach((key) => {
        let obj = {};
        Object.keys(this.$t(`blogs.${key}`)).forEach((singleKey) => {
          let temp = this.$t(`blogs.${key}.${singleKey}`);
          obj[`${singleKey}`] = temp;
        });
        blogsArray.push(obj);
      });
      return blogsArray;
    },
  },
  methods: {
    changeRoute(blog) {
      this.$router.push({
        name: "blogsdetail",
        params: { id: blog.id, data: blog },
      });
    },
  },
};
</script>


<style scoped>
.swr {
  display: inline-block;
}
</style>