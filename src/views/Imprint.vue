<template>
  <v-row
    class="imprint"
    style="width: 100%; padding-left: 20px;"
    align="center"
    justify="start"
  >
    <v-col style="font-size: 24px;">
      <h1
        style="
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          display: block;
          margin: 0;
          padding: 0;
          color: #4ebf96;
          font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif;
          font-size: 40px;
          font-style: normal;
          font-weight: bold;
          line-height: 150%;
          letter-spacing: normal;
          text-align: left;
          box-sizing: border-box !important;
        "
      >
        <span
          style="
            color: #4ebf96;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box !important;
          "
          >Impressum</span
        >
      </h1>
      <h3
        style="
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          display: block;
          margin: 0;
          padding: 0;
          color: #4ebf96;
          font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif;
          font-size: 26px;
          font-style: normal;
          font-weight: bold;
          line-height: 150%;
          letter-spacing: normal;
          text-align: left;
          box-sizing: border-box !important;
        "
      >
        <span
          style="
            color: #4ebf96;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box !important;
          "
          >nexd–Projekt (vormals wirfüruns)</span
        >
      </h3>
      <div class="imprint-address">
        <p>Gemeinnütziger Sozialfonds e.V.</p>
        <p>1. Vorstand Bertram Böhm</p>
        <p>Untere Hauptstraße 2</p>
        <p>85386 Eching</p>
        <p>Tel. 089/32714713</p>
        <p>Fax. 089/32714714</p>
        <p><br />Finanzamt Freising: Steuernummer 115/108/60170</p>
        <p>Amtsgericht Freising: VR 666</p>
        <p><br />Verantwortlicher im Sinne des § 55 Abs. 2 RStV:</p>
        <p>
          Dominic Hochberg, Türkenstr. 97, 80799 München, e-Mail: mail@nexd.app
        </p>
        <p>
          <br />Spendenkonto: Freisinger Sparkasse, IBAN: DE25 7005 1003 0000
          1118 31
        </p>
        <p>Verwendungszweck: nexd–Projekt (wirfüruns)</p>
      </div>
      <div class="imprint-text">
        <p>
          <span
            >Online-Plattform zur außergerichtlichen Streitschlichtung sowie
            Hinweis nach § 36 VSBG</span
          >
        </p>
        <p>
          Als Online-Unternehmen weisen wir alle Nutzer, die Verbraucher sind,
          auf die Plattform zur Online-Streitbeilegung (OS-Plattform) der
          Europäischen Kommission hin. Diese OS-Plattform ist über erreichbar
          über: Https://webgate.ec.europa.eu/odr. Wir nehmen an einem
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          nicht teil.
        </p>
      </div>
      <div class="imprint-legal">
        <p>
          <span>Haftungsausschluss für Inhalte und Verlinkung</span>
        </p>
        <p>
          Alle Angaben und Daten wurden nach bestem Wissen erstellt. Wir
          übernehmen keine Gewähr für deren Vollständigkeit und Richtigkeit. Der
          Gemeinnützige Sozialfonds e.V. hat keinerlei Einfluss auf die aktuelle
          und zukünftige Inhalte von per Link verknüpften externen Seiten.
          Deshalb distanziert sich der Verein ausdrücklich von allen Inhalten
          aller gelinkten Seiten
        </p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>
<style>
.imprint .imprint-address p {
  margin-bottom: 0;
  font-size: 18px;
}

.imprint h3 {
  font-size: 18px;
}

.imprint .imprint-text p {
  font-size: 18px;
  margin-top: 20px;
}

.imprint .imprint-legal {
  font-size: 18px;
  margin-top: 20px;
}
.imprint .imprint-legal span,
.imprint .imprint-text span {
  font-weight: 600;
}
</style>
