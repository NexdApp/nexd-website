<template>
  <div class="video-container">
    <v-container
      ><v-row justify="center" align="center" class="hidden-sm-and-down">
        <iframe
          width="80%"
          height="80%"
          src="https://www.youtube-nocookie.com/embed/0PmuLrq4Hno"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-row>
      <v-row
        justify="center"
        align="center"
        class="hidden-md-and-up"
        style="height: 60vh; background: #0c2e45;"
      >
        <iframe
          width="80%"
          height="80%"
          src="https://www.youtube-nocookie.com/embed/0PmuLrq4Hno"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> </v-row
    ></v-container>
  </div>
</template>
<style scoped>
.video-container {
  background: #0c2e45;
  height: 55vh;
}
.video-container div {
  height: 100%;
}
</style>
