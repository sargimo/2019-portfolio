<template>
  <div class="portfolio">
    <div class="content">
      <About key="about" v-if="aboutIsActive"/>
      <Work key="work" v-if="workIsActive"/>
    </div>
    <div class="particles-bg">
      <div id="particles-js" class="hero-particles"></div>
      <MyNav/>
      <Hero/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import particlesConfig from "@/assets/particlesjs-config.json";
import Hero from "@/components/Hero.vue";
import Work from "@/components/Work.vue";
import MyNav from "@/components/MyNav.vue";
import About from "@/components/About.vue";

export default {
  name: "home",
  components: {
    Hero,
    Work,
    MyNav,
    About
  },
  data: function() {
    return {
      heroIsActive: true,
      aboutIsActive: true,
      contactIsActive: false,
      workIsActive: false
    };
  },
  mounted() {
    require("particles.js");
    this.$nextTick(() => {
      this.initParticlesJS();
    });
  },
  methods: {
    initParticlesJS() {
      /* eslint-disable */
      particlesJS("particles-js", particlesConfig);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/settings.scss";

.content {
  margin: 0;
}

.particles-bg {
  // display: flex;
  // flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
  font-family: "Raleway", sans-serif;
  overflow: scroll;
}
.hero-particles {
  height: 100vh;
  width: 100%;
  background: $grey;
  color: #fff;
  // position: absolute;
  top: 0;
  left: 0;
  // z-index: -1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out, transform 1.5s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

