<template>
  <div class="backImage color-b" id="intro">
    <v-row>
      <v-col cols="12" sm="4" md="4" class="pa-10 hidden-xs-only">
        <v-img
          src="../assets/iphone_mockup.png"
          class="pl-8"
          max-width="700px"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="8" class="pa-10" md="8">
        <v-row align="end">
          <v-col
            cols="12"
            class="hidden-sm-and-down"
            style="height: 30vh;"
          ></v-col>
          <v-col cols="12" class="hidden-sm-and-down">
            <div
              class="display-3 pb-4 decor"
              style="font-weight: 400; line-height: 1.6;"
            >
              Nachbarn sorgen für Nachbarn!
            </div>
            <div class="display-1" style="line-height: 1.6;">
              Nexd verbindet Hilfesuchende und Freiwillige aus der Umgebung
              –Schnell und unkompliziert.
            </div>
          </v-col>
          <v-col cols="12" class="hidden-md-and-up">
            <div class="display-2 pb-4 decor" style="font-weight: 400;">
              Nachbarn sorgen für Nachbarn!
            </div>
            <div class="headline" style="line-height: 1.6; font-weight: 500;">
              Nexd verbindet Hilfesuchende und Freiwillige aus der Umgebung
              –Schnell und unkompliziert.
            </div>
          </v-col>
          <v-col cols="12" class="hidden-xs-only">
            <v-row justify="end" class="pr-12" align="center">
              <span class="title">DEMNÄCHST</span>
              <v-col cols="3" md="2" sm="4">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-img
                      v-on="on"
                      style="cursor: pointer;"
                      src="../assets/app-store.png"
                    ></v-img>
                  </template>
                  <span>DEMNÄCHST</span>
                </v-tooltip>
              </v-col>
              <v-col cols="3" sm="4" md="2">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-img
                      style="cursor: pointer;"
                      v-on="on"
                      src="../assets/google-play-badge.png"
                    ></v-img>
                  </template>
                  <span>DEMNÄCHST</span>
                </v-tooltip>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            cols="12"
            style="height: 20vh;"
            class="hidden-sm-and-down"
          ></v-col>
          <v-col cols="12">
            <v-row>
              <v-col
                cols="12"
                class="headline pr-10 decor"
                style="font-weight: 400;"
                >Du kannst/willst Dein Haus nicht verlassen?</v-col
              >
              <v-col cols="12" class="pr-10 body-1 font-weight-regular"
                >Von einem Moment zum Nächsten können alltägliche Aufgaben zur
                Herausforderung werden –mal eben einkaufen gehen, ein Medikament
                in der Apotheke abholen, den Hund ausführen –was nun?</v-col
              >
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="px-8 pb-8" align="center">
      <v-col cols="12" sm="6" md="4" class="hidden-sm-and-down">
        <div>
          <div
            id="square"
            class="pa-10 headline"
            style="font-weight: 400; color: #fff;"
          >
            Melde dich jetzt als Tester an und sei einer der ersten Nutzer.
            <div
              @click="$vuetify.goTo('#footer', options)"
              style="
                width: 80%;
                background: #0c2e45;
                border-radius: 4px;
                color: #fff;
                cursor: pointer;
                text-align: center;
              "
              class="mt-3 pa-2"
              block
            >
              Jetzt Tester werden!
            </div>
          </div>
          <div id="triangle-up"></div>
        </div>
      </v-col>
      <v-col class="my-auto">
        <v-row style="text-align: right;" class="hidden-sm-and-down">
          <v-col
            cols="12"
            class="headline decor pb-4"
            style="font-weight: 400;"
          >
            Die Helferinnen und Helfer von Nexd sind für Sie da!
          </v-col>
          <v-col class="body-1 font-weight-regular">
            Nexd bringt Hilfesuchende und Helfende auf einer Plattform zusammen.
            Wer Unterstützung benötigt erstellt einen Auftrag auf Nexd - ganz
            einfach über die Website, per App oder die Hotline
            <br />(0721-98419016).
            <br />
            <br />Egal ob nur ein Lebensmittel oder ein gesamter Einkauf,
            freiwillige Helferinnen und Helfer sehen alle Aufträge in ihrer
            Nachbarschaft auf Nexd und erledigen sie schnell und zuverlässig.
          </v-col>
        </v-row>
        <v-row class="hidden-md-and-up">
          <v-col
            cols="12"
            class="headline decor pb-4"
            style="font-weight: 400;"
          >
            Die Helferinnen und Helfer von Nexd sind für Sie da!
          </v-col>
          <v-col class="body-1 font-weight-regular">
            Nexd bringt Hilfesuchende und Helfende auf einer Plattform zusammen.
            Wer Unterstützung benötigt erstellt einen Auftrag auf Nexd - ganz
            einfach über die Website, per App oder die Hotline
            <br />(0721-98419016).
            <br />
            <br />Egal ob nur ein Lebensmittel oder ein gesamter Einkauf,
            freiwillige Helferinnen und Helfer sehen alle Aufträge in ihrer
            Nachbarschaft auf Nexd und erledigen sie schnell und zuverlässig.
          </v-col>
          <v-col cols="12" sm="6" md="4" class="hidden-md-and-up">
            <div>
              <div
                id="square"
                class="pa-10 headline"
                style="font-weight: 400; color: #fff;"
              >
                Melde dich jetzt als Tester an und sei einer der ersten Nutzer.
                <div
                  style="
                    width: 80%;
                    background: #0c2e45;
                    border-radius: 4px;
                    color: #fff;
                    cursor: pointer;
                    text-align: center;
                  "
                  class="mt-3 pa-2"
                  @click="$vuetify.goTo('#footer', options)"
                  block
                >
                  Jetzt Tester werden!
                </div>
              </div>
              <div id="triangle-up"></div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    options: { duration: 500, offset: 0, easing: "easeInOutCubic" },
  }),
};
</script>

<style scoped>
.backImage {
  background: url("../assets/header.png") no-repeat top center;
  background-size: cover;
  width: 100%;
}
.color-b {
  color: #0c2e45;
}
#square {
  width: 100%;
  border-radius: 8px;
  background: #4ebf96;
}
#triangle-up {
  width: 0;
  height: 0;
  margin-left: 10px;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 30px solid #4ebf96;
}
.bg-color {
  background: #ebeaea;
}
.decor {
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-color: #0c2e453b;
}
</style>
