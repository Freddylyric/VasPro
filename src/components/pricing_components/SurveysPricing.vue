<template>


    <div class="surveys pb-16 pt-16 pl-16 pr-16 " style="background-color: #fff;">
            
                    <v-row class="d-flex flex-md-row" >
                        
                       <v-col xs="0" lg="0">
    
                                <v-card
                                color="#FAFAFA"
                                elevation="6"
                                class="mb-4 pb-2"
                                style="border-radius: 10px; height: 72px;"
    
                                >
                                <div class="d-flex flex-no-wrap justify-space-between">
                                    <div>
                                        <v-card-title style="text-align: left;" class="card-title">Client premium per response</v-card-title>
                                        <v-card-subtitle class="card-subtitle">Charged when customer responds to a question</v-card-subtitle>
                                    </div>
                                    <v-card-title class="card-title">
                                        KES. 4.50
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
                                        <v-card-title style="text-align: left;" class="card-title">Survey template</v-card-title>
                                    
                                    </div>
                                    
                                        <v-card-title class="card-title">
                                            KES. 5,000.00                                    
                                        </v-card-title>
                                    
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
                                        <v-card-title style="text-align: left;" class="card-title">Demographic Data Addons</v-card-title>
                                        <v-card-subtitle class="card-subtitle">Includes Age, Gender and Location.</v-card-subtitle>
                                    </div>
                                    
                                        <v-card-title class="card-title">
                                            KES. 4,500.00
                                    </v-card-title>
                                    
                                   
                                </div>
                            </v-card>
                       </v-col>

                       <v-col xs="0" lg = "0 d-flex flex-column justify-center" class="pl-md-16">
                            <h1>Surveys</h1>
                            <p>All prices are exclusive of VAT. Prices are in Kenyan Shillings.</p>
                            <p>Currency conversion is only done on the US Dollar and not 
    in any other currency.</p>
                            <v-btn color="green" class=" pb-9 pt-4" style="  border-radius: 10px; text-transform: capitalize; width: 40%;"> Get Started</v-btn>
                        </v-col>
                    </v-row>
             
    
            </div>
    </template>
    
    <script>
    export default {
        name: 'Surveys',
    
     
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