<template>
  <v-main style="padding: 4rem; background: white;">

    <v-row class="d-flex flex-md-row">


      <v-col xs="0" lg="0 d-flex flex-column justify-center" class="pr-md-16">
        <h1>About Bulk SMS </h1>
        <p>Bulk SMS (Short Message Service) refers to the practice of sending a large volume of text messages to a
          predetermined group of recipients simultaneously.</p>
        <p> This communication method is widely used by businesses, organizations, and individuals for various purposes,
          including marketing, information dissemination, and communication.</p>
      </v-col>

      <v-col lg="0" xs="0" style="min-width: 600px; max-width: fit-content;">
        <img width="100%" src="@/assets/bulksms.svg" alt="hero image">
      </v-col>
    </v-row>
    <v-row style="height: 100px; background: #F2FAF4; border-radius: 24px; box-shadow: 2rem;"
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
  </v-main>


  <v-container class="py-16" background-color="#F8F8F8">
    <h1 style="font-weight: 800; font-size: 30; line-height: 45px; text-align: center; ">Features That Set Us Apart</h1>
    <v-row no-gutters>
      <v-col v-for="n in 5" :key="n" cols="12" sm="4">
        <v-sheet class="ma-2 pa-2" style="background: transparent;">
          <template v-if="n === 1">

            <v-col class="justify-center flex-column">

              <span class="green-circle-outline">
                <v-icon color="white" size="x-large">mdi-forum</v-icon>
              </span>
              <p style="font-weight: 700; font-size: 20px; line-height: 30px; text-align: center;">Instant Messaging</p>
              <p style="text-align: center;">Reach your audience instantly with our lightning-fast delivery.</p>



            </v-col>
          </template>
          <template v-else-if="n === 2">

            <v-col class="justify-center flex-column">

              <span class="green-circle-outline">
                <v-icon color="white" size="x-large" icon="mdi-device-reset">mdi-history</v-icon>
              </span>
              <p style="font-weight: 700; font-size: 20px; line-height: 30px; text-align: center;">Personalization</p>
              <p style="text-align: center;">Tailor your messages for a more engaging user experience.</p>



            </v-col>

          </template>

          <template v-else-if="n === 3">
            <v-col class="justify-center flex-column">

              <span class="green-circle-outline">
                <v-icon color="white" size="x-large">mdi-calendar-month
                </v-icon>
              </span>
              <p style="font-weight: 700; font-size: 20px; line-height: 30px; text-align: center;">Scheduled Messaging</p>
              <p style="text-align: center;">Plan and automate your campaigns with our easy scheduling tools.</p>



            </v-col>

          </template>

          <template v-else-if="n === 4">
            <v-col class="justify-center flex-column">

              <span class="green-circle-outline">
                <v-icon color="white" size="x-large">mdi-shield-check
                </v-icon>
              </span>
              <p style="font-weight: 700; font-size: 20px; line-height: 30px; text-align: center;">Detailed Reports</p>
              <p style="text-align: center;">Track the success of your campaigns with comprehensive delivery reports.</p>



            </v-col>

          </template>
          <template v-else-if="n === 5">
            <v-col class="justify-center flex-column">

              <span class="green-circle-outline">
                <v-icon color="white" size="x-large">mdi-account-check
                </v-icon>
              </span>
              <p style="font-weight: 700; font-size: 20px; line-height: 30px; text-align: center;">API Integration</p>
              <p style="text-align: center;">Seamlessly integrate our bulk SMS services with your systems using our
                developer-friendly APIs.</p>



            </v-col>
          </template>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

  <v-row class="d-flex flex-md-row justify-center" style="background-color: #183B56; padding: 4rem;">

    <v-col style="min-width: 500px;">
      <h1 style="color: white; font-size: 35px; font-weight: 800; line-height: 52.5px;">Sign Up and get to enjoy our
        services</h1>
      <p style="color: white; font-size: 20px;">Powerful Bulk SMS Services for Seamless Communication</p>
    </v-col>
    <v-btn
      style="height: 78px; border-radius: 12px; background-color: #26A842; color: white; text-transform: capitalize; min-width: 300px;">
      Get Started
    </v-btn>
  </v-row>

  <v-col style="padding: 4rem; background-color: #FFFFFF;">
    <h1 style="text-align: center;">Our Services</h1>
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
                  <p>Engage your audience with targeted marketing campaigns using our robust bulk SMS platform.</p>
                </li>
                <li>
                  <p>Deliver promotions, offers, and announcements instantly.</p>
                </li>
              </ul>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel style="border-radius: 10px; min-height: 53px; margin: 6px;">
            <v-expansion-panel-title class="expansion-titles">
              Transactional Messaging
            </v-expansion-panel-title>
            <v-expansion-panel-text align="left">
              <ul>
                <li>
                  <p>Engage your audience with targeted marketing campaigns using our robust bulk SMS platform.</p>
                </li>
                <li>
                  <p>Deliver promotions, offers, and announcements instantly.</p>
                </li>
              </ul>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel style="border-radius: 10px; min-height: 53px; margin: 6px;">
            <v-expansion-panel-title class="expansion-titles">
              Event Reminders
            </v-expansion-panel-title>
            <v-expansion-panel-text align="left">
              <ul>
                <li>
                  <p>Engage your audience with targeted marketing campaigns using our robust bulk SMS platform.</p>
                </li>
                <li>
                  <p>Deliver promotions, offers, and announcements instantly.</p>
                </li>
              </ul>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel style="border-radius: 10px; min-height: 56px; margin: 6px;">
            <v-expansion-panel-title class="expansion-titles">
              Emergency Alerts
            </v-expansion-panel-title>
            <v-expansion-panel-text align="left">
              <ul>
                <li>
                  <p>Engage your audience with targeted marketing campaigns using our robust bulk SMS platform.</p>
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
                  <p>Engage your audience with targeted marketing campaigns using our robust bulk SMS platform.</p>
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
  </v-col>
</template>

<script>
export default {
  name: 'BulkSMSComponent'
}
</script>

<style>
.green-circle-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #26A842;
}

.expansion-titles {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #183B56;
}
</style>