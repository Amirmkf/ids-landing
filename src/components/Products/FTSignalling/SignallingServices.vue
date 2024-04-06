<template>
  <section class="Services-section" id="product-services">
    <v-container fluid class="mt-2">
      <p class="services-padding special-title">{{ $t("services.title") }}</p>
      <v-row align="center" justify="space-around">
        <v-col cols="4" v-for="(card, i) in cards" :key="i">
          <v-card class="mx-auto services-padding cards-height" max-width="344" shaped>
            <v-img :src="card.image" max-width="100px" class="d-block ml-auto mr-auto"></v-img>
            <v-card-title class="align-IDS-service-text">
              {{ card.title }}
            </v-card-title>

            <v-card-actions>
              <v-card-text>{{ card.text }}</v-card-text>
              <v-spacer></v-spacer>
            </v-card-actions>
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
            image: require("@/assets/images/protocols.png"),
            title: "Covers",
            text: ` FTIDS Covers Telecom-specific protocols
                        (SS7 MAP & Diameter) on the International Roaming network`,
          },
          {
            image: require("@/assets/images/cyber-security.png"),
            title: "Monitoring ",
            text: ` FTIDS is passively monitoring the signaling
                        links to detect attack attempts & exploits in real-time`,
          },
          {
            image: require("@/assets/images/alert.png"),
            title: "Alerts",
            text: `Alerts visualization is provided with FTIDS Dashboard`,
          },

        ]
      } else {
        return [
          {
            image: require("@/assets/images/protocols.png"),
            title: "پوشش",
            text: ` FTIDS پروتکل های اختصاصی مخابراتی را پوشش می دهد
                         (SS7 MAP & Diameter) در شبکه رومینگ بین المللی`,
          },
          {
            image: require("@/assets/images/cyber-security.png"),
            title: "نظارت",
            text: `FTIDS به طور منفعلانه سیگنالینگ را زیر نظر دارد
                         پیوندهایی برای شناسایی حملات و سوء استفاده ها در زمان واقعی`,
          },
          {
            image: require("@/assets/images/alert.png"),
            title: "هشدارها",
            text: `تجسم هشدارها با داشبورد FTIDS ارائه می شود`,
          },

        ]
      }
    }
  }
};
</script>
