<template>
  <div class="about-container">
      <p>I AM LORD OF THE UNDERLINGS</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/settings.scss';

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
    height: 0px;
    background: green;
    transition: all 0.5s ease;
    z-index: 100;
    overflow: hidden;
    * {
        display: none;
    }
}

.about-container.is-active {
    display: flex;
    height: 50vh;
    transition: all 0.5s ease;
    * {
        display: inherit;
    }
}
</style>

