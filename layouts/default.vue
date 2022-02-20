<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  mounted() {
    localStorage.setItem("lang", "1");
  }
};
</script>
