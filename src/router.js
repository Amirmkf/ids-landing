import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './components/HomePage/HomePage.vue';
import FTIds from './components/Products/FT-IDS.vue';
import FTScanner from './components/Products/FT-Scanner.vue';
import FTSignallingFirewall from './components/Products/FT-SignallingFirewall.vue';
import TrafficAnalysis from './components/ProfessionalServices/Traffic-Analysis.vue';
import PenetrationTest from './components/ProfessionalServices/Penetration-Test.vue';

Vue.use(VueRouter);

const routes =[
    {path: '/', redirect: '/home-page' },
    {path: '/home-page', component: HomePage},
    {path: '/ft-ids', component: FTIds},
    {path: '/ft-scanner', component: FTScanner},
    {path: '/ft-signalling-firewall', component: FTSignallingFirewall},
    {path: '/traffic-analysis', component: TrafficAnalysis},
    {path: '/penetration-test', component: PenetrationTest},
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;