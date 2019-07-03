<template>
  <div id="projectStart" class="dcm-showcase">
    <div class="container">
      <div class="title">
        <div class="text">
          <h1>DCM Lawyers</h1>
          <h3>WordPress CMS</h3>
          <!-- <h4>Case Study</h4> -->
        </div>
      </div>
      <div class="highlight">
        <img src="../assets/dcm-images/dcm-hero.jpg" alt="Presentation of DCM's new website">
        <button class="btn-solid">
          <a href="http://geoff.sargison.18cdwux07.yoobee.net.nz/wux04/">visit website</a>
        </button>
      </div>
      <div class="content">
        <p>DCM Lawyers are a small law firm running out of Melbourne, Australia. As a firm involved heavily in family law, they were in need of higher level of connection with their users to increase website conversion and a more modern and professional presentation of themselves. They were also looking for more control of their own content than their previous providers were giving them.</p>
        <p>
          I developed them a custom
          <span class="emphasis">WordPress</span> theme with full customisation of content. Some features include:
        </p>
        <ul class="features">
          <li>Fully responsive across all devices and browsers.</li>
          <li>UX focus with multiple version testing and research.</li>
          <li>Humanising of the firm for higher conversion.</li>
          <li>Content retained for SEO purposes, with potential to increase SEO ratings over time themselves.</li>
          <li>All content from legal copy to lawyer biographies fully editable.</li>
          <li>Ability to publiish and edit articles, and feature them throughout the website.</li>
          <li>Controls to change details of the firm, such as a contact number, and have all instaces of it throughout the website change.</li>
        </ul>
        <!-- <p>After the initial meeting with the client, I went away to conduct law specific UX research, a gap test on their website, and to come back with my recommendations on the most cost effective way to make the biggest impact to conversion.</p> -->
      </div>
      <!-- <h1 @click="toggleSections" id="0" class="section-title">
        Research
        <i class="fas fa-level-down-alt"></i>
      </h1>
      <transition name="fade" mode="out-in">
        <div v-if="activeSections[0]" class="content">
          <p
            class="quote content-section"
          >“Four out of five prospective clients will review a law firm’s website or other online presence before picking up the phone. Of those four, three won’t call. So at best, two out of five referrals will get in touch with your firm. Put another way, three out of five won’t call because the lawyers online presence doesn’t cut it. Or another firm is perceived to be the better option.”</p>
          <div class="columns content-section">
            <div class="column is-6">
              <p>
                So what can we do to improve the odds? It all comes down to
                <span
                  class="emphasis"
                >TRUST.</span> If we can convey trust and remove as many points of anxiety one might have while deciding which firm is for them, our chances of receiving a phone call or email go up drastically.
              </p>
              <p>
                As a firm focusing on areas surrounding Family Law, I understand that many of your prospective clients will be dealing with a very difficult time in
                their lives. It is important that they feel safe and understood. This can be achieved by making sure the website does not convey the cold feeling
                that is sometimes associated with the Law profession. This can be achieved in a number of ways.
              </p>
            </div>
            <div class="column is-6">
              <ul>
                <li>
                  A site that tells the story of why you are different. Compassionate, supportive and approachable. A user should feel like they have a feel for
                  the type of firm you are just from browsing your site.
                </li>
                <li>For this part of trust, it is important to come off as people helping people.</li>
                <li>A colour palette on the warmer side.</li>
                <li>Photos and profiles of the Lawyers. Seeing a face can make a large difference to feeling safer.</li>
                <li>Testimonials of people who were pleased with how they were treated.</li>
              </ul>
            </div>
          </div>
          <p>
            <span class="emphasis">PROFESSIONALISM.</span>
            Right or wrong, more and more people will judge the capability of a company based on the visual appeal and usability of their
            website. It is integral that your website is made with the same level of professionalism as you would run the rest of your business. To achieve this
            the focus will be on the following:
          </p>
          <ul>
            <li>
              <span class="secondary">Modernise the design.</span> Use the width of the screen when it is there on desktop. Contrast, clean typography and space to breath.
            </li>
            <li>
              Add some
              <span class="secondary">colour</span> and
              <span class="emphasis">text hierarchy</span> to draw attention to the most important parts of each page.
            </li>
            <li>
              Introduce tasteful
              <span class="secondary">imagery</span> where appropriate.
            </li>
            <li>
              A level of
              <span class="secondary">polish</span> with subtle animation transitions between pages, and other small things that all come together to make the experience ‘feel’
              better.
            </li>
          </ul>
          <p>
            Experience and expertise. The final area I want to focus on is showing a prospective client that you are the expert in the area they need assistance
            in. We have already made some agreements of a few ways to make positive changes in this area. Adding articles that you have written is a
            great way to show you are in touch with the issues people are having.
          </p>
          <p>
            Being a newer firm, it’s not wise to go down the “3000 years helping people build campfires” route, but you can still sell yourself. Some of the
            information written in the “About Us” section does a good job of this, and with the addition of Lawyer profiles and testimonials, I believe this will
            make some great strides.
          </p>
        </div>
      </transition>
      <h1 @click="toggleSections" id="1" class="section-title">
        Wireframes
        <i class="fas fa-level-down-alt"></i>
      </h1>
      <transition name="fade" mode="out-in">
        <div v-if="activeSections[1]" class="content">
          <p>Keeping details to a bare minimum, wireframes were used to get a grasp of content structure and hierarchy.</p>
          <div class="columns">
            <div class="column is-6">
              <img src="../assets/dcm-images/wireframes1.jpg" alt="first wireframe image">
            </div>
            <div class="column is-6">
              <img src="../assets/dcm-images/wireframes2.jpg" alt="first wireframe image">
            </div>
          </div>
        </div>
      </transition>-->
    </div>
    <div class="columns is-mobile screenshots">
      <div class="column is-12">
        <img src="../assets/dcm-images/dcm-desktop.jpg" alt="desktop layout for DCM Lawyers">
        <div class="columns is-mobile">
          <div class="column is-6">
                          <img
              src="../assets/dcm-images/dcm-mobile-home-showcase.jpg"
              alt="mobile layout for DCM Lawyers home page"
            >
          </div>
          <div class="column is-6">
                          <img
              src="../assets/dcm-images/dcm-family-law-mobile-showcase.jpg"
              alt="mobile layout for DCM Lawyers family law page"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "DcmLawyers",
  components: {},
  data: function() {
    return {
      activeSections: { 0: false, 1: false, 2: false }
    };
  },
  mounted() {},
  methods: {
    toggleSections(evt) {
      let id = evt.target.id;
      let that = this;
      if (that.activeSections[id]) {
        that.activeSections[id] = false;
      } else {
        that.activeSections[id] = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/settings.scss";

.title {
  color: $grey;
  position: absolute;
  .text {
    position: relative;
  }
  h1 {
    margin-top: 100px;
    font-size: 1em;
    font-weight: 700;
  }
  h3 {
    color: $primary-colour;
    font-weight: 700;
    font-size: 24px;
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
    li {
      font-size: 14px;
      //   color: $primary-colour;
      font-weight: 700;
      list-style: none;
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
  img {
    width: 80%;
  }
  .btn-solid {
    margin: 0 0 50px 0;
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

