<template>
  <div>
    <v-app-bar app color="primary" dark elevate-on-scroll>
      <v-img
        alt="nexd"
        class="shrink"
        contain
        min-width="100"
        src="../assets/logo.png"
        width="100"
        height="40"
      />

      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down" v-if="!hideElems">
        <v-btn text @click="$vuetify.goTo('#intro', options)">Über nexd</v-btn>
        <v-btn text @click="$vuetify.goTo('#howitworks', options)"
          >so funktioniert nexd</v-btn
        >
        <v-btn text @click="$vuetify.goTo('#footer', options)">Anmelden</v-btn>
      </div>
      <!-- <v-btn  href="tel:555-123-4567" text>
        <span>Hotline: 0721-98419016</span>
      </v-btn>-->
      <v-btn text v-if="hideElems" @click="$router.push('/')">
        <span>geh zurück</span>
      </v-btn>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        v-if="!hideElems"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" color="primary" app bottom temporary>
      <v-list nav>
        <v-list-item-group style="text-align: center;">
          <v-list-item
            @click="
              $vuetify.goTo('#intro', options);
              closeDrawer();
            "
          >
            <v-list-item-title>Über nexd</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="
              $vuetify.goTo('#howitworks', options);
              closeDrawer();
            "
          >
            <v-list-item-title>so funktioniert nexd</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="
              $vuetify.goTo('#footer', options);
              closeDrawer();
            "
          >
            <v-list-item-title>Anmelden</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    hideElems: false,
    options: { duration: 500, offset: 0, easing: "easeInOutCubic" },
  }),
  created() {
    this.hideElems =
      this.$route.path === "/privacy" || this.$route.imprint === "/imprint";
  },
  watch: {
    $route(newValue) {
      this.hideElems =
        newValue.path === "/privacy" || newValue.path === "/imprint";
    },
  },
  methods: {
    closeDrawer() {
      this.drawer = false;
    },
  },
};
</script>
