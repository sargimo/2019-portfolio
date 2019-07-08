<template>
  <div id="projectStart" class="dcm-showcase">
    <div class="container">
      <div class="title">
        <div class="text">
          <h1>Wellington Music</h1>
          <h3>VueJS & GoogleMaps API Music Guide</h3>
          <!-- <h4>Case Study</h4> -->
        </div>
      </div>
      <div class="highlight">
        <img src="../assets/welly-music-images/welly-music-hero.jpg" alt="Presentation of Wellington Music screens">
        <button class="btn-solid">
          <a href="https://yoobeevuejs.netlify.com/" target="_blank">visit website</a>
        </button>
      </div>
      <div class="content">
        <p>Wellington Music is a web app designed to you keep you up to date with everything Wellington has to offer in music. From festivals to weekend venues, instrument stores to music schools, Wellington Music has you covered. It features some editor picks for the hottest spots right now, as well as constantly pulling live data to keep you in the know.</p>
        <p>
          Wellington Music was built with 
          <span class="emphasis">VueJS</span> with <span class="emphasis">GooglePlaces API and Foursquare Places API</span> integration. It includes some of the following features:
        </p>
        <ul class="features">
          <li>Uses category data from <span class="emphasis">Foursquare Places API</span> to display 5 different categories on a map interface.</li>
          <li>Checks Foursquare's data against the more reliable <span class="emphasis">GooglePlaces API data</span>, displaying only the matches.</li>
          <li>Uses <span class="emphasis">GooglePlaces API</span> data to show venue and store details for all markers on the map interface.</li>
          <li>Radius control to customise the area around you that you want to search in.</li>
          <li><span class="emphasis">Google Directions API</span> functionality to find your way to any of the destinations.</li>
          <li>Editor picks of our favourites for every category.</li>
        </ul>
      </div>
    </div>
    <div class="columns is-mobile screenshots">
      <div class="column is-12">
        <img src="../assets/welly-music-images/welly-music-showcase.jpg" alt="showcase of multiple screens for wellington music guide">
        <div class="columns is-mobile">
          <div class="column is-6">
        <img src="../assets/welly-music-images/welly-music-showcase2.jpg" alt="showcase of screens for wellington music guide">
          </div>
          <div class="column is-6">
        <img src="../assets/welly-music-images/welly-music-showcase3.jpg" alt="showcase of screens for wellington music guide">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "WellyMusic",
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
