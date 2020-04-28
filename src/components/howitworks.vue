<template>
  <v-row class="pa-10" id="howitworks">
    <v-col cols="12" class="pa-6 headline decor" style="color: #4ebf96;"
      >so funktioniert es</v-col
    >
    <v-col cols="12" class="px-8 py-2">
      <v-row
        align="center"
        justify="center"
        @mouseenter="showIndex = i"
        @mouseleave="showIndex = -1"
        class="my-4"
        v-for="(item, i) in details"
        :key="i"
        style="cursor: pointer;"
      >
        <transition name="fade" mode="out-in">
          <v-col
            cols="12"
            v-if="showIndex != i"
            style="height: 100px; background: #4ebf96;"
          >
            <v-row align="center" justify="center" style="height: 100%;">
              <v-col sm="6" cols="12" md="4">
                <v-row no-gutters align="center" justify="center">
                  <v-img :src="item.icon" max-width="60"></v-img>
                  <span style="color: #fff;" class="pl-2">{{ item.name }}</span>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            v-else
            cols="12"
            style="
              text-align: center;
              background: #4ebf961a;
              color: #0c2e45;
              vertical-align: middle;
            "
          >
            <v-row
              align="center"
              no-gutters
              style="min-height: 80px;"
              justify="center"
              >{{ item.info }}</v-row
            >
          </v-col>
        </transition>
      </v-row>
    </v-col>
    <v-col class="pa-6" style="color: #0c2e45;"
      >Nexd sorgt so für eine schnelle Bereitstellung von Produkten an
      Hilfesuchende und eine Entlastung von Pflegekräften in täglichen
      Besorgungen.</v-col
    >
  </v-row>
</template>

<script>
export default {
  data: () => ({
    showIndex: -1,
    details: [
      {
        icon: require("../assets/Nexd_Website_Icons-01.png"),
        name: "Registrierung",
        info:
          "Hilfesuchende und Helfer registrieren sich oder über die App mit wenigen Klicks - schnell und kostenlos!",
      },
      {
        icon: require("../assets/Nexd_Website_Icons-02.png"),
        name: "Bestellung aufgeben",
        info:
          "Hilfesuchende erstellen in der App eine Liste oder geben diese telefonisch unter 0721-98419016 durch.",
      },
      {
        icon: require("../assets/Nexd_Website_Icons-03.png"),
        name: "Bestelllisten einsehen",
        info:
          "Helfer können diese Liste per Nexd App abrufen und die Besorgungen für die Hilfesuchende übersichtlich und schnell erledigen. Nexd kategorisiert mehrere angenommene Listen nach Produktkategorien und vereinfacht so die Besorgungen. An der Kasse zeigt die Nexd App dann wieder die separaten Listen, um die besorgten Produkte nach Hilfesuchende aufzuteilen.",
      },
      {
        icon: require("../assets/Nexd_Website_Icons-04.png"),
        name: "Bringservice",
        info:
          "Helfer legen die Tüten mit den gewüschten Produkten vor die jeweilige Haus-/Wohnungstür der Hilfesuchenden und klingeln (als Zeichen, dass die Produkte da sind). So vermeidet Nexd den direkten Kontakt zwischen Helfer und Hilfesuchende.",
      },
      {
        icon: require("../assets/Nexd_Website_Icons-05.png"),
        name: "Bezahlung",
        info:
          "Durch die Bezahlung per App/bar wird ein reibungsloser, sicherer und kontaktloser Ablauf gewährlistet.",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.decor {
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-color: #0c2e451c;
}
</style>
