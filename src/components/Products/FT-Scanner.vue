<template>
  <v-app>
    <NavBar/>
    <v-content>
      <ScannerInfo/>
      <ScannerFeatures/>
      <SupportedProtocols/>
      <GoUp/>
    </v-content>
    <FooterSection/>
  </v-app>
</template>

<script>
import NavBar from '../NavBar.vue';
import FooterSection from '../Footer-Page.vue';
import ScannerInfo from '../Products/FTScanner/ScannerCard.vue';
import GoUp from '../GoUpButton.vue';
import ScannerFeatures from '../Products/FTScanner/ScannerFeatures.vue';
import SupportedProtocols from '../Products/FTScanner/SupportedProtocols.vue';


export default {
  components: {
    NavBar,
    FooterSection,
    ScannerInfo,
    GoUp,
    ScannerFeatures,
    SupportedProtocols,
  }
}
</script>

