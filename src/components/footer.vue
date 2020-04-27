<template>
  <v-row justify="center" id="footer" style="background: #4ebf96;">
    <v-col
      cols="12"
      md="6"
      class="pa-12 display-2 decor"
      style="color: #fff; font-weight: 600;"
      >registriere dich bei nexd</v-col
    >
    <v-col cols="12" md="6" class="pa-12">
      <v-row justify="center" class="color-b" align="center">
        <v-col cols="12">
          Jeder kann Erledigungen über nexd aufgeben oder ausführen. Jetzt
          registrieren und bald einer der ersten Nutzer sein!
        </v-col>
        <v-col cols="12" class="pr-12">
          <div class="subtitle-1" style="font-weight: 600;">E-Mail Adresse</div>
          <div>
            <input
              class="pa-1"
              dense
              hide-details
              v-model="email"
              @input="isEmailValid()"
              style="background: #0c2e455e; outline: none; width: 60%;"
            />
          </div>
          <div class="pt-4">
            <v-btn
              color="#0C2E45"
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
    <v-col class="pl-6" cols="6">
      <v-img
        alt="nexd"
        class="shrink"
        contain
        min-width="80"
        src="../assets/logo.png"
        width="80"
        height="40"
      />
    </v-col>
    <v-col cols="6">
      <v-row justify="end" class="pr-6">
        <v-btn block text dark @click="$router.push('/imprint')"
          >Impressum</v-btn
        >
        <v-btn block text dark @click="$router.push('/privacy')"
          >Datenschutzerklärung</v-btn
        >
      </v-row>
    </v-col>
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
export default {
  data: () => ({
    email: "",
    emailIsValid: false,
  }),
  methods: {
    isEmailValid() {
      /*eslint-disable */
      let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.emailIsValid = reg.test(this.email);
    }
  }
};
</script>
