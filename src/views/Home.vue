<template>
  <div class="portfolio">
    <div class="content">
      <CloseButton @$closeSections="closeSections"/>
      <About :aboutActive="activeSections[0]"/>
      <Work @$projectClicked="showProject" :workActive="activeSections[1]"/>
    </div>
    <div class="particles-bg">
      <div id="particles-js" class="hero-particles"></div>
      <MyNav ref="nav" @$menuClick="clickHandler"/>
      <Hero/>
      <transition name="fade" mode="out-in">
        <DcmLawyers v-if="activeProjects[0]"/>
      </transition>
      <transition name="fade" mode="out-in">
        <ToTopButton @$GoToTop="toTop" v-if="toTopActive"/>
      </transition>
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
import CloseButton from "@/components/CloseButton.vue";
import DcmLawyers from "@/components/DcmLawyers.vue";
import ToTopButton from "@/components/ToTopButton.vue";

export default {
  name: "home",
  components: {
    Hero,
    Work,
    MyNav,
    About,
    CloseButton,
    DcmLawyers,
    ToTopButton
  },
  data: function() {
    return {
      activeSections: [false, false],
      //refactor this
      dcmIsActive: false,
      drivrIsActive: false,
      wellyMusicIsActive: false,
      activeProjects: { 0: false, 1: false, 2: false },
      toTopActive: false
      // aboutIsActive: true,
      // contactIsActive: false,
      // workIsActive: false
    };
  },
  //   watch: {
  //     activeProjects: function(){
  //       toTopActive = true;
  // },
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
    toTop(){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      this.toTopActive = false;
      this.activeProjects = { 0: false, 1: false, 2: false };
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
    },
    closeSections() {
      let nav = this.$refs.nav;
      this.clickHandler("0");
      nav.homeIsActive();
    },
    showProject(id) {
      //refactor this
      let that = this;
      this.activeProjects = { 0: false, 1: false, 2: false };
      this.toTopActive = false;
      // this.dcmIsActive = false;
      // this.drivrIsActive = false;
      // this.wellyMusicIsActive = false;
      switch (id) {
        case "0":
          this.activeProjects = { 0: true, 1: false, 2: false };
          //if it goes into a case, button will always be true
          this.toTopActive = true;
          break;
        case "1":
          this.activeProjects = { 0: false, 1: true, 2: false };
          this.toTopActive = true;
          break;
        case "2":
          this.activeProjects = { 0: false, 1: false, 2: true };
          this.toTopActive = true;
          break;
      }
      that.scrollToProject();
      //double length of time of closing the top section for smooth scrolling experience
      setTimeout(function() {
        that.closeSections();
      }, 1000);
    },
    scrollToProject() {
      setTimeout(function() {
        document.getElementById("projectStart").scrollIntoView();
      }, 500);
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
  z-index: 6;
  // overflow: scroll;
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
  transition: opacity 2s ease-in-out, transform 2s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

