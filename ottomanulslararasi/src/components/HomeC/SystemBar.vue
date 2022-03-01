<template>
  <v-system-bar window dark app height="30" class="mr-10">
    <v-spacer></v-spacer>

    <Icons
      :btnConfig="{
        url: 'https://api.whatsapp.com/send?phone=905050083560',
        icon: 'mdi-whatsapp',
        color: 'white',
      }"
    />
    <Icons
      :btnConfig="{
        url: 'https://www.instagram.com/ottomanuluslararasi',
        icon: 'mdi-instagram',
        color: 'white',
      }"
    />

    <Icons
      :btnConfig="{
        url: 'https://www.facebook.com/ottomanuluslararasi',
        icon: 'mdi-facebook',
        color: 'white',
      }"
    />
    <Icons
      :btnConfig="{
        url: 'https://www.youtube.com/OttomanUluslararasi',
        icon: 'mdi-youtube',
        color: 'white',
      }"
    />
    <Icons
      :btnConfig="{
        url: 'https://twitter.com/ottomanuluslara',
        icon: 'mdi-twitter',
        color: 'white',
      }"
    />
    <div v-if="$vuetify.breakpoint.smAndDown">
      <Lang :size="30" />
    </div>
  </v-system-bar>
</template>


<script>
import Lang from "../HomeC/Lang.vue";
import Icons from "@/components/HomeC/Icons.vue";
export default {
  components: {
    Icons,
    Lang,
  },
};
</script>