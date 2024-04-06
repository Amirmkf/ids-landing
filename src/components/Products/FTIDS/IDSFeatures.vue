<template>
  <v-parallax :src="parallaxImage" id="product-features">
    <section>
      <v-container fluid class="mt-2">
        <v-row align="center" justify="space-around">
          <h2 class="products-title">{{ $t("features") }}</h2>
          <v-slide-group class="pa-4 features carousel padding-products" active-class="success"
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
            img: require("@/assets/images/clipboard.png"),
            title: "Telecom specific protocols",
            text: "SS7 MAP and Diameter",
          },
          {
            img: require("@/assets/images/fraud.png"),
            title: "Detection of all SS7 attack vectors",
            text: `including: HLR Request alert, SS7 scanning detection, illegal incoming SS7 messages, SS7 spoofing detection`,
          },
          {
            img: require("@/assets/images/shield.png"),
            title: "Vulnerabilities updates",
            text: "FTIDS benefits from the expertise of the specialist Telecoms Research Lab, ensuring it reflects the very latest research",
          },
          {
            img: require("@/assets/images/web-analytics.png"),
            title: "Data visualization",
            text: "User-friendly dashboards display information about all interactions with external networks. These dashboards are customizable for ease of use data analysis",
          },
          {
            img: require("@/assets/images/adaptation.png"),
            title: "Multi probes capability",
            text: "",
          },
        ]
      } else {
        return [
          {
            img: require("@/assets/images/clipboard.png"),
            title: "پروتکل های خاص مخابرات",
            text: "نقشه و قطر SS7",
          },
          {
            img: require("@/assets/images/fraud.png"),
            title: "تشخیص تمام بردارهای حمله SS7",
            text: `از جمله: هشدار درخواست HLR، تشخیص اسکن SS7، پیام های دریافتی غیرقانونی SS7، تشخیص جعل SS7`,
          },
          {
            img: require("@/assets/images/shield.png"),
            title: "به روز رسانی آسیب پذیری ها",
            text: "FTIDS از تخصص آزمایشگاه تحقیقاتی تخصصی مخابرات سود می برد و اطمینان می دهد که منعکس کننده آخرین تحقیقات است.",
          },
          {
            img: require("@/assets/images/web-analytics.png"),
            title: "تجسم داده ها",
            text: "داشبوردهای کاربرپسند اطلاعات مربوط به تمام تعاملات با شبکه های خارجی را نمایش می دهند. این داشبوردها برای سهولت در تجزیه و تحلیل داده ها قابل تنظیم هستند",
          },
          {
            img: require("@/assets/images/adaptation.png"),
            title: "قابلیت چند پروب",
            text: "",
          },
        ]
      }
    }
  }
};
</script>