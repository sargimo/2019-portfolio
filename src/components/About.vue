<template>
  <div v-bind:class="{isActive: aboutActive}" class="about-container is-active">
    <div class="container">
      <div class="tabs is-centered">
        <ul>
          <li @click="swapList" class="tabs-item" v-bind:class="{'is-active': personalActive}">
            <a>Personal</a>
          </li>
          <li @click="swapList" class="tabs-item" v-bind:class="{'is-active': skillsActive}">
            <a>Skills</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "About",
  props: {
    aboutActive: Boolean,
  },
  data: function(){
      return {
          personalActive: true,
          skillsActive: false
      }
  },
  methods: {
      swapList() {
          if (this.personalActive) {
              this.personalActive = false;
              this.skillsActive = true;
          } else {
              this.personalActive = true;
              this.skillsActive = false;
          }
      }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/settings.scss";

p {
  font-size: 100px;
  color: $white;
}
// .about-me {
//   width: 100%;
//   height: 100%;
//   text-align: center;
//   top: 0;
//   left: 0;
//   color: #fff;
//   display: flex;
//   font-family: 'Raleway', sans-serif;
// Grow from top
.about-container {
  // display: none;
  position: relative;
  top: 0;
  width: 100%;
  margin: 0 auto;
  height: 0px;
  transition: all 0.5s ease;
  z-index: 100;
  overflow: hidden;
  background: $grey;
  * {
    display: none;
  }
  .tabs {
      width: 100%;
  }
  .tabs-item.isActive {
      color: $white;
  }
}

.about-container.isActive {
  display: flex;
  align-items: flex-start;
  height: 50vh;
  transition: all 0.5s ease;
  * {
    display: inherit;
  }
}

</style>

