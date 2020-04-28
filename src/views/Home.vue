<template>
  <div>
    <intro />
    <videoTemplate />
    <howitworks />
    <partnership />
  </div>
</template>

<script>
// @ is an alias to /src
import videoTemplate from "../components/video";
import intro from "../components/intro";
import partnership from "../components/partnership";
import howitworks from "../components/howitworks";
export default {
  name: "Home",
  components: {
    intro,
    videoTemplate,
    partnership,
    howitworks,
  },
};
</script>

<style></style>
