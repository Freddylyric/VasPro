<template>


    <div class="shortcodes pb-16 pt-16 pl-16 pr-16 " style="background-color: #F4F4F4;">
                   
                    <v-row class="d-flex flex-md-row" >
                        <v-col xs="9" lg = "0 d-flex flex-column justify-center" class="pr-md-16">
                            <h1>Shortcodes</h1>
                            <p>All prices are exclusive of VAT. Prices are in Kenyan Shillings.</p>
                            <p>Currency conversion is only done on the US Dollar and not 
    in any other currency.</p>
                            <v-btn color="green" class=" pb-9 pt-4" style="  border-radius: 10px; text-transform: capitalize; width: 40%; min-width: 120px;"> Get Started</v-btn>
                        </v-col>
    
    
                       <v-col xs="0" lg="0">
                        <div>
                            <h4 style="color: #585858;">Shared Shortcode</h4>
                        </div>
    
                                <v-card
                                color="#FAFAFA"
                                elevation="6"
                                class="mb-4 pb-2"
                                style="border-radius: 10px; height: 72px;"
    
                                >
                                <div class="d-flex flex-no-wrap justify-space-between">
                                    <div>
                                        <v-card-title style="text-align: left;" class="card-title"> Setup fee</v-card-title>
                                        <v-card-subtitle class="card-subtitle">Applies to Safaricom and Airtel MNOs</v-card-subtitle>
                                    </div>
                                    <v-card-title class="card-title">
                                        FREE
                                    </v-card-title>
                                </div>
                            </v-card>
    
    
                            <v-card
                                color="#FAFAFA"
                                elevation="6"
                                class="mb-4 pb-2"
                                style="border-radius: 10px; height: 72px;"
    
                                >
                                <div class="d-flex flex-no-wrap justify-space-between" >
                                    <div>
                                        <v-card-title style="text-align: left;" class="card-title">Monthly Maintenance</v-card-title>
                                    </div>
                                    <div>
                                        <v-card-title class="card-title">
                                            KES. 5,000.00
                                    </v-card-title>
                                    <v-card-subtitle class="card-subtitle text-right">each MNO</v-card-subtitle>
                                </div>
                                </div>
                            </v-card>
    
                            <v-card
                                color="#FAFAFA"
                                elevation="6"
                                class="mb-4 pb-2"
                                style="border-radius: 10px; height: 72px;"
    
    
                                >
                                <div class="d-flex flex-no-wrap justify-space-between" >
                                    <div>
                                        <v-card-title style="text-align: left;" class="card-title">Keywords</v-card-title>
                                        <v-card-subtitle class="card-subtitle">One-off fee</v-card-subtitle>
                                    </div>
                                    
                                        <v-card-title class="card-title">
                                            KES. 3,000.00
                                    </v-card-title>
                                    
                                </div>
                            </v-card>
    
                            <div class="mt-10">
                            <h4 style="color: #585858;">Dedicated Shortcode</h4>
                        </div>
    
                            <v-card
                                color="#FAFAFA"
                                elevation="6"
                                class="mb-4 pb-2"
                                style="border-radius: 10px; height: 72px;"
                                
    
                                >
                                <div class="d-flex flex-no-wrap justify-space-between">
                                    <div>
                                        <v-card-title style="text-align: left;" class="card-title">Setup fee</v-card-title>
                                        <v-card-subtitle class="card-subtitle">Applies to Safaricom and Airtel MNOs</v-card-subtitle>
                                    </div>
                                    
                                    <div>
                                        <v-card-title class="card-title">
                                            KES. 15,000.00
                                    </v-card-title>
                                    <v-card-subtitle class="card-subtitle text-right">each MNO</v-card-subtitle>
                                </div>
                                   
                                   
                                </div>
                            </v-card>

                            <v-card
                                color="#FAFAFA"
                                elevation="6"
                                class="mb-4 pb-2"
                                style="border-radius: 10px; height: 72px;"
                                
    
                                >
                                <div class="d-flex flex-no-wrap justify-space-between">
                                    <div>
                                        <v-card-title style="text-align: left;" class="card-title"> Monthly Maintenance</v-card-title>
                                    </div>
                                    
                                    <div>
                                        <v-card-title class="card-title">
                                            KES. 15,000.00
                                    </v-card-title>
                                    <v-card-subtitle class="card-subtitle text-right">each MNO</v-card-subtitle>
                                </div>
                                   
                                   
                                </div>
                            </v-card>
                       </v-col>
                    </v-row>
    
            </div>
    </template>
    
    <script>
    export default {
        name: 'Rewards',
    
        
    }
    </script>
    <style  scoped>
    
    
    
    .card-title{
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: #585858;
    
    }
    .card-subtitle{
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: left;
      color: #585858;
    }
    
    
    
    </style>