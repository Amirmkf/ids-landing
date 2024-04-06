<template>
  <v-app>
    <NavBar/>
    <v-content>
      <SignallingCard/>
      <SignallingServices/>
      <SignallingFeatures/>
      <GoUp/>
    </v-content>
    <FooterSection/>
  </v-app>
</template>

<script>
import NavBar from '../NavBar.vue';
import FooterSection from '../Footer-Page.vue';
import SignallingCard from "@/components/Products/FTSignalling/SignallingCard.vue";
import SignallingServices from "@/components/Products/FTSignalling/SignallingServices.vue";
import SignallingFeatures from "@/components/Products/FTSignalling/SignallingFeatures.vue";
import GoUp from "@/components/GoUpButton.vue";

export default {
  components: {
    SignallingFeatures, GoUp, SignallingServices, SignallingCard,
    NavBar,
    FooterSection,
  },
}
</script>