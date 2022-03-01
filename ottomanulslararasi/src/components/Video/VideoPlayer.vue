<template>
  <div>
    <div v-for="(videoId, index) in videos" :key="index" class="ma-5">
      <youtube
        :player-width="$vuetify.breakpoint.smAndDown ? '' : '900'"
        :player-height="$vuetify.breakpoint.smAndDown ? '' : '400'"
        host="https://www.youtube-nocookie.com"
        :video-id="videoId"
      />
    </div>
  </div>
</template>



<script>
export default {
  props: {
    videos: Array,
  },
};
</script>