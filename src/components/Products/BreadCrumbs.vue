<template>
  <v-parallax :src="breadcrumb" class="breadCrumbs-image">
    <div class="breadcrumbs-division">
      <h1 class="breadcrumbs-text">
        {{ $t("products.title") }}
        <v-icon class="breadcrumbs-icon">mdi-arrow-right-thick</v-icon>
      </h1>
      <h1 class="breadcrumbs-text">{{ productName }}</h1>
    </div>
  </v-parallax>
</template>

<script>

export default {
  props: ['productName'],
  data() {
    return {
      breadcrumb: require('@/assets/images/breadcrum.jpg'),
    }
  },
  methods: {}

}
</script>