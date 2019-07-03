<template>
      <transition appear name="fade" mode="out-in">
    <div class="name">
      <h1>Sup. I'm <span class="hero-coral">Geoff Sargison.</span></h1>
      <p>Web Developer. Cyclist. Employable. <span class="secondary">Hilarious</span>.</p>
      <div class="hero-btns">
        <button class="btn-transparent">reasons to hire me <i class="fas fa-level-down-alt"></i></button>
        <button class="btn-solid">check out my work <i class="fas fa-level-down-alt"></i></button>
      </div>
    </div>
      </transition>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/settings.scss';

.name {
  // max-height: 250px;
  text-align: center;
  position: absolute;
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
  }
  p {
    font-size: 2em;
    z-index: 2;
    letter-spacing: 0.05em;
    pointer-events: auto;
  }
  .secondary {
    // color: #e2f53b;
    color: $secondary-colour;
  }
  .hero-btns {
    display: flex;
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