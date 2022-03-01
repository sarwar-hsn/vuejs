<template>
  <div class="container">
    <v-card outlined flat color="transparent" class="text-center">
      <v-card-text
        :style="$vuetify.breakpoint.smAndDown ? 'font-size: 1rem' : ''"
        class="text-h4"
      >
        {{ contactObj.contact }}</v-card-text
      >
    </v-card>
    <v-divider class="mb-5"></v-divider>
    <form @submit.prevent="submit">
      <label>{{ contactObj.name }}</label>
      <input
        type="text"
        v-model="name"
        name="name"
        :placeholder="contactObj.yourname"
      />
      <label>{{ contactObj.email }}</label>
      <input
        type="email"
        v-model="email"
        name="email"
        :placeholder="contactObj.youremail"
      />
      <label>{{ contactObj.message }}</label>
      <textarea
        name="message"
        v-model="message"
        cols="30"
        rows="5"
        :placeholder="contactObj.message"
      >
      </textarea>

      <input type="submit" :value="contactObj.button" />
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: "ContactUs",
  props: {
    contactObj: Object,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submit() {
      console.log("submitted");
      const serviceID = "service_eko47tf";
      const templateID = "template_e2x9t8q";
      const userId = "user_rIrQWSR7uq8fNQALetEsT";
      emailjs.init(userId);
      emailjs
        .send(serviceID, templateID, {
          name: this.name,
          email: this.email,
          message: this.message,
        })
        .then(
          () => {
            alert("Sent!");
          },
          (err) => {
            alert(JSON.stringify(err));
          }
        );

      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

label {
  float: left;
}

input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: hsl(64, 56%, 32%);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #4caf50;
}
</style>

