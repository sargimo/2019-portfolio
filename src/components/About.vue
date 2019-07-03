<template>
  <div v-bind:class="{isActive: aboutActive}" class="about-container is-active">
    <div class="container">
      <div class="text-area">
        <h1>Oh hi there, dear reader.</h1>
        <p>I'm a recent graduate in Web Development and UX Design, putting me well on my way to become the web rockstar I was born to be.</p>
        <p>I work hard not to take myself too seriously, and find a lot of joy in creativity, learning new technologies and creating amazing experiences. I'm a very fast and eager learner with a good eye for quality and abysmal handwriting.</p>
        <p>If I'm not changing the world from my computer, you'll probably find me on my bike or playing sport. I love getting outside as a perfect counter balance to the more sedantry work flow of the developer life. </p>
        <h2>Great news. <span class="secondary">I'M AVAILABLE.</span></h2>
        <img class="hire-me" src="../assets/hire-me-bike.png">
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
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/settings.scss";

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
  background: url('../assets/bike-bg.png') $white;
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  top: 0;
  width: 100%;
  margin: 0 auto;
  height: 0px;
  transition: all 0.5s ease;
  // z-index: 100;
  overflow: hidden;
  // background: $grey;
  * {
    display: none;
  }
  .text-area {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-right: 20%;
        &:hover {
      .hire-me {
        // display: auto;
        // right: 110%;
        // transition: all 5s ease-in-out;
        animation: hire-me 9s 1;
      }
    }
  }
  h1 {
    color: $primary-colour;
    font-size: 2em;
    padding-top: 100px;
  }
  h2 {
    font-size: 1.6em;
  }
  .green {
    color: green;
  }
  .secondary {
    padding-left: 10px;
    color: $secondary-colour;
  }
  .hire-me {
    display: none;
    position: absolute;
    bottom: -20px;
    right: -100%;
    max-height: 250px;
  }
}

@-webkit-keyframes hire-me {
  0%   { right: -100%; }
  100% { right: 150%; }
}
@-moz-keyframes hire-me {
  0%   { right: -100%; }
  100% { right: 150%; }
}
@-o-keyframes hire-me {
  0%   { right: -100%;; }
  100% { right: 150%; }
}
@keyframes hire-me {
  0%   { right: -100%; }
  100% { right: 150%; }
}

.about-container.isActive {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 50vh;
  transition: all 0.5s ease;
  border-bottom: 5px solid $primary-colour;
  * {
    display: inherit;
  }
}

</style>

