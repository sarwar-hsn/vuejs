<template>
  <div>
    <v-container>
      <v-row align="center" justify="center">
        <v-col v-for="(blog, index) in blogs" :key="index">
          <GeneralCard
            @btnhandler="changeRoute(blog)"
            :cardConfig="{
              cardwidth: 300,
              imageStyle: { height: '200px', width: '300px' },
              titlePc: ['caption'],
              titleMobile: ['text-h6'],
              subtitlePc: [],
              subtitleMobile: [],
            }"
            :project="blogs[index]"
            :textInfo="blogsArray[index]"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import GeneralCard from "@/components/Utilities/GeneralCard.vue";
export default {
  props: {
    blogs: Array,
  },

  computed: {
    blogsArray() {
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
  components: {
    GeneralCard,
  },
  data() {
    return {};
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