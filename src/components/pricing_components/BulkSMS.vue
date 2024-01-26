<template>
    <div class="bulk-sms pb-16 pt-16 pl-16 pr-16 " style="background-color: #F4F4F4;">
        <v-col xs="12" lg="0 d-flex flex-column align-center ">
            <v-select variant="outlined" class="d-flex  pb-16" v-model="location" :items="locations">

                <template v-slot:prepend-inner>
                    <img :src="countryImages[location]" style="width: 20px; height: 20px; border-radius: 5px;" />

                </template>
            </v-select>
        </v-col>


        <v-row class="d-flex flex-md-row">
            <v-col xs="0" lg="0 d-flex flex-column justify-center mr-16">
                <h1>Bulk SMS </h1>
                <p>All prices are exclusive of VAT. Prices are in Kenyan Shillings.</p>
                <p>Currency conversion is only done on the US Dollar and not
                    in any other currency.</p>
                <v-btn color="green" class=" pb-9 pt-4"
                    style="  border-radius: 10px; text-transform: capitalize; width: 40%;"> Get Started</v-btn>

            </v-col>


            <v-col xs="0" lg="0">

                <v-card color="#FAFAFA" elevation="6" class="mb-4 pb-2" style="border-radius: 10px;">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title style="text-align: left;" class="card-title">Cost per SMS
                                (Kenya)</v-card-title>
                            <v-card-subtitle class="card-subtitle">Applies to Safaricom and Airtel
                                MNOs</v-card-subtitle>
                        </div>
                        <v-card-title class="card-title">
                            KES. 0.80
                        </v-card-title>
                    </div>
                </v-card>


                <v-card color="#FAFAFA" elevation="6" class="mb-4 pb-2" style="border-radius: 10px;">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title style="text-align: left;" class="card-title">Cost per SMS </v-card-title>
                            <v-card-subtitle class="card-title">(International)</v-card-subtitle>
                        </div>
                        <v-card-subtitle class=" pt-5" style="text-decoration: underline;">
                            Click to download the price list
                        </v-card-subtitle>
                    </div>
                </v-card>

                <v-card color="#FAFAFA" elevation="6" class="mb-4 pb-2" style="border-radius: 10px;">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title style="text-align: left;" class="card-title">Safaricom sender
                                ID</v-card-title>
                            <v-card-subtitle class="card-subtitle">Alpha-Numeric</v-card-subtitle>
                        </div>
                        <div>
                            <v-card-title class="card-title">
                                KES. 10,000.00
                            </v-card-title>
                            <v-card-subtitle style="text-align: end;">
                                One-off fee
                            </v-card-subtitle>
                        </div>
                    </div>
                </v-card>


                <v-card color="#FAFAFA" elevation="6" class="mb-4 pb-2" style="border-radius: 10px;">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title style="text-align: left;" class="card-title">Airtel Sender ID</v-card-title>
                            <v-card-subtitle class="card-subtitle">Alpha-Numeric.</v-card-subtitle>
                        </div>
                        <div>
                            <v-card-title class="card-title">
                                KES. 10,000.00
                            </v-card-title>
                            <v-card-subtitle style="text-align: end;">
                                One-off fee
                            </v-card-subtitle>
                        </div>

                    </div>
                </v-card>
            </v-col>
        </v-row>


    </div>
</template>

<script>
export default {
    name: 'BulkSMS',

    data() {
        return {
            locations: ["Kenya", "Tanzania", "Uganda"],
            location: "Kenya",

            countryImages: {
                Kenya: "@/assets/Flag_of_Kenya.svg",
                Tanzania: "@/assets/Flag_of_Tanzania.svg",
                Uganda: "@/assets/Flag_of_Uganda.svg"
            }
        };
    },




}
</script>
<style  scoped>
.country-flag {
    width: 24px;
    height: 24px;
    margin-right: 8px;
}

.card-title {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #585858;

}

.card-subtitle {
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #585858;
}
</style>