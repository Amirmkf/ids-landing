<template>
  <v-parallax :src="parallaxImage">
    <section>
      <v-container fluid id="features" class="mt-2">
        <v-row align="center" justify="space-around">
          <h2 class="features-title">{{ $t("features") }}</h2>
          <v-slide-group class="pa-4 carousel features padding-products" active-class="success"
                         show-arrows>
            <v-slide-item cols="4" sm="4" class="text-center" v-for="(feature, i) in features" :key="i">
              <v-hover v-slot:default="{ hover }">
                <v-card width="300" class="ma-5 card" :class="{ up: hover }">
                  <v-img :src="feature.img" max-width="100px" class="d-block ml-auto mr-auto"
                         :class="{ 'zoom-effect': hover }"></v-img>
                  <h3>{{ feature.title }}</h3>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4>
                </v-card>
              </v-hover>
            </v-slide-item>
          </v-slide-group>
        </v-row>
      </v-container>
    </section>
  </v-parallax>
</template>

<script>
export default {
  data() {
    return {
      parallaxImage: require('@/assets/images/4436009_93190.jpg')
    };
  },
  computed: {
    features() {
      if (this.$store.state.locale === 'EN') {
        return [
          {
            img: require("@/assets/images/scanner-feature1.png"),
            title: "Telecom Specific Protocols",
            text: "SS7/SIGTRAN and LTE/Diameter protocol stacks",
          },
          {
            img: require("@/assets/images/scanner-feature2.png"),
            title: "Vulnerabilities updates",
            text: `FTIDS benefits from the expertise of the specialist Telecoms Research Lab ensuring it reflects the very latest research on telecom security`,
          },
          {
            img: require("@/assets/images/scanner-feature3.png"),
            title: "Web UI",
            text: "User-friendly UI for adjusting and starting differrent types of scans as well as observing the scan results",
          },
          {
            img: require("@/assets/images/scanner-feature4.png"),
            title: "SS7 firewall",
            text: "SS7 firewall bypass scenarios such as using Double Map, Global Title and Segmentation technique",
          },
          {
            img: require("@/assets/images/scanner-feature5.png"),
            title: "Analysis",
            text: "Telecom Network Elements vulnerability analysis",
          },
          {
            img: require("@/assets/images/scanner-feature6.png"),
            title: "Reliability",
            text: "Reliable, repeatable scanner results, clear deliverables",
          },
          {
            img: require("@/assets/images/scanner-feature7.png"),
            title: "Support",
            text: "Multiple Signaling Point Code support",
          },
          {
            img: require("@/assets/images/scanner-feature8.png"),
            title: "Audit",
            text: "Audit from multiple perspectives (Internal, National, International)",
          },
          {
            img: require("@/assets/images/scanner-feature9.png"),
            title: "Coverage of legacy",
            text: `Coverage of legacy, current and next generation telecom equipment and protocols`,
          },
          {
            img: require("@/assets/images/scanner-feature10.png"),
            title: "Compatible",
            text: "Compatible with a wide range of Network Elements from multiple vendors",
          },
          {
            img: require("@/assets/images/scanner-feature11.png"),
            title: "Compliance",
            text: "Compliance with GSMA FS.11, IR.82, FS.19, FS.20 & FS.21 recommendations",
          },
        ]
      } else {
        return [
          {
            "img": require("@/assets/images/scanner-feature1.png"),
            "title": "پروتکل‌های خاص مخابرات",
            "text": "پشته‌های پروتکل SS7/SIGTRAN و LTE/Diameter"
          },
          {
            "img": require("@/assets/images/scanner-feature2.png"),
            "title": "به‌روزرسانی آسیب‌پذیری‌ها",
            "text": "FTIDS از تخصص آزمایشگاه تحقیقات مخابراتی بهره می‌برد تا از آخرین تحقیقات در زمینه امنیت مخابراتی بهره‌مند شود"
          },
          {
            "img": require("@/assets/images/scanner-feature3.png"),
            "title": "واسط کاربری وب",
            "text": "واسط کاربری دوستانه برای تنظیم و شروع انواع اسکن‌ها و مشاهده نتایج اسکن"
          },
          {
            "img": require("@/assets/images/scanner-feature4.png"),
            "title": "فایروال SS7",
            "text": "سناریوهای دور زدن فایروال SS7 مانند استفاده از Double Map، Global Title و تکنیک Segmentation"
          },
          {
            "img": require("@/assets/images/scanner-feature5.png"),
            "title": "تجزیه و تحلیل",
            "text": "تجزیه و تحلیل آسیب‌پذیری عناصر شبکه مخابراتی"
          },
          {
            "img": require("@/assets/images/scanner-feature6.png"),
            "title": "قابلیت اعتماد",
            "text": "نتایج اسکن قابل اعتماد و تکرارپذیر، خروجی‌های واضح"
          },
          {
            "img": require("@/assets/images/scanner-feature7.png"),
            "title": "پشتیبانی",
            "text": "پشتیبانی از چندین کد نقطه‌ای اعلامی"
          },
          {
            "img": require("@/assets/images/scanner-feature8.png"),
            "title": "حسابرسی",
            "text": "حسابرسی از چندین دیدگاه (داخلی، ملی، بین‌المللی)"
          },
          {
            "img": require("@/assets/images/scanner-feature9.png"),
            "title": "پوشش تجهیزات قدیمی",
            "text": "پوشش تجهیزات و پروتکل‌های قدیمی، فعلی و نسل‌های بعدی مخابراتی"
          },
          {
            "img": require("@/assets/images/scanner-feature10.png"),
            "title": "سازگار",
            "text": "سازگار با مجموعه گسترده‌ای از عناصر شبکه از تولیدکنندگان مختلف"
          },
          {
            "img": require("@/assets/images/scanner-feature11.png"),
            "title": "تطابق",
            "text": "تطابق با توصیه‌های GSMA FS.11، IR.82، FS.19، FS.20 و FS.21"
          }
        ]
      }
    }
  },
  methods: {
    scroll(direction) {
      const container = this.$el.querySelector('.carousel');
      const scrollStep = container.offsetWidth;
      container.scrollBy({
        left: direction * scrollStep,
        behavior: 'smooth',
      });
    },
  },
};
</script>