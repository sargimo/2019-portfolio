<template>
  <div class="home">
    <Menu/>
    <h1 class="title">Holly Johnson</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";

export default {
  name: "home",
  components: {
    Menu
  }
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  // position: relative;
  .title {
    margin: -40px;
    bottom: -10px;
    right: 50px;
    position: absolute;
    font-size: 185px;
    color: rgba(255, 255, 255, 0.4);
// font-family: 'Indie Flower', cursive;
// font-family: 'Allerta Stencil', sans-serif;
// font-family: 'Rock Salt', cursive;
// font-family: 'Love Ya Like A Sister', cursive;
// font-family: 'Bungee Inline', cursive;
// font-family: 'Faster One', cursive;
// font-family: 'Bungee Shade', cursive;
// font-family: 'Londrina Outline', cursive;
font-family: 'Montserrat Subrayada', sans-serif; //good
// font-family: 'Barrio', cursive; //good
// font-family: 'Monofett', cursive; //good
// font-family: 'Londrina Sketch', cursive;
  }
}
</style>

