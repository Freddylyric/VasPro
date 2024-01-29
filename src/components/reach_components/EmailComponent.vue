<template>
    <v-main style=" background: white;">


        <v-row lg="0 d-flex flex-md-row justify-center" style="padding-left: 4rem; padding-right: 4rem;">


            <v-col xs="0" lg="0 d-flex flex-column justify-center" class="pr-16">
                <h1 class="mb-6">About Email </h1>
                <p>Automated emails, also known as email automation or drip campaigns, refer to the practice of using
                    technology to send a series of pre-scheduled emails to a targeted audience based on specific triggers or
                    user behavior.

                </p>
                <p> The goal of automated emails is to streamline communication, engage users, and deliver relevant content
                    at strategic points in the customer journey.
                </p>
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
                                    Smart Triggers</p>
                                <p style="text-align: center;">
                                    Trigger emails based on user behavior, interactions, or milestones.
                                </p>



                            </v-col>
                        </template>
                        <template v-else-if="n === 2">

                            <v-col class="justify-center flex-column">

                                <span class="green-circle-outline">
                                    <v-icon color="white" size="x-large" icon="mdi-device-reset">mdi-history</v-icon>
                                </span>
                                <p style="font-weight: 700; font-size: 20px; line-height: 30px; text-align: center;">
                                    Analytics and Insights</p>
                                <p style="text-align: center;">
                                    Gain valuable insights with detailed analytics and reporting tools.
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
                                    Craft personalized and targeted emails for every segment of your audience.
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
                                    Multi-Channel Integration</p>
                                <p style="text-align: center;">
                                    Extend your reach by integrating with various communication channels.
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
                                    User-Friendly Interface</p>
                                <p style="text-align: center;">
                                    Our intuitive platform makes automation accessible to everyone.
                                </p>

                            </v-col>
                        </template>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-col>




        <v-col style=" background-color:white; padding: 4rem;">
            <h1 style=" font-weight: 800; font-size: 30; line-height: 45px;  ">
                Get to send automated Emails when sending...
            </h1>
            <p>Supercharge your marketing efforts, engage customers, and save time with our advanced automated email
                services.</p>
            <v-row no-gutters>
                <v-col v-for="n in 6" :key="n" cols="12" sm="4">
                    <v-sheet class="ma-2 pa-2" style="border: 1px solid #E5E5E5;">
                        <template v-if="n === 1">

                            <v-col class="justify-center flex-column">


                                <p style="font-weight: 700; font-size: 20px; line-height: 30px; ">
                                    Welcome Emails</p>
                                <p>
                                    Sent immediately after a user subscribes or signs up. Welcome emails set the tone for
                                    the relationship and often include a thank-you message.
                                </p>



                            </v-col>
                        </template>
                        <template v-else-if="n === 2">

                            <v-col class="justify-center flex-column">
                                <p style="font-weight: 700; font-size: 20px; line-height: 30px;">
                                    Onboarding Emails</p>
                                <p>
                                    Delivered in a series to new users to guide them through your product or service. These
                                    emails provide helpful information, tutorials, and tips to ensure users get the most
                                    value.
                                </p>

                            </v-col>

                        </template>

                        <template v-else-if="n === 3">
                            <v-col class="justify-center flex-column">


                                <p style="font-weight: 700; font-size: 20px; line-height: 30px; ">
                                    Educational Drip Campaigns</p>
                                <p>
                                    Series of emails that educate users about your products, services, or industry. These
                                    can be scheduled at intervals to gradually provide information and build understanding.
                                </p>



                            </v-col>

                        </template>

                        <template v-else-if="n === 4">
                            <v-col class="justify-center flex-column">


                                <p style="font-weight: 700; font-size: 20px; line-height: 30px; ">
                                    Event-triggered Emails</p>
                                <p>
                                    Based on specific user actions, such as downloading a resource or clicking on a link.
                                    Event-triggered emails can provide additional relevant content or express appreciation.
                                </p>



                            </v-col>

                        </template>
                        <template v-else-if="n === 5">
                            <v-col class="justify-center flex-column">

                                <p style="font-weight: 700; font-size: 20px; line-height: 30px; ">
                                    Feedback and Review </p>
                                <p>
                                    Sent after a user has made a purchase or interacted with your product or service.
                                    Request feedback or reviews to gather valuable insights and build social proof.
                                </p>

                            </v-col>
                        </template>


                        <template v-else-if="n === 6">
                            <v-col class="justify-center flex-column">

                                <p style="font-weight: 700; font-size: 20px; line-height: 30px; ">
                                    Re-engagement Email</p>
                                <p>
                                    Sent to inactive or dormant subscribers to rekindle their interest. These emails may
                                    include special offers, new content, or incentives to encourage users to re-engage.
                                </p>

                            </v-col>
                        </template>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-col>


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



        <DevelopersComponent />

        <v-container style="height: 200px;">

        </v-container>


    </v-main>
</template>

<script>
import DevelopersComponent from '@/components/landing_components/DevelopersComponent.vue'
export default {
    name: 'EmailComponent',
    components: {
        DevelopersComponent
    }

}
</script>

<style></style>