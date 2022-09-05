<template>
  <v-row align="center">
    <h1>Hello and Welcome!</h1>
    <!-- <div id="app"> -->
    <p>Current Time: {{ currentDateTime() }}</p>
    <!-- </div> -->
  </v-row>
</template>

<script>
export default {
  methods: {
    currentDateTime() {
      const current = new Date();
      const date =
        current.getFullYear() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        current.getDate();
      const time =
        current.getHours() +
        ":" +
        current.getMinutes() +
        ":" +
        current.getSeconds();
      const dateTime = date + " " + time;

      return dateTime;
    },
  },
};
</script>
