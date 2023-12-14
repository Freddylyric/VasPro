<template>
    <div class="dev-container" >
        <v-row> 
            <v-col xs="12" lg = "5 d-flex flex-column"  >
                <h1 class="mt-16">Making Every Interaction count</h1>
                <p>Our cutting-edge platform empowers you to connect with your customers,
                     foster meaningful engagement, and propel the growth of your business.</p>
                 <v-btn color="green" class="Hbtn pb-9" > Get Started</v-btn>
            </v-col>
            

            <v-col lg = "6" xs="12">
                <img width="100%" src="../assets/hero.svg" alt="hero image">
            </v-col>
        </v-row>
    </div>

</template>

<script>
export default {
    name: 'HeroComponent'
}
</script>

<style scoped>
.dev-container {
   background-color: #f8fcf9;
   padding: 5rem;

}
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

/* .mediumText{
    font-family: 'Poppins';
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #183B56;
} */
.Hbtn{
    width: 266px;
    height: 282px;
    margin-top: 20px;
    padding: 20px;
    border-radius: 12px;
  

}

</style>
