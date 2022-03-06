<template>
  <div class="home">
    <Header msg=""/>
    <Footer msg=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Footer from "../components/Footer.vue";

export default {
  name: "Shop",
components: {
    Header,
    Footer
}
}
</script>

<style scoped>

</style>