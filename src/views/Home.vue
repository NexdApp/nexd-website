<template>
  <div>
    <intro />
    <videoTemplate />
    <howitworks />
  </div>
</template>

<script>
// @ is an alias to /src
import videoTemplate from "../components/video";
import intro from "../components/intro";
import howitworks from "../components/howitworks";
export default {
  name: "Home",
  components: {
    intro,
    videoTemplate,
    howitworks
  }
};
</script>

<style>
</style>
