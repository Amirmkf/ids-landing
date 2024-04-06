<template>
  <section id="navbar">
    <v-app-bar app id="navigation-bar" height="70" color="white" elevate-on-scroll>
      <router-link to="/home-page" class="logo">
        <img width="27" src="@/assets/icon.svg" alt="logo">
        <span v-if="$store.state.locale === 'EN'">Telecom Vulnerabilities</span>
        <span v-else>آسیب پذیری های مخابراتی</span>
      </router-link>
      <v-spacer></v-spacer>

      <v-btn tag="a" href="#imageSlider" text color="blue" @click="scrollTo('imageSlider', '/home-page')"
             class="scrollTo">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
              d="M9.02 2.84004L3.63 7.04004C2.73 7.74004 2 9.23004 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.02 2.72004C12.62 1.74004 10.37 1.79004 9.02 2.84004Z"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 17.99V14.99" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
        {{ $t("navbar.home") }}
      </v-btn>
      <v-btn tag="a" href="#about-us" text color="blue" @click="scrollTo('about-us', '/home-page')" class="scrollTo">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 8V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.9945 16H12.0035" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
        {{ $t("aboutUs.title") }}
      </v-btn>
      <v-menu offset-y open-on-hover="open-on-hover">
        <template v-slot:activator="{ on }">
          <v-btn tag="a" href="#services" text v-on="on" color="blue" class="scrollTo"
                 @click="scrollTo('services', '/home-page')">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                  d="M7.99995 22H15.9999C20.0199 22 20.7399 20.39 20.9499 18.43L21.6999 10.43C21.9699 7.99 21.2699 6 16.9999 6H6.99995C2.72995 6 2.02995 7.99 2.29995 10.43L3.04995 18.43C3.25995 20.39 3.97995 22 7.99995 22Z"
                  stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                  stroke-linejoin="round"/>
              <path d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6" stroke="currentColor" stroke-width="1.5"
                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path
                  d="M14 13V14C14 14.01 14 14.01 14 14.02C14 15.11 13.99 16 12 16C10.02 16 10 15.12 10 14.03V13C10 12 10 12 11 12H13C14 12 14 12 14 13Z"
                  stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                  stroke-linejoin="round"/>
              <path d="M21.65 11C19.34 12.68 16.7 13.68 14 14.02" stroke="currentColor" stroke-width="1.5"
                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.62 11.27C4.87 12.81 7.41 13.74 10 14.03" stroke="currentColor" stroke-width="1.5"
                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {{ $t("navbar.professionalServices") }}
          </v-btn>
        </template>
        <!-- subNavigation menu items -->
        <v-list class="pointer">
          <v-list-item ripple class="color-hover" to="/traffic-analysis">
            {{ $t("navbar.trafficAnalysis") }}
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item ripple class="color-hover" to="/penetration-test">
            {{ $t("navbar.penetrationTest") }}
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu offset-y open-on-hover="open-on-hover">
        <template v-slot:activator="{ on }">
          <v-btn tag="a" href="#products" text v-on="on" color="blue" class="scrollTo"
                 @click="scrollTo('products', '/home-page')">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M3.17004 7.43994L12 12.5499L20.77 7.46994" stroke="currentColor" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 21.61V12.54" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path
                  d="M9.93001 2.48004L4.59001 5.44004C3.38001 6.11004 2.39001 7.79004 2.39001 9.17004V14.82C2.39001 16.2 3.38001 17.88 4.59001 18.55L9.93001 21.52C11.07 22.15 12.94 22.15 14.08 21.52L19.42 18.55C20.63 17.88 21.62 16.2 21.62 14.82V9.17004C21.62 7.79004 20.63 6.11004 19.42 5.44004L14.08 2.47004C12.93 1.84004 11.07 1.84004 9.93001 2.48004Z"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {{ $t("products.title") }}
          </v-btn>
        </template>
        <!-- subNavigation menu items -->
        <v-list class="pointer">
          <v-list-item to="/ft-ids" ripple class="color-hover">{{ $t("products.FTIDS") }}</v-list-item>
          <v-divider></v-divider>
          <v-list-item to="/ft-scanner" ripple class="color-hover">{{ $t("products.FTScanner") }}</v-list-item>
          <v-divider></v-divider>
          <v-list-item to="/ft-signalling-firewall" ripple class="color-hover">
            {{ $t("products.FTSignalling") }}
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn tag="a" href="#contact-us" text color="blue" @click="scrollTo('contact-us', '/home-page')"
             class="scrollTo">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
              d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
              stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"/>
        </svg>
        {{ $t("contactUs.title") }}
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn color="blue" text @click="locale === 'EN' ? locale = 'FA': locale = 'EN'">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M19.06 18.6699L16.92 14.3999L14.78 18.6699" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.1699 17.9099H18.6899" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path
              d="M16.9201 22.0001C14.1201 22.0001 11.8401 19.73 11.8401 16.92C11.8401 14.12 14.1101 11.8401 16.9201 11.8401C19.7201 11.8401 22.0001 14.11 22.0001 16.92C22.0001 19.73 19.7301 22.0001 16.9201 22.0001Z"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path
              d="M5.02 2H8.94C11.01 2 12.01 3.00002 11.96 5.02002V8.94C12.01 11.01 11.01 12.01 8.94 11.96H5.02C3 12 2 11 2 8.92999V5.01001C2 3.00001 3 2 5.02 2Z"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.00995 5.84985H4.94995" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M6.96997 5.16992V5.84991" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M7.98994 5.83984C7.98994 7.58984 6.61994 9.00983 4.93994 9.00983" stroke="currentColor"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.0099 9.01001C8.2799 9.01001 7.61991 8.62 7.15991 8" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 15C2 18.87 5.13 22 9 22L7.95 20.25" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        {{ locale === 'EN' ? 'FA' : 'EN' }}
      </v-btn>
    </v-app-bar>
  </section>
</template>

<script>
import VueScrollTo from "vue-scrollto";

export default {
  data() {
    return {
      locale: this.$store.state.locale,
    }
  },
  computed: {
    navbarLinks() {
      return document.querySelectorAll('#navbar .scrollTo')
    },
  },
  watch: {
    locale() {
      this.$i18n.locale = this.locale;
      this.$store.state.locale = this.locale;
    },
  },
  methods: {
    scrollTo(input, route) {
      VueScrollTo.scrollTo(`#${input}`, 600);

      if (this.$route.path !== route) {
        this.$router.push(route);
      }
    },
    checkElementVisibility() {
      const position = window.scrollY + 200
      this.navbarLinks.forEach(navbarLink => {
        if (!navbarLink.hash) return

        const section = document.querySelector(navbarLink.hash);
        if (!section) return

        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarLink.classList.add('v-btn--active');
        } else {
          navbarLink.classList.remove('v-btn--active')
        }
      })
    },
  },
  mounted() {
    window.addEventListener('load', this.checkElementVisibility)
    document.addEventListener('scroll', this.checkElementVisibility)
  },
};
</script>