<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start"></div>

      <div class="navbar-end">
        <a class="navbar-item">HOME</a>
        <a class="navbar-item">ABOUT ME</a>
        <a class="navbar-item">MY WORK</a>
        <a class="navbar-item">CONTACT</a>
      </div>
    </div>
  </nav>
</template>

<script>
// @ is an alias to /src

export default {
  name: "MyNav",
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/settings.scss";

.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
}
.navbar-item {
  font-weight: 700;
  color: $white;
  font-size: 14px;
  margin: 50px 0 0 50px;
  &:hover {
    color: $primary-colour;
    background: transparent;
  }
}
.navbar-end {
  margin-right: 50px;
}
.navbar-burger {
  color: $white;
}
</style>

