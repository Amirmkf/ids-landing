<template>
    <section id="footer">
        <v-footer padless>
            <v-card flat tile class="text-center">
                <v-card-text>
                    <v-btn v-for="(icon, i) in icons" :key="i" class="mx-4" :href="icon.link" target="_blank"
                        icon>
                        <v-icon size="24px">{{ icon.text }}</v-icon>
                    </v-btn>
                </v-card-text>
                <v-card-text class="pt-0">
                  {{ $t("footer.text") }}
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text>
                    {{ new Date().getFullYear() }} — <strong>www.fdni.ir</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </section>
</template>

<script>
export default {
    data: () => ({
        icons: [
            {
                text: "mdi-facebook",
                link: "",
            },
            {
                text: "mdi-twitter",
                link: "",
            },
            {
                text: "mdi-linkedin",
                link: "",
            },
            {
                text: "mdi-instagram",
                link: "",
            },
        ],
    }),
};
</script>