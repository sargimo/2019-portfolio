<template>
  <div v-bind:class="{isActive: workActive}" class="work">
    <div class="container">
      <!-- <h1>My Work</h1> -->
      <div class="columns">
        <div class="column is-4-tablet is-12-mobile work-item">
          <img src="../assets/dcm-thumbnail.jpg" alt="DCM Lawyers website">
          <div class="content">
              <div class="text">
                  <h1>DCM Lawyers</h1>
                  <p>WordPress CMS</p>
              </div>
          </div>
        </div>
        <div class="column is-4-tablet is-12-mobile work-item">
          <img src="../assets/dcm-thumbnail.jpg" alt="DCM Lawyers website">
          <div class="content">
              <div class="text">
                  <h1>DCM Lawyers</h1>
                  <p>WordPress CMS</p>
              </div>
          </div>
        </div>
        <div class="column is-4-tablet is-12-mobile work-item">
          <img src="../assets/dcm-thumbnail.jpg" alt="DCM Lawyers website">
          <div class="content">
              <div class="text">
                  <h1>DCM Lawyers</h1>
                  <p>WordPress CMS</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
  props: {
    workActive: Boolean,
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/settings.scss";

.work {
  font-family: "Raleway", sans-serif;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 0px;
  transition: all 0.5s ease;
  z-index: 100;
  overflow: hidden;
  * {
    display: none;
  }
  h1 {
    font-weight: bold;
    font-size: 2em;
    text-transform: uppercase;
    text-align: center;
  }
  p {
    text-align: center;
  }
  .columns {
      flex-wrap: wrap;
  }
  .work-item {
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 0;
      &:hover {
          img {
              opacity: 0.3;
          }
          .content {
              opacity: 1;
              top: 30%;
          }
      }
      img {
        opacity: 1;
        display: block;
        width: 100%;
        height: auto;
        transition: .5s ease;
      }
      .content {
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
      }
      .text {
        display: flex;
        flex-direction: column;
        text-align: center;
        p {
          text-align: center;
          margin: 0 auto;
          color: $primary-colour;
          font-weight: 700;
        }
      }
  }
}
.work.isActive {
    display: flex;
    height: 80vh;
    transition: all 0.5s ease;
    * {
        display: inherit;
    }
}
</style>