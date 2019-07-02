<template>
  <div class="portfolio">
    <div class="content">
      <About :aboutActive="activeSections[0]"/>
      <Work :workActive="activeSections[1]"/>
    </div>
    <div class="particles-bg">
      <div id="particles-js" class="hero-particles"></div>
      <MyNav @$menuClick="clickHandler"/>
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
      activeSections: [false, false]
      // aboutIsActive: true,
      // contactIsActive: false,
      // workIsActive: false
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
    },
    //checks to see if any of the states are active.
    //Returns true if any states are currently active.
    checkForActiveState(array) {
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          return true;
        }
      }
    },
    //deals with active states for components from nav click
    clickHandler(id) {
      let that = this;
      switch (id) {
        case "0":
          this.activeSections = [false, false];
          break;
        case "1":
          //if the clicked section is already active, minimise it
          if (that.activeSections[0]) {
            that.activeSections = [false, false];
            //else check if any state is active, if true, remove active
            //set timeout for remove period, activate new state
          } else if (that.checkForActiveState(that.activeSections)) {
            that.activeSections = [false, false];
            setTimeout(function() {
              that.activeSections = [true, false];
            }, 500);
            //else if no state is active, active clicked state
          } else {
            that.activeSections = [true, false];
          }
          break;
        case "2":
          if (that.activeSections[1]) {
            that.activeSections = [false, false];
          } else if (that.checkForActiveState(that.activeSections)) {
            that.activeSections = [false, false];
            setTimeout(function() {
              that.activeSections = [false, true];
            }, 500);
          } else {
            that.activeSections = [false, true];
          }
          break;
      }
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
  // z-index: 4;
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

