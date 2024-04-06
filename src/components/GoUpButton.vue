<template>
    <v-btn class="round-button" fab small fixed bottom dark color="secondory" @click="scrollTo('navigation-bar')">
        <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
</template>

<script>
import VueScrollTo from "vue-scrollto";

export default {
    data() {
        return {

        };
    },
    methods: {
        scrollTo(input) {
            VueScrollTo.scrollTo(`#${input}`, 600);
        },
    },
};
</script>

<style>
.round-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
}
</style>