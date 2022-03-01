<template>
  <div>
    <v-tab>
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-model="locale"
              tile
              text
              color="transparent"
              depressed
              v-bind="attrs"
              v-on="on"
            >
              <v-img
                :width="size"
                :height="size"
                :src="
                  locale === 'en'
                    ? require('@/assets/flaguk.png')
                    : require('@/assets/flagtr.png')
                "
              ></v-img>
              <span :class="locale === 'en' ? 'indigo--text' : 'red--text'">{{
                locale
              }}</span>
            </v-btn>
          </template>
          <v-list flat>
            <v-list-item
              v-for="(locale, index) in locales"
              :key="index"
              @click="switchLocale(locale)"
            >
              <v-img
                max-width="35"
                max-height="35"
                :src="locale === 'en' ? flags[0] : flags[1]"
              ></v-img>
              <span :class="locale === 'en' ? 'indigo--text' : 'red--text'">{{
                locale
              }}</span>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-tab>
  </div>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  props: {
    size: Number,
  },
  data: () => ({
    locales: ["en", "tr"],
    flags: [require("@/assets/flaguk.png"), require("@/assets/flagtr.png")],
  }),
  computed: {
    locale: {
      get() {
        return this.$i18n.locale;
      },
      set() {},
    },
  },
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        this.locale = locale;
      }
    },
  },
};
</script>

<style scoped>
.v-btn--icon {
  box-shadow: 0px !important;
}
</style>