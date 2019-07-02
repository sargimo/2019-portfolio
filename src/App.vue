<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<script>

</script>
<style lang="scss">
$primary-colour: #FA7268;
$secondary-colour: #4ECDC4;

html {
  width: 100vw;
  height: 100vh;
  // overflow-y: hidden;
  position: relative;
}

body {
  font-family: 'Raleway', sans-serif;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // display: flex;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
