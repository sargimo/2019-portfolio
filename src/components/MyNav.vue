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
        <a
          id="0"
          @click="clickHandler"
          v-bind:class="{isActive: activeMenu[0]}"
          class="navbar-item"
        >HOME</a>
        <a
          id="1"
          @click="clickHandler"
          v-bind:class="{isActive: activeMenu[1]}"
          class="navbar-item"
        >ABOUT ME</a>
        <a
          id="2"
          @click="clickHandler"
          v-bind:class="{isActive: activeMenu[2]}"
          class="navbar-item"
        >MY WORK</a>
        <a
          id="3"
          @click.prevent="clickHandler"
          v-bind:class="{isActive: activeMenu[3]}"
          class="navbar-item"
        >CONTACT</a>
      </div>
    </div>
  </nav>
</template>

<script>
// @ is an alias to /src

export default {
  name: "MyNav",
  components: {},
  data: function() {
    return {
      activeMenu: [true, false, false, false]
    };
  },
  mounted() {},
  methods: {
    clickHandler(evt) {
      this.$emit("$menuClick", evt.target.id);
      switch (evt.target.id) {
        case "0":
          this.activeMenu = [true, false, false, false];
          break;
        case "1": {
          if (this.activeMenu[1]) {
            this.activeMenu = [true, false, false, false];
          } else {
          this.activeMenu = [false, true, false, false];
          }
          break;
        }
        case "2": {
          if (this.activeMenu[2]) {
            this.activeMenu = [true, false, false, false];
          } else {
          this.activeMenu = [false, false, true, false];
          }
          break;
        }
        case "3": {
          if (this.activeMenu[3]) {
            this.activeMenu = [true, false, false, false];
          } else {
          this.activeMenu = [false, false, false, true];
          }
          break;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/settings.scss";

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
.navbar-item.isActive {
  color: $primary-colour;
}

.navbar-end {
  margin-right: 50px;
}
.navbar-burger {
  color: $white;
}
</style>

