<template>
<div @click="emitTop" class="to-top-btn">
  <i class="fas fa-angle-double-up"></i>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ToTopButton",
  components: {},
  data: function() {
    return {
    };
  },
  mounted() {},
  methods: {
    emitTop() {
      this.$emit("$GoToTop");
    }
      }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/settings.scss";

.to-top-btn {
  background: $primary-colour;;
  position: fixed;
  z-index: 10;
  bottom: 5%;
  left: 3%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(0deg);
  transition: all 0.5s ease;
  cursor: pointer;
  i {
    transition: all 0.5s ease;
    font-size: 1.8em;
  }
  border-radius: 50%;
  &:hover {
    i {
      transition: all 0.5s ease;
      color: $white;
      font-size: 2.3em;
}
  }
}

</style>

