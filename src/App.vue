<template>
  <div id="app">
    <v-app>
      <appbar />
      <v-content>
        <router-view></router-view>
      </v-content>
      <footerbar />
    </v-app>
  </div>
</template>

<script>
import appbar from "./components/appbar";
import footerbar from "./components/footer";
export default {
  name: "App",
  components: {
    appbar,
    footerbar,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@font-face {
  font-family: proxima-soft, sans-serif;
  src: url("./assets/Proxima Soft/proxima-nova-soft-bold-webfont.ttf")
      format("ttf"),
    url("./assets/Proxima Soft/proxima-nova-soft-medium-webfont.ttf")
      format("ttf"),
    url("./assets/Proxima Soft/proxima-nova-soft-regular-webfont.ttf")
      format("ttf"),
    url("./assets/Proxima Soft/proxima-nova-soft-semibold-webfont.ttf")
      format("ttf");
}
html,
body,
.v-application {
  font-family: ProximaNova, sans-serif !important;
}
</style>
