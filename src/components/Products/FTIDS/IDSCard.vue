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
      ScannerURL: require('@/assets/images/Security-bro.png'),
      items: [
        {
          title: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          title: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          title: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
    }
  },
  computed: {
    product() {
      if (this.$store.state.locale === 'EN') {
        return {
          name: "Ft IDS",
          title: "Intrusion Detection System for Telecom Signalling Core Network",
          subTitle: "Why Telcom need to Signalling IDS",
          description: `In a digital world driven by critical infrastructure and sensitive data, all legacy networks -- 2G,
          3G, 4G-LTE are easily exploitable. Security flaws in signaling protocols allow attackers to
          compromise subscriber privacy, intercept calls, track shared locations, commit fraud, and cause
          denial of service. Therefore, network providers need a strong deterrent against more advanced and
          sophisticated cyber threats.

          Fidar Telecom Intrusion Detection System (FTIDS) is an Intrusion Detection System specifically
          designed for Signaling Core of Telecom Networks to empower telecom operators for responding to
          threats as they occur. FTIDS enables the detection of signaling network abuse and provides a
          dashboard of fraud and attacks.`
        }
      } else {
        return {
          name: "سیستم تشخیص نفوذ",
          title: "سیستم تشخیص نفوذ برای شبکه اصلی سیگنالینگ مخابراتی",
          subTitle: "چرا Telcom نیاز به Signaling IDS دارد؟",
          description: `در دنیای دیجیتالی که توسط زیرساخت های حیاتی و داده های حساس هدایت می شود، همه شبکه های قدیمی -- 2G،
           3G، 4G-LTE به راحتی قابل بهره برداری هستند. نقص های امنیتی در پروتکل های سیگنالینگ به مهاجمان اجازه می دهد
           به خطر انداختن حریم خصوصی مشترک، رهگیری تماس‌ها، ردیابی مکان‌های مشترک، ارتکاب کلاهبرداری، و علت
           خود داری از خدمات. بنابراین، ارائه دهندگان شبکه نیاز به یک بازدارنده قوی در برابر پیشرفته تر و
           تهدیدات سایبری پیچیده

           Fidar Telecom Intrusion Detection System (FTIDS) یک سیستم تشخیص نفوذ به طور خاص است.
           طراحی شده برای سیگنالینگ هسته شبکه های مخابراتی برای توانمندسازی اپراتورهای مخابراتی برای پاسخگویی به
           تهدیدها در صورت وقوع FTIDS تشخیص سوء استفاده از شبکه سیگنالینگ را امکان پذیر می کند و a
           داشبورد کلاهبرداری و حملات`
        }
      }
    }
  }
}
</script>