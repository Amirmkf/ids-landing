<template>
    <v-app>
        <NavBar />
        <v-content>

        </v-content>
        <FooterSection />
    </v-app>
</template>

<script>
import NavBar from '../NavBar.vue';
import FooterSection from '../Footer-Page.vue';

export default {
    components: {
        NavBar,
        FooterSection,
    },
    data() {
        return {

        }
    },
    methods: {

    }

}
</script>