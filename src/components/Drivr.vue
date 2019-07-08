<template>
  <div id="projectStart" class="dcm-showcase">
    <div class="container">
      <div class="title">
        <div class="text">
          <h1>Drivr</h1>
          <h3>Pure JavaScript Travel Companion</h3>
          <!-- <h4>Case Study</h4> -->
        </div>
      </div>
      <div class="highlight">
        <img src="../assets/drivr-images/drivr-hero.jpg" alt="Presentation of Drivr App screens">
        <button class="btn-solid">
          <a href="https://drivr.netlify.com/" target="_blank">visit website</a>
        </button>
      </div>
      <div class="content">
        <p>Drivr is a web app created intended to help tourists and locals alike plan a road trip around our beautiful country of New Zealand. All you have to do is enter the length of your trip, choose a vehicle, plan your route, and Drivr will output all of your estimated costs from fuel and car rental as well as give you directions on a map interface.</p>
        <p>
          Drivr was built with pure
          <span class="emphasis">JavaScript</span> with <span class="emphasis">Leaflet Maps</span>, and includes some of the following features:
        </p>
        <ul class="features">
          <li>Automatic route calculation and full route customisation through <span class="emphasis">Leaflet Routing Machine</span>.</li>
          <li>Dynamic calculations of all costs and statistics. Change your route, vehicle, or any other aspect of your trip and all calculations and costs are dynamically updated.</li>
          <li><span class="emphasis">JSON data</span> stores everything you need to know about 12 vehicles. Seats, engine size, fuel economy, doors, boot size, and rental cost.</li>
          <li>Extensibility to import API data for car rental.</li>
          <li>UX and usability focussed.</li>
        </ul>
      </div>
    </div>
    <div class="columns is-mobile screenshots">
      <div class="column is-12">
        <img src="../assets/drivr-images/drivr-showcase.jpg" alt="showcase of multiple screens for drivr app">
        <div class="columns is-mobile">
          <div class="column is-6">
            <img src="../assets/drivr-images/drivr-showcase2.jpg" alt="showcase of drivr map screen">
          </div>
          <div class="column is-6">
            <img src="../assets/drivr-images/drivr-showcase3.jpg" alt="showcase of route planning on ipad">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Drivr",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/settings.scss";


#projectStart {
  @include mq ('tablet-wide') {
    padding-left: 20px;
    padding-right: 20px;
  }
}
.title {
  color: $grey;
  position: absolute;
    @include mq ('tablet') {
    position: static;
  }
  @include mq('tablet-wide') {
    margin-left: 5%;
  }
  .text {
    position: relative;
        @include mq ('desktop') {
        max-width: 70%;
    }
  }
  h1 {
    margin-top: 100px;
    font-size: 1em;
    font-weight: 700;
    @include mq ('tablet') {
      font-size: 0.8em;
    }
  }
  h3 {
    color: $primary-colour;
    font-weight: 700;
    font-size: 24px;
      @include mq ('tablet') {
      font-size: 18px;
    }
  }
  h4 {
    font-size: 0.8em;
  }
}
.content {
  color: $grey;
  p,
  ul {
    padding: 10px;
  }
  ul {
    margin-top: 0;
  }
  .content-section {
    padding: 50px 0;
  }
  .features {
    margin: 0;
    list-style-position: inside;
    li {
      font-size: 14px;
      //   color: $primary-colour;
      font-weight: 700;
      padding: 10px;
      list-style-image: url('../assets/check-solid.svg');
      letter-spacing: 0.05em;
    }
  }
  .secondary {
    color: $secondary-colour;
    font-weight: 700;
  }
  .quote {
    letter-spacing: 0.05em;
    line-height: 1.7em;
    color: #a9a9a9;
    width: 75%;
    text-align: center;
    margin: 0 auto;
    padding-left: 30px;
    padding-right: 30px;
  }
  .emphasis {
    color: $primary-colour;
    font-weight: 700;
  }
}
.highlight {
  margin-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @include mq ('tablet') {
    margin-top: 0;
  }
  img {
    width: 80%;
  }
  .btn-solid {
    margin: 0 0 50px 0;
    @include mq ('phone-wide') {
      margin-top: 20px;
    }
    &:hover {
      color: $secondary-colour;
    }
  }
}

.section-title {
  margin-top: 50px;
  font-size: 2em;
  color: $primary-colour;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.5s ease;
  i {
    font-size: 0.8em;
    padding-left: 20px;
  }
}

.screenshots {
  margin-top: 100px;
  padding: 0;
  * {
    padding: 0 !important;
  }
  img {
    width: 100%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
