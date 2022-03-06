<template>
  <div>
    <BodyBlog msg=""/>
    <Footer msg=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "../components/Footer.vue";
import BodyBlog from "../components/BodyBlog.vue";

export default {
  name: 'Blog',
  components: {
    Footer,
    BodyBlog
}
}
</script>