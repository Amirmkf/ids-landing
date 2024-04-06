<template>
  <div :class="{rtl : $store.state.locale === 'FA'}">
    <router-view></router-view>
  </div>
</template>