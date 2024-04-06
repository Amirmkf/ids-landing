<template>
  <section id="imageSlider">
    <v-carousel show-arrows-on-hover="show-arrows-on-hover" cycle interval="5000" hide-delimiter-background
                class="radius" pre delimiter-icon="mdi-minus">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  computed: {
    items() {
      if (this.$store.state.locale === "EN") {
        return [
          {
            src: require('@/assets/images/energy-solutions-for-telecommunication.jpg'),
          },
          {
            src: require('@/assets/images/Telekomunikace.jpg'),
          },
          {
            src: require('@/assets/images/Pic4.jpg'),
          },
        ]
      } else {
        return [
          {
            src: require('@/assets/images/energy-solutions-for-telecommunication-Fa.jpg'),
          },
          {
            src: require('@/assets/images/TelekomunikaceFa.jpg'),
          },
          {
            src: require('@/assets/images/Pic4-Fa.jpg'),
          },
        ]
      }
    }
  }
};
</script>