<template>
  <v-parallax :src="parallaxImage" id="products" height="550">
    <section>
      <v-container fluid>
        <h2 class="products-title special-title">{{ $t("products.title") }}</h2>
        <v-slide-group isRtl="isRtl" class="carousel padding-products products" active-class="success"
                       show-arrows>
          <v-slide-item cols="12" sm="4" class="text-center" v-for="(feature, i) in features" :key="i">
            <v-hover v-slot:default="{ hover }">
              <v-card @click="goToRoute(feature.route)" class="ma-5 card" width="375" min-height="300"
                      :class="{ up: hover }">
                <v-img :src="feature.img" max-width="100" class="d-block ml-auto mr-auto"
                       :class="{ 'zoom-effect': hover }"></v-img>
                <h3>{{ feature.title }}</h3>
                <p>
                  {{ feature.text }}
                </p>
              </v-card>
            </v-hover>
          </v-slide-item>
        </v-slide-group>
      </v-container>
    </section>
  </v-parallax>
</template>

<script>
import VueScrollTo from "vue-scrollto";

export default {
  data() {
    return {
      parallaxImage: require('@/assets/images/4436009_93190.jpg')
    }
  },
  computed: {
    features() {
      if (this.$store.state.locale === 'EN') {
        return [
          {
            img: require("@/assets/images/detection.png"),
            title: this.$t("products.FTIDS"),
            text: "Intrusion Detection System for Telecom Signalling Core Network",
            route: '/ft-ids',
          },
          {
            img: require("@/assets/images/telecommunication.png"),
            title: this.$t("products.FTScanner"),
            text: "Telecom Scannar for Signalling Core Network\n",
            route: '/ft-scanner',
          },
          {
            img: require("@/assets/images/firewall.png"),
            title: this.$t("products.FTSignalling"),
            text: "Telecom Scannar for Signalling Core Network.",
            route: '/ft-signalling-firewall',
          },
          {
            img: require("@/assets/images/data.png"),
            title: this.$t("products.analysis"),
            text: "Traffic analysis is the process of intercepting and examining messages in order to deduce information from patterns in communication.",
            route: '/traffic-analysis',
          },
          {
            img: require("@/assets/images/penetration-testing.png"),
            title: this.$t("products.penetration"),
            text: "a security exercise where a cyber-security expert attempts to find and exploit vulnerabilities in a computer system.",
            route: '/penetration-test',
          },
        ]
      } else {
        return [
          {
            img: require("@/assets/images/detection.png"),
            title: this.$t("products.FTIDS"),
            text: "سیستم تشخیص نفوذ برای شبکه اصلی مخابراتی",
            route: '/ft-ids',
          },
          {
            img: require("@/assets/images/telecommunication.png"),
            title: this.$t("products.FTScanner"),
            text: "اسکن مخابراتی برای علامت دهی شبکه اصلی",
            route: '/ft-scanner',
          },
          {
            img: require("@/assets/images/firewall.png"),
            title: this.$t("products.FTSignalling"),
            text: "اسکن مخابراتی برای سیگنالینگ شبکه اصلی",
            route: '/ft-signalling-firewall',
          },
          {
            img: require("@/assets/images/data.png"),
            title: this.$t("products.analysis"),
            text: "تحلیل ترافیک فرآیند رهگیری و بررسی پیام ها به منظور استنباط اطلاعات از الگوهای موجود در ارتباطات است.",
            route: '/traffic-analysis',
          },
          {
            img: require("@/assets/images/penetration-testing.png"),
            title: this.$t("products.penetration"),
            text: "یک تمرین امنیتی که در آن یک متخصص امنیت سایبری تلاش می‌کند تا آسیب‌پذیری‌ها را در یک سیستم رایانه‌ای پیدا کند و از آن بهره‌برداری کند.",
            route: '/penetration-test',
          },
        ]
      }
    }
  },
  methods: {
    goToRoute(route) {
      if (this.$route.path !== route) {
        this.$router.push(route);
        VueScrollTo.scrollTo(`#navigation-bar`, 600);
      }
    },
  },
};
</script>