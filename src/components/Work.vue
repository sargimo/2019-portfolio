<template>
  <div v-bind:class="{isActive: workActive}" class="work">
    <!-- <div class="container"> -->
    <!-- <h1>My Work</h1> -->
    <div class="columns is-mobile">
      <div @click="projectClicked('0')" class="column is-4-desktop is-12-tablet is-12-mobile work-item">
        <img src="../assets/dcm-thumbnail2.jpg" alt="DCM Lawyers website">
        <div class="content">
          <div class="text">
            <h1>DCM Lawyers</h1>
            <p>PHP WordPress CMS</p>
          </div>
        </div>
        <div class="btn">
          <button class="btn-inverted">see more</button>
        </div>
      </div>
      <div @click="projectClicked('1')" class="column is-4-desktop is-12-tablet is-12-mobile work-item">
        <img src="../assets/drivr-thumbnail.jpg" alt="Drivr App showcase">
        <div class="content">
          <div class="text">
            <h1>Drivr</h1>
            <p>JavaScript Travel Companion</p>
          </div>
        </div>
        <div class="btn">
          <button class="btn-inverted">see more</button>
        </div>
      </div>
      <div @click="projectClicked('2')" class="column is-4-desktop is-12-tablet is-12-mobile work-item">
        <img src="../assets/welly-music-thumbnail.jpg" alt="Welly music website showcase">
        <div class="content">
          <div class="text">
            <h1>Wellington Music</h1>
            <p>VueJS & GoogleMaps API Music Guide</p>
          </div>
        </div>
        <div class="btn">
          <button class="btn-inverted">see more</button>
        </div>

        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
  props: {
    workActive: Boolean
  },
  methods: {
    projectClicked(id) {
      this.$emit("$projectClicked", id);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/settings.scss";

.work {
  font-family: "Raleway", sans-serif;
  bottom: 0;
  width: 100%;
  height: auto;
  max-height: 0px;
  transition: all 0.5s ease;
  z-index: 100;
  overflow: hidden;
  h1 {
    font-weight: bold;
    font-size: 2em;
    text-transform: uppercase;
    text-align: center;
    @include mq ('desktop') {
      font-size: 1.5em;
      color: $white;
    }
    @include mq ('bulma-tablet-wide') {
      font-size: 2.5em;
    }
    @include mq ('phablet') {
      font-size: 2em;
    }
    // @include mq ('phone-wide') {
    //   font-size: 0.8em;
    // }
  }
  p {
    text-align: center;
    margin: 0 auto;
    color: $primary-colour;
    font-weight: 700;
    font-size: 24px;
    @include mq ('desktop') {
      font-size: 18px;
    }
    @include mq ('bulma-tablet-wide') {
      font-size: 24px;
    }
    @include mq ('phablet') {
      font-size: 18px;
    }
    // @include mq ('phone-wide') {
    //   font-size: 10px;
    // }
  }
  .columns {
    flex-wrap: wrap;
  }
  .work-item {
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    padding: 0;
    cursor: pointer;
    &:hover {
      img {
        opacity: 0;
        @include mq ('tablet-wide') {
        opacity: 1;
        }
      }
      .content {
        opacity: 1;
        top: 40%;
        @include mq ('desktop') {
          top: 50%;
        }
      }
      .btn {
        opacity: 1;
        bottom: 25%;
      }
      h1 {
        color: $grey;
      }
      @include mq ('1700') {
        .btn {
          bottom: 10%;
        }
      }
      @include mq ('desktop-wide') {
        .btn {
          bottom: 10%;
        }
    }
    }
    img {
      opacity: 1;
      // display: block;
      width: 100%;
      height: auto;
      transition: 0.5s ease;
      @include mq ('tablet-wide') {
        filter: brightness(40%);
      }
    }
    .content {
      transition: 0.5s ease;
      opacity: 0;
      flex-direction: column;
      position: relative;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      text-align: center;
      @include mq ('tablet-wide') {
        opacity: 1;
        top: 40%;
      }
      @include mq ('tablet') {
        top: 45%;
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    .btn {
      transition: 0.5s ease;
      opacity: 0;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      text-align: center;
      .btn-inverted {
        font-size: 18px;
      }
      @include mq ('desktop') {
        display: none;
      }
      @include mq ('bulma-tablet-wide') {
        display: initial;
        opacity: 1;
        bottom: 30%;
      }
      @include mq ('tablet') {
        display: none;
      }
    }
    .btn-inverted {
      @include mq ('bulma-tablet-wide') {
        padding: 10px 40px;
        background: $secondary-colour;
        color: $white;
      }
    }
  }
}
.work.isActive {
  display: flex;
  // height: auto;
  max-height: 800px;
  transition: all 0.5s ease-in-out;
  border-bottom: 5px solid $primary-colour;
  // * {
  //     opacity: 1;
  // }
  @include mq("desktop") {
    max-height: 3000px;
    transition: all 1s ease-in-out;
  }
}
</style>