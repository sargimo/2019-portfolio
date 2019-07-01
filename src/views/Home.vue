<template>
  <div class="home">
    <Hero/>
    <Work/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Work from "@/components/Work.vue";

export default {
  name: "home",
  components: {
    Hero,
    Work
  }
};
</script>

<style lang="scss">
</style>

