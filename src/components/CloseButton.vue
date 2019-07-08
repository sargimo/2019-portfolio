<template>
<div @click="emitClose" class="close-btn">
  <i class="fas fa-times"></i>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "CloseButton",
  components: {},
  data: function() {
    return {
    };
  },
  mounted() {},
  methods: {
    emitClose() {
      this.$emit("$closeSections");
    }
      }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/settings.scss";

.close-btn {
  background: $white;
  position: absolute;
  z-index: 5;
  top: 5%;
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
    font-size: 1.8em;
  }
  border-radius: 50%;
  &:hover {
    i {
      transition: all 0.5s ease;
      color: $primary-colour;
      transform: rotate(180deg);
    }
  }
}

</style>

