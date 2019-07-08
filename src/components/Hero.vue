<template>
    <div class="name">
      <h1>Sup. I'm <span class="hero-coral">Geoff Sargison.</span></h1>
      <p>Web Rockstar. Cyclist. Employable. <span class="secondary">Hilarious</span>.</p>
      <div class="hero-btns">
        <button @click="btnClick('about')" class="btn-transparent">reasons to hire me <i class="fas fa-level-down-alt"></i></button>
        <button @click="btnClick('work')" class="btn-solid">check out my work <i class="fas fa-level-down-alt"></i></button>
      </div>
    </div>
</template>

<script>
export default {
  name: "Hero",
  methods: {
    btnClick(id) {
      this.$emit("$heroButtonClicked", id);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/settings.scss';

.name {
  // max-height: 250px;
  text-align: center;
  position: absolute;
  padding: 0 20px;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Raleway', sans-serif;
  pointer-events: none;
  h1 {
    font-size: 4em;
    z-index: 2;
    pointer-events: auto;
    @include mq ('tablet-wide') {
      font-size: 3em;
    }
    @include mq ('phone') {
      font-size: 2em;
    }
  }
  p {
    font-size: 2em;
    z-index: 2;
    letter-spacing: 0.05em;
    pointer-events: auto;
       @include mq ('tablet-wide') {
      font-size: 1.5em;
    }
    @include mq ('phone') {
      font-size: 1em;
      padding-top: 20px;
    }
  }
  .secondary {
    // color: #e2f53b;
    color: $secondary-colour;
  }
  .hero-btns {
    display: flex;
    i {
      padding-left: 10px;
    }
    @include mq ('phablet') {
      flex-direction: column;
      margin-top: 10%;
      button {
        margin: 20px;
      }
    }
    @include mq ('phone') {
      button {
        padding: 20px 20px;
      }
    }
  }

  .hero-coral {
    color: $primary-colour;
    font-weight: 700;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out, transform 1.5s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>