<template>
  <div class="section work">
    <div class="container">
      <h1>My Work</h1>
      <div class="columns">
        <div class="column is-half work-item">
          <img src="../assets/dcm-thumbnail.jpg" alt="DCM Lawyers website">
          <div class="content">
              <div class="text">
                  <h1>DCM Lawyers</h1>
                  <p>WordPress CMS</p>
              </div>
          </div>
        </div>
        <div class="column is-half work-item">
          <img src="../assets/dcm-thumbnail.jpg" alt="DCM Lawyers website">
          <div class="content">
              <div class="text">
                  <h1>DCM Lawyers</h1>
                  <p>WordPress CMS</p>
              </div>
          </div>
        </div>
        <div class="column is-half work-item">
          <img src="../assets/dcm-thumbnail.jpg" alt="DCM Lawyers website">
          <div class="content">
              <div class="text">
                  <h1>DCM Lawyers</h1>
                  <p>WordPress CMS</p>
              </div>
          </div>
        </div>
        <div class="column is-half work-item">
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
  methods: {}
};
</script>

<style lang="scss">
.work {
  font-family: "Raleway", sans-serif;
  width: 50%;
  padding: 100px 0;
  h1 {
    font-weight: bold;
    font-size: 2em;
    text-transform: uppercase;
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
              top: 50%;
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
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
      }
  }
}
</style>