<template>
      <transition appear name="fade" mode="out-in">
    <div class="name">
      <h1>Suhhhh. I am <span class="hero-coral">Geoff Sargison.</span></h1>
      <p>I like to ride my road bike.</p>
      <button class="work-btn">check out my work <i class="fas fa-level-down-alt"></i></button>
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
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  top: 0%;
  left: 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Raleway', sans-serif;
  h1 {
    font-size: 4em;
    z-index: 2;
  }
  p {
    font-size: 2em;
    z-index: 2;
  }
  .work-btn {
    margin-top: 20px;
    padding: 20px 40px;
    background: $secondary-colour;
    border: none;
    cursor: pointer;
    transition: all .5s ease;
    z-index: 2;
    &:hover {
      background: $white;
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