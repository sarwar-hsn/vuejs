<template>
  <div>
    <v-container fluid>
      <v-row justify="space-between">
        <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 8">
          <ContactForm :contactObj="contact" />
        </v-col>
        <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 4">
          <v-card outlined flat color="transparent" class="text-center">
            <v-card-text class="text-h5">
              {{ contact.contactlinks }}
            </v-card-text>
          </v-card>
          <v-divider></v-divider>
          <v-container>
            <SocialMedia
              class="mt-5 mb-5"
              btnText="facebook"
              btnIcon="mdi-facebook"
              color="blue"
              goto="https://www.facebook.com/ottomanuluslararasi"
              target="_blank"
            />
            <SocialMedia
              class="mb-5"
              btnText="whatsapp"
              btnIcon="mdi-whatsapp"
              color="green"
              goto="https://api.whatsapp.com/send?phone=905050083560"
              target="_blank"
            />
            <SocialMedia
              class="mb-5"
              btnText="twitter"
              btnIcon="mdi-twitter"
              color="blue"
              goto="https://twitter.com/ottomanuluslara"
              target="_blank"
            />
            <SocialMedia
              class="mb-5"
              btnText="instagram"
              btnIcon="mdi-instagram"
              color="red"
              goto="https://www.instagram.com/ottomanuluslararasi/"
              target="_blank"
            />
            <SocialMedia
              class="mb-5"
              btnText="telegram"
              color="blue"
              goto="https://t.me/ottomanuluslararasi"
              target="_blank"
            />
            <SocialMedia
              class="mb-5"
              btnText="youtube"
              color="red"
              goto="https://www.youtube.com/OttomanUluslararasi"
              target="_blank"
            />
            <v-card outlined flat>
              <v-card-title class="body-1">
                <strong class="mr-2"
                  >{{ contact.address.toUpperCase() }} :
                </strong>
                Çayırova Mahalle 5203 Sk. No. 12/C <br />
                Çayırova ,Kocaeli , Türkiye
              </v-card-title>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactUsC/ContactForm.vue";
import SocialMedia from "@/components/ContactUsC/SocialMedia.vue";
export default {
  name: "contact-us",
  components: {
    ContactForm,
    SocialMedia,
  },

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
  },
  data() {
    return {
      facebook: "",
      whatsapp: "",
      telegram: "",
      instagram: "",
      twitter: "",
    };
  },
};
</script>
