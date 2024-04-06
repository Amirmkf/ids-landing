<template>
  <section id="services">
    <v-container fluid>
      <h2 class="services-title special-title">{{ $t("services.title") }}</h2>
      <v-row align="center" justify="space-around">
        <v-col cols="3" v-for="(card, i) in cards" :key="i">
          <v-card class="mx-auto service-card" max-width="344" height="350">
            <div class="imgBx">
              <v-img :src="card.image" max-width="100px" class="d-block ml-auto mr-auto"></v-img>
            </div>
            <div class="contentBx">
              <p class="cardTitle">{{ card.title }}</p>
              <div class="description">
                {{ card.text }}
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  computed: {
    cards() {
      if (this.$store.state.locale === 'EN') {
        return [
          {
            image: require("@/assets/images/brainstorming.png"),
            title: "Security Consulting",
            text: "Security architecture design of information systemsProviding a comprehensive plan for network and information security of the organizationProviding advice and technical services to obtain an information security certificate Preparation of RFP and supervision of various security services in the organization Implementation of study and research projects in the field of information security",
          },
          {
            image: require("@/assets/images/reliability.png"),
            title: "Security Services",
            text: `Design and update of operating systems and IT services
                        Virtualization plans based on center management
                        Plans to expand anti-malware systems
                        Centralized NTP scheme
                        Plan to collect cyber events and analyze them
                        Business continuity plan based on ISMS standard`,
          },
          {
            image: require("@/assets/images/cpu.png"),
            title: "Security Operations Center",
            text: `Installing Splunk
                        Evaluation of the organization's assets
                        Collecting and categorizing organization logs
                        Continuous monitoring
                        Manage alerts
                        Establish processes, procedures and required training`,
          },
          {
            image: require("@/assets/images/web-coding.png"),
            title: "Security assessment and testing",
            text: `Security assessment and penetration testing of mobile apps, software and services
                        Penetration testing of web applications
                        Evaluation of network infrastructure in organizations
                        Security scan`,
          },

        ]
      } else {
        return [
          {
            image: require("@/assets/images/brainstorming.png"),
            title: "مشاوره امنیتی",
            text: "طراحی معماری امنیتی سیستم های اطلاعاتی ارائه طرح جامع امنیت شبکه و اطلاعات سازمان ارائه مشاوره و خدمات فنی جهت اخذ گواهینامه امنیت اطلاعات تهیه RFP و نظارت بر انواع خدمات امنیتی در سازمان اجرای پروژه های مطالعاتی و تحقیقاتی در زمینه امنیت اطلاعات",
          },
          {
            image: require("@/assets/images/reliability.png"),
            title: "خدمات امنیتی",
            text: `طراحی و به روز رسانی سیستم عامل و خدمات فناوری اطلاعات
                         برنامه های مجازی سازی بر اساس مدیریت مرکز
                         برنامه هایی برای گسترش سیستم های ضد بدافزار
                         طرح متمرکز NTP
                         برای جمع آوری رویدادهای سایبری و تجزیه و تحلیل آنها برنامه ریزی کنید
                         طرح تداوم کسب و کار بر اساس استاندارد ISMS`,
          },
          {
            image: require("@/assets/images/cpu.png"),
            title: "مرکز عملیات امنیتی",
            text: ` نصب Splunk
                         ارزیابی دارایی های سازمان
                         جمع آوری و دسته بندی لاگ های سازمان
                         نظارت مستمر
                         مدیریت هشدارها
                         ایجاد فرآیندها، رویه ها و آموزش های مورد نیاز`,
          },
          {
            image: require("@/assets/images/web-coding.png"),
            title: "ارزیابی و تست امنیتی",
            text: `ارزیابی امنیتی و تست نفوذ برنامه‌ها، نرم‌افزارها و خدمات تلفن همراه
                         تست نفوذ برنامه های کاربردی وب
                         ارزیابی زیرساخت شبکه در سازمان ها
                         اسکن امنیتی`,
          },

        ]
      }
    }
  }
};
</script>