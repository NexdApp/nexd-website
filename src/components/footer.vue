<template>
  <v-row justify="center" id="footer" style="background:#4EBF96">
    <v-col
      cols="12"
      md="6"
      class="pa-12 display-2 decor"
      style="color:#fff; font-weight:600"
      >registriere dich bei nexd</v-col
    >
    <v-col cols="12" md="6" class="pa-12">
      <v-row justify="center" class="color-b" align="center">
        <v-col cols="12">
          Jeder kann Erledigungen über nexd aufgeben oder ausführen. Jetzt
          registrieren und bald einer der ersten Nutzer sein!
        </v-col>
        <v-col cols="12" class="pr-12">
          <div class="subtitle-1" style="font-weight:600">E-Mail Adresse</div>
          <div>
            <input
              class="pa-1"
              dense
              hide-details
              v-model="email"
              @input="isEmailValid()"
              style="background:#0c2e455e; outline:none; width: 60%"
            />
          </div>
          <div class="pt-4">
            <v-btn
              color="#0C2E45"
              @click="submitEmail"
              :disabled="!emailIsValid"
              small
              depressed
              dark
              >TEILNEHMEN</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col sm="6" cols="12">
      <v-row justify="center" class="hidden-sm-and-up" align="center">
        <v-img
          alt="nexd"
          class="shrink"
          contain
          min-width="80"
          src="../assets/logo.png"
          width="80"
          height="40"
        />
      </v-row>
      <v-row class="pl-6 hidden-xs-only">
        <v-img
          alt="nexd"
          class="shrink"
          contain
          min-width="80"
          src="../assets/logo.png"
          width="80"
          height="40"
        />
      </v-row>
    </v-col>
    <v-col cols="12" sm="6">
      <v-row justify="end" class="pa-2">
        <v-col sm="6" cols="12">
          <v-btn block text dark @click="$router.push('/imprint')"
            >Impressum</v-btn
          >
        </v-col>
        <v-col sm="6" cols="12">
          <v-btn block text dark @click="$router.push('/privacy')"
            >Datenschutzerklärung</v-btn
          >
        </v-col>
      </v-row>
    </v-col>
    <v-snackbar v-model="snackbar" color="#0C2E45" timeout="6000">
      <span class="title">{{ message }}</span>
      <v-btn color="#fff" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-row>
</template>

<style scoped>
.color-b {
  color: #0c2e45;
}
.decor {
  text-decoration: underline;
  text-decoration-color: rgba(255, 255, 255, 0.39);
  color: #0c2e455e;
}
</style>

<script>
import axios from "axios";
export default {
  data: () => ({
    email: "",
    snackbar: false,
    message: "",
    emailIsValid: false,
  }),
  methods: {
    async submitEmail() {
      await axios
        .get(
          "/.netlify/functions/mailchimp?email=" +
            this.email
        )
        .then((response) => {
          if (
            response &&
            response.statusCode &&
            response.statusCode === 200 &&
            response.body &&
            response.body.status &&
            response.body.status === "subscribed"
          ) {
            this.message =
              "Sie haben sich jetzt als Tester für Nexd registriert";
          } else {
            this.message = "Ups! Irgendwas lief schief";
          }
        })
        .catch(() => {
          this.message = "Ups! Irgendwas lief schief";
        });
      this.snackbar = true;
      this.email = "";
    },
    isEmailValid() {
      /*eslint-disable */
      let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.emailIsValid = reg.test(this.email);
    },
  },
};
</script>
