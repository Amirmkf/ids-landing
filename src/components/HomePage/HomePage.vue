<template>
  <v-app>
    <NavBar/>
    <v-main>
      <ImageSlider/>
      <AboutUs/>
      <Services/>
      <Products/>
      <ContactUs/>
      <GoUp/>
    </v-main>
    <PageFooter/>
  </v-app>
</template>

<script>
import NavBar from '../NavBar.vue';
import ImageSlider from './ImageSlider.vue';
import PageFooter from '../Footer-Page.vue';
import Services from './ServicesSection.vue';
import AboutUs from './AboutUs.vue';
import ContactUs from './ContactUs.vue';
import GoUp from '../GoUpButton.vue';
import Products from '../HomePage/ProductsSection.vue';

export default {
  components: {
    NavBar,
    ImageSlider,
    PageFooter,
    Services,
    AboutUs,
    ContactUs,
    GoUp,
    Products,
  },
  name: 'App',
}
</script>