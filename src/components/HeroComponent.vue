<template>
    <v-container class="dev-container mt-16">
        <v-row>

            <!-- <v-card lg = "6"
                loading="false"
                title="Making Every Interaction count"
                subtitle=""
                text="Our cutting-edge platform empowers you to connect with your customers,
                     foster meaningful engagement, and propel the growth of your business."
            
            >
                <v-card-actions>
                    <v-btn color="green" class ="white--text" x-large rounded>Get Started</v-btn>
                </v-card-actions>
            </v-card> -->
            <v-col lg = "6 d-flex flex-column"  >
                <h2 class="largeText mt-16">Making Every Interaction count</h2>
                <p class="mediumText">Our cutting-edge platform empowers you to connect with your customers,
                     foster meaningful engagement, and propel the growth of your business.</p>
                 <v-btn color="green" class="Hbtn pb-9" > Get Started</v-btn>
            </v-col>
            

            <v-col lg = "6">
                <img width="100%" src="../assets/hero.svg" alt="hero image">
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
export default {
    name: 'HeroComponent'
}
</script>

<style scoped>

.largeText {
  
  font-style: normal;
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 52px;
  letter-spacing: 0em;
  text-align: left;
  color: #183B56;
  margin-bottom: 20px;
}

.mediumText{
    font-family: 'Poppins';
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #183B56;
}
.Hbtn{
    width: 266px;
    height: 282px;
    margin-top: 20px;
    padding: 20px;
    border-radius: 12px;
  

}

</style>
