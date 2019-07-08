<template>
  <div v-bind:class="{isActive: aboutActive}" class="about-container is-active">
    <div class="container">
      <div class="text-area">
        <h1>Oh hi there, dear reader.</h1>
        <p>I'm a recent graduate in Web Development and UX Design, putting me well on my way to become the web rockstar I was born to be.</p>
        <p>I work hard not to take myself too seriously, and find a lot of joy in creativity, learning new technologies and creating amazing experiences. I'm a very fast and eager learner with a good eye for quality and abysmal handwriting.</p>
        <p>If I'm not changing the world from my computer, you'll probably find me on my bike or playing sport. I love getting outside as a perfect counter balance to the more sedantry work flow of the developer life. </p>
        <h2 class="status">Great news. <span class="secondary">I'M AVAILABLE.</span></h2>
        <div class="contact">
          <p><a class="github" href="https://github.com/sargimo" target="_blank">
          <i class="fab fa-github"></i>
          </a></p>
          <p class="email"><i class="fas fa-envelope"></i> gsarge.inzid@gmail.com. <span class="lonely">Get in touch. I'm lonely.</span></p>
        </div>
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
  height: auto;
  max-height: 0px;
  transition: all 0.5s ease;
  // z-index: 100;
  overflow: hidden;
      @include mq ('tablet-wide') {
      background: $white;
    }
  // background: $grey;
  // * {
  //   display: none;
  // }
  .text-area {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-right: 20%;
    padding-bottom: 50px;
    @include mq ('desktop-wide') {
      margin-right: 30%;
    }
    @include mq ('desktop') {
      margin-right: 40%;
    }
    @include mq ('tablet-wide') {
      margin-left: 10%;
      margin-right: 10%
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
    @include mq ('phone-wide') {
      display: block;
      padding-left: 0;
    }
  }
  .hire-me {
    // display: none;
    position: absolute;
    bottom: -20px;
    right: -100%;
    max-height: 250px;
  }
}

.status {
  @include mq ('tablet-wide') {
    width: 100%;
    text-align: center;
  }
}
.contact {
  display: flex;
  align-items: center;
  width: 100%;
  @include mq ('tablet-wide') {
    padding-top: 20px;
    display: block;
    text-align: center;
  }
  *{
    margin: 0;
  }
}
  .github {
      align-items: center;
    i {
      font-size: 3em;
      color: $primary-colour;
      transition: all 0.5s ease;
      &:hover {
        color: $secondary-colour;
        font-size: 3.5em;
        transition: all 0.5s ease;
      }
    }
  }
  .email {
    align-self: center;
    align-items: center;
    color: $primary-colour;
    font-weight: 700;
    width: 100%;
    .email-text {
      display: flex;
      align-self: center;
    }
    i {
      margin: 0 20px;
      font-size: 3em;
      color: $primary-colour;
      padding: 20px 0;
      transition: all 0.5s ease;
      @include mq ('tablet-wide') {
        padding-right: 10px;
        margin: 0;
        display: none;
      }
    }
  }
  .lonely {
    margin-left: 40px;
    font-size: 0.8em;
    color: #d6d6d6;
    @include mq ('tablet-wide') {
      display: block;
      margin-left: 0;
      text-align: center;
      width: 100%;
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
  max-height: 800px;
  transition: all 0.5s ease;
  border-bottom: 5px solid $primary-colour;
  .hire-me {
    animation: hire-me 9s 1;
  }
  // * {
  //   display: inherit;
  // }
    @include mq("desktop") {
    max-height: 1000px;
  }
}

</style>

