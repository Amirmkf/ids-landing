<template>
  <section class="scanner-supported-protocols">
    <v-container fluid>
      <!--      <v-treeview shaped open-all :items="items"></v-treeview>-->
      <div>
        <h2>{{ $t("supportedProtocols") }}</h2>
        <v-chip-group column>
          <v-chip v-for="(item,i) in items" :key="i" color="#f1f5f9">
            <span>{{ item.title }}</span>
            {{ item.text }}
          </v-chip>
        </v-chip-group>
      </div>
      <img :src="telecomImagePath" alt="Scanner-telecom" class="image">
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      telecomImagePath: require('@/assets/images/Endpoint-bro.png'),
    };
  },
  computed: {
    items() {
      if (this.$store.state.locale === 'EN') {
        return [
          {title: 'SCTP', text: 'Stream Control Transmission Protocol'},
          {title: 'M3UA', text: 'MTP3 User Adaptation Layer'},
          {title: 'SCCP', text: 'Signaling Connection Control Part'},
          {title: 'TCAP', text: 'Transaction Capabilities Application Part'},
          {title: 'MAP', text: 'Mobile Application Part'},
          {title: 'SCTP Diameter Base', text: 'Diameter protocol over SCTP'},
          {
            title: '3GPP Extensions',
            text: '3rd Generation Partnership Project extensions for mobile communication protocols'
          },
        ]
      } else {
        return [
          {title: 'SCTP', text: "پروتکل کنترل انتقال جریان"},
          {title: 'M3UA', text: "لایه تطبیق کاربر MTP3"},
          {title: 'SCCP', text: "بخش کنترل اتصال اعلان"},
          {title: 'TCAP', text: "بخش قابلیت‌های تراکنش برنامه"},
          {title: 'MAP', text: "بخش برنامه تلفن همراه"},
          {title: 'SCTP Diameter Base', text: " پروتکل Diameter روی SCTP"},
          {title: "توسعه‌های 3GPP", text: "توسعه‌های پروژه مشارکتی نسل سوم برای پروتکل‌های ارتباطی موبایل"}
        ]
      }
    }
  }
};
</script>
e>