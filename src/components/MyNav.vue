<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navMenu" class="navbar-menu">
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
        <!-- <a
          id="3"
          @click.prevent="clickHandler"
          v-bind:class="{isActive: activeMenu[3]}"
          class="navbar-item"
        >CONTACT</a> -->
      </div>
    </div>
  </nav>
</template>

<script>
// @ is an alias to /src

export default {
  name: "MyNav",
  components: {},
  props: {
    whichMenuIsActive: String,
  },
  data: function() {
    return {
      activeMenu: [true, false, false, false]
    };
  },
  watch: {
    whichMenuIsActive: function(){
      let that = this;
      if (that.whichMenuIsActive == "about") {
          that.activeMenu = [false, true, false, false];
      } else if (that.whichMenuIsActive == "work") {
          that.activeMenu = [false, false, true, false];
      }
    }
  },
  async mounted() {
  //from bulma documentation
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
  },
  methods: {
    clickHandler(evt) {
      this.scrollToTop();
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
    },
    scrollToTop(){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    homeIsActive() {
      this.activeMenu = [true, false, false, false];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/settings.scss";

a {
  outline: none;
}

.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
}

.navbar-menu.is-active {
    display: inherit;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    width: 100%;
    background: transparent;
    box-shadow: none;
    margin: 0 auto;
    padding: 0;
    @include mq ('phone') {
      background-color: #fff;
      box-shadow: 0 8px 16px rgba(10,10,10,.1);
      padding: .5rem 0;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
    }
  }

@media screen and (min-width: 400px) {
  .navbar-burger {
    display: none;
  }
  .navbar-end {
    display: flex;
  }
  .navbar-menu {
    display: inherit;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    width: 100%;
    background: transparent;
    box-shadow: none;
    margin: 0 auto;
    padding: 0;
  }
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
  justify-content: center;
}
.navbar-burger {
  margin-right: 15px;
  color: $white;
  transition: all .5s ease;
  z-index: 5;
  &.is-active {
    color: $primary-colour;
  }
  &:hover {
    transform: rotate(180deg);
    transition: all 0.5s ease;
    background-color: transparent;
  }
}

</style>

