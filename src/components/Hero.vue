<template>
  <div class="home-hero">
    <div id="particles-js" class="hero-particles"></div>
    <div class="name">
      <h1>Suhhhh. I am Geoff Sargison</h1>
      <p>I like to ride my road bike.</p>
      <button class="work-btn">check out my work <i class="fas fa-level-down-alt"></i></button>
    </div>
  </div>
</template>

<script>
import particlesConfig from "../assets/particlesjs-config.json";
export default {
  name: "Hero",
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

<style lang="scss">
.home-hero {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: 'Raleway', sans-serif;
}
.hero-particles {
  height: 100vh;
  width: 100vw;
  background: #252934;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
}
.name {
  position: relative;
  text-align: center;
  top: 0;
  left: 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Raleway', sans-serif;
  h1 {
    font-size: 4em;
  }
  p {
    font-size: 2em;
  }
  .work-btn {
    margin-top: 20px;
    padding: 20px 40px;
  }
}
</style>