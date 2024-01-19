<template>
    <v-main style=" background: white;">

        <v-row lg="0 d-flex flex-md-row justify-center" style="padding: 4rem;">


            <v-col xs="0" lg="0 d-flex flex-column justify-center" class="pr-16">
                <h1>About Whatsapp </h1>
                <p>Survey is a powerful way to engage with your audience, understand their needs, and ultimately win more
                    clients.</p>
                <p> Our user-friendly system seamlessly integrates surveys with SMS campaigns, providing you with a
                    comprehensive solution to elevate your marketing efforts and achieve sustainable growth.</p>
            </v-col>

            <v-col lg="0" xs="0" style="min-width: 600px; max-width: fit-content;">
                <img width="100%" src="@/assets/bulksms.svg" alt="hero image">
            </v-col>
        </v-row>
        <v-row
            style="min-height: 100px; background: #F2FAF4; border-radius: 24px; box-shadow: 2rem; margin-left: 4rem; margin-right: 4rem; margin-bottom: 4rem;"
            class="d-flex justify-center">
            <v-col xs="0" lg="0 d-flex flex-column justify-center">
                <h2>20%</h2>
                <p style="text-align: center;">Conversion Rates</p>
            </v-col>
            <v-col xs="0" lg="0 d-flex flex-column justify-center">
                <h2>40%</h2>
                <p style="text-align: center;"> Repeat Customers</p>
            </v-col>
            <v-col xs="0" lg="0 d-flex flex-column justify-center">
                <h2>25%</h2>
                <p style="text-align: center;">Sales Boost</p>
            </v-col>
            <v-col xs="0" lg="0 d-flex flex-column justify-center">
                <h2>80%</h2>
                <p style="text-align: center;">Positive Feedback</p>
            </v-col>
            <v-col xs="0" lg="0 d-flex flex-column justify-center">
                <h2>15%</h2>
                <p style="text-align: center;">Reduced marketing costs</p>
            </v-col>


        </v-row>



        <v-col style=" background-color:#F8F8F8; padding: 4rem;">
            <h1 style=" font-weight: 800; font-size: 30; line-height: 45px; text-align: center; ">
                Features That Set Us Apart
            </h1>
            <v-row no-gutters>
                <v-col v-for="n in 5" :key="n" cols="12" sm="4">
                    <v-sheet class="ma-2 pa-2" style="background: transparent;">
                        <template v-if="n === 1">

                            <v-col class="justify-center flex-column">

                                <span class="green-circle-outline">
                                    <v-icon color="white" size="x-large">mdi-forum</v-icon>
                                </span>
                                <p style="font-weight: 700; font-size: 20px; line-height: 30px; text-align: center;">
                                    Instant Messaging</p>
                                <p style="text-align: center;">
                                    Send messages instantly to your audience's WhatsApp accounts.
                                </p>



                            </v-col>
                        </template>
                        <template v-else-if="n === 2">

                            <v-col class="justify-center flex-column">

                                <span class="green-circle-outline">
                                    <v-icon color="white" size="x-large" icon="mdi-device-reset">mdi-history</v-icon>
                                </span>
                                <p style="font-weight: 700; font-size: 20px; line-height: 30px; text-align: center;">
                                    Media Sharing </p>
                                <p style="text-align: center;">
                                    Share images, videos, and documents to enhance your messages.
                                </p>



                            </v-col>

                        </template>

                        <template v-else-if="n === 3">
                            <v-col class="justify-center flex-column">

                                <span class="green-circle-outline">
                                    <v-icon color="white" size="x-large">mdi-calendar-month
                                    </v-icon>
                                </span>
                                <p style="font-weight: 700; font-size: 20px; line-height: 30px; text-align: center;">
                                    Personalization</p>
                                <p style="text-align: center;">
                                    Craft personalized messages for a more intimate connection.
                                </p>



                            </v-col>

                        </template>

                        <template v-else-if="n === 4">
                            <v-col class="justify-center flex-column">

                                <span class="green-circle-outline">
                                    <v-icon color="white" size="x-large">mdi-shield-check
                                    </v-icon>
                                </span>
                                <p style="font-weight: 700; font-size: 20px; line-height: 30px; text-align: center;">
                                    Detailed Reports</p>
                                <p style="text-align: center;">
                                    Track the delivery status and success of your WhatsApp campaigns.
                                </p>



                            </v-col>

                        </template>
                        <template v-else-if="n === 5">
                            <v-col class="justify-center flex-column">

                                <span class="green-circle-outline">
                                    <v-icon color="white" size="x-large">mdi-account-check
                                    </v-icon>
                                </span>
                                <p style="font-weight: 700; font-size: 20px; line-height: 30px; text-align: center;">
                                    API Integration</p>
                                <p style="text-align: center;">
                                    Seamlessly integrate our WhatsApp services with your existing systems.
                                </p>



                            </v-col>
                        </template>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-col>

        <DevelopersComponent />


        <v-container style="padding: 4rem; background-color: #FFFFFF;">
            <h1 style="text-align: left; font-weight: 600; font-size: 2rem; line-height: 48px;"> Discover the powerful
                services
                offered by VasPro to optimize your communication strategy on WhatsApp. </h1>
            <v-row class="d-flex flex-md-row justify-center pt-16">

                <v-col lg="6 pr-md-16 ">
                    <img src="@/assets/reach.svg" alt="reach" width="100%" />
                </v-col>
                <v-col>
                    <v-expansion-panels>
                        <v-expansion-panel style="border-radius: 10px; min-height: 53px; margin: 6px;">
                            <v-expansion-panel-title class="expansion-titles">
                                Marketing Campaigns
                            </v-expansion-panel-title>
                            <v-expansion-panel-text align="left">
                                <ul>
                                    <li>
                                        <p>Elevate your marketing efforts by reaching your audience directly on WhatsApp.
                                        </p>
                                    </li>
                                    <li>
                                        <p>Share promotions, offers, and product updates seamlessly.
                                        </p>
                                    </li>
                                </ul>
                            </v-expansion-panel-text>
                        </v-expansion-panel>

                        <v-expansion-panel style="border-radius: 10px; min-height: 53px; margin: 6px;">
                            <v-expansion-panel-title class="expansion-titles">
                                Customer Support
                            </v-expansion-panel-title>
                            <v-expansion-panel-text align="left">
                                <ul>
                                    <li>
                                        <p>Engage your audience with targeted marketing campaigns using our robust bulk SMS
                                            platform.</p>
                                    </li>
                                    <li>
                                        <p>Deliver promotions, offers, and announcements instantly.</p>
                                    </li>
                                </ul>
                            </v-expansion-panel-text>
                        </v-expansion-panel>

                        <v-expansion-panel style="border-radius: 10px; min-height: 53px; margin: 6px;">
                            <v-expansion-panel-title class="expansion-titles">
                                Appointment Reminders
                            </v-expansion-panel-title>
                            <v-expansion-panel-text align="left">
                                <ul>
                                    <li>
                                        <p>Engage your audience with targeted marketing campaigns using our robust bulk SMS
                                            platform.</p>
                                    </li>
                                    <li>
                                        <p>Deliver promotions, offers, and announcements instantly.</p>
                                    </li>
                                </ul>
                            </v-expansion-panel-text>
                        </v-expansion-panel>

                        <v-expansion-panel style="border-radius: 10px; min-height: 56px; margin: 6px;">
                            <v-expansion-panel-title class="expansion-titles">
                                Event Updates
                            </v-expansion-panel-title>
                            <v-expansion-panel-text align="left">
                                <ul>
                                    <li>
                                        <p>Engage your audience with targeted marketing campaigns using our robust bulk SMS
                                            platform.</p>
                                    </li>
                                    <li>
                                        <p>Deliver promotions, offers, and announcements instantly.</p>
                                    </li>
                                </ul>
                            </v-expansion-panel-text>
                        </v-expansion-panel>

                        <v-expansion-panel style="border-radius: 10px; min-height: 56px; margin: 6px;">
                            <v-expansion-panel-title class="expansion-titles">
                                Surveys & Feedback
                            </v-expansion-panel-title>
                            <v-expansion-panel-text align="left">
                                <ul>
                                    <li>
                                        <p>Engage your audience with targeted marketing campaigns using our robust bulk SMS
                                            platform.</p>
                                    </li>
                                    <li>
                                        <p>Deliver promotions, offers, and announcements instantly.</p>
                                    </li>
                                </ul>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
            </v-row>
        </v-container>

        <v-row class="d-flex flex-md-row justify-center" style="background-color: #F2FAF4; padding: 4rem;">

            <v-col style="min-width: 500px;">
                <h1 style="color: #183B56; font-size: 35px; font-weight: 800; line-height: 52.5px;">Sign Up and get to enjoy
                    our
                    services</h1>
                <p style="color: #183B56; font-size: 20px;">Powerful Bulk SMS Services for Seamless Communication</p>
            </v-col>
            <v-btn
                style="height: 78px; border-radius: 12px; background-color: #26A842; color: white; text-transform: capitalize; min-width: 300px;">
                Get Started
            </v-btn>
        </v-row>
        <v-container style="height: 200px;">

        </v-container>
    </v-main>
</template>

<script>
import DevelopersComponent from '@/components/landing_components/DevelopersComponent.vue'
export default {
    name: 'WhatsappComponent',
    components: {
        DevelopersComponent
    }
}
</script>

<style></style>