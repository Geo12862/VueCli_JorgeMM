<template>
  <div class="">
    <BodyShop msg=""/>
    <Footer msg=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import BodyShop from "@/components/BodyShop";
import Footer from "../components/Footer";

export default {
  name: "Shop",
components: {
    BodyShop,
    Footer
}
}
</script>

<style scoped>

</style>