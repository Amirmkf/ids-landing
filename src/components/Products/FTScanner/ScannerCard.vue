<template>
  <section class="scanner-card">
    <bread-crumbs :product-name="product.name"></bread-crumbs>
    <div class="ft-scanner-box">
      <div class="ft-scanner-text">
        <h2>{{ product.title }}</h2>
        <h3>{{ product.subTitle }}</h3>
        <p>
          {{ product.description }}
        </p>
      </div>
      <div class="ft-scanner-image">
        <img :src="ScannerURL" alt="FT Scanner"/>
      </div>
    </div>
  </section>
</template>

<script>
import BreadCrumbs from "@/components/Products/BreadCrumbs.vue";

export default {
  components: {BreadCrumbs},
  data() {
    return {
      ScannerURL: require('@/assets/images/Server-status.png'),
    }
  },
  computed: {
    product() {
      if (this.$store.state.locale === 'EN') {
        return {
          name: "Ft Scanner",
          title: "Telecom Scanner for Signalling Core Network",
          subTitle: "Why Telcom need to Signalling Scanner?",
          description: `The confluence of telecom network towards a digital future is proving to be a serious security
          challenge, as a breach in a network if not detected on time, can wreak widespread damage. Regular
          security assessments require a round the clock team of specific highly skilled professionals making
          it a very expensive proposition.

          Fidar Telecom Scanner (FTS) provides network discovery, security scanning and auditing for
          SS7/SIGTRAN and LTE/Diameter protocol stacks. FTS helps Security and Telecom Engineers to discover
          the security level of their signaling Network Elements.`
        }
      } else {
        return {
          name: "اسکنر مخابراتی",
          title: "اسکنر مخابراتی برای سیگنالینگ شبکه اصلی",
          subTitle: "چرا Telcom به Signaling Scanner نیاز دارد؟",
          description: `تلاقی شبکه مخابراتی به سمت آینده دیجیتالی یک امنیت جدی است
           چالش، به‌عنوان یک رخنه در شبکه، اگر به موقع شناسایی نشود، می‌تواند آسیب‌های گسترده‌ای وارد کند. منظم
           ارزیابی های امنیتی نیاز به یک تیم شبانه روزی از متخصصان بسیار ماهر خاص دارد
           این یک پیشنهاد بسیار گران است.

           اسکنر Fidar Telecom (FTS) کشف شبکه، اسکن امنیتی و ممیزی را فراهم می کند
           پشته های پروتکل SS7/SIGTRAN و LTE/Diameter. FTS به مهندسین امنیت و مخابرات کمک می کند تا کشف کنند
           سطح امنیتی عناصر شبکه سیگنالینگ آنها.`
        }
      }
    }
  }
}
</script>