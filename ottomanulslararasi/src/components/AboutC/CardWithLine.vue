<template>
  <v-card class="text-center" width="100%" outlined shaped>
    <div class="cardwithline">
      <h2 class="card-title">{{ cardConfig.title }}</h2>
      <v-card-text>
        <div class="card-line">
          <p class="card-paragraf">
            {{ cardConfig.description }}
          </p>
        </div>
      </v-card-text>
      <slot></slot>
    </div>
  </v-card>
</template>
<script>
export default {
  components: {},
  props: {
    cardConfig: Object,
  },
};
</script>

<style >
.cardwithline {
  margin-top: 1rem;
}
.card-paragraf {
  font-size: 16px;
  font-family: "Josefin Sans", sans-serif;
  color: #adadad;
  font-weight: 400;
  line-height: 26px;
  margin: 0 0 15px 0;
}
.card-paragraf {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.card-title {
  color: #000;
  font-size: 2.6rem;
  margin: 0;
  font-family: "Play", sans-serif;
  font-weight: 500;
  line-height: 1.2;
  display: block;
  margin-block-start: 0.5em;
  margin-block-end: 0.15em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.card-line {
  padding-left: 20px;
  position: relative;
}
.card-line:after {
  position: absolute;
  top: 5px;
  left: 0;
  width: 3px;
  height: 4rem;
  content: "";
  background: #f8b703;
}
</style>s