<template>
  <v-row class="px-10" align="center" justify="center">
    <v-col cols="12" class="px-6 headline" style="color:#4EBF96"
      >Sponsoren & Partner</v-col
    >
    <v-col cols="12" class="pb-10">
      <v-card outlined>
        <v-carousel cycle hide-delimiters show-arrows-on-hover height="400">
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-row class="fill-height" align="center" justify="center">
              <v-col md="3" sm="12" v-for="(icon, j) in slide.icons" :key="j">
                <v-row align="center" justify="center">
                  <v-img
                    :src="icon.src"
                    max-width="200"
                    max-height="150"
                    contain
                  ></v-img>
                </v-row>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          icons: [
            { src: require("../assets/LogosPartners/IMG0062.png") },
            { src: require("../assets/LogosPartners/IMG0063.png") },
            { src: require("../assets/LogosPartners/IMG0064.jpg") },
          ],
        },
        {
          icons: [
            { src: require("../assets/LogosPartners/IMG0065.jpg") },
            { src: require("../assets/LogosPartners/IMG0066.png") },
            { src: require("../assets/LogosPartners/IMG0067.png") },
          ],
        },
        {
          icons: [
            { src: require("../assets/LogosPartners/IMG0068.png") },
            { src: require("../assets/LogosPartners/IMG0069.png") },
            { src: require("../assets/LogosPartners/IMG0070.jpg") },
          ],
        },
        {
          icons: [
            { src: require("../assets/LogosPartners/solution-enabler.png") },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
