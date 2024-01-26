<template>
    <v-main>
        <div class="hero pl-16 pr-16 d-flex align-center justify-center" style="height:500px;">
            <v-col xs="12" lg="0 d-flex flex-column align-center">
                <h1 style="color: #FF9327;">Pricing</h1>
                <h2 style="font-size: 1.9em;">Simple pricing that works at your scale</h2>
                <p class="hero-text">Explore Our Pricing Tiers...</p>

            </v-col>

        </div>

        <BulkSMS />
        <Surveys />
        <Rewards />
        <Payments />
        <Shortcodes />
        <USSDs />
        <Footer />





    </v-main>
</template>

<script>
import BulkSMS from '../components/pricing_components/BulkSMS.vue'
import Surveys from '../components/pricing_components/SurveysPricing.vue'
import Rewards from '../components/pricing_components/RewardsPricing.vue'
import Payments from '../components/pricing_components/PaymentsPricing.vue'
import Shortcodes from '../components/pricing_components/ShortcodesPricing.vue'
import USSDs from '../components/pricing_components/USSDPricing.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'pricing',

    components: {
        BulkSMS,
        Surveys,
        Rewards,
        Payments,
        Shortcodes,
        USSDs,
        Footer
    },


}
</script>

<style></style>