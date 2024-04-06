<template>
  <v-app>
    <NavBar/>
    <v-content>
      <IDSInfo/>
      <IDSServices/>
      <IDSFeatures/>
      <GoUp/>
    </v-content>
    <FooterSection/>
  </v-app>
</template>

<script>
import NavBar from '../NavBar.vue';
import FooterSection from '../Footer-Page.vue';
import IDSInfo from '../Products/FTIDS/IDSCard.vue';
import IDSFeatures from '../Products/FTIDS/IDSFeatures.vue';
import IDSServices from '../Products/FTIDS/FTIDSServices.vue';
import GoUp from '../GoUpButton.vue';

export default {
  components: {
    NavBar,
    FooterSection,
    IDSInfo,
    IDSFeatures,
    IDSServices,
    GoUp,
  },
}
</script>