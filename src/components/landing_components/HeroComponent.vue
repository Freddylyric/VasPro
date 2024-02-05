<template>
  <v-container class="ml-4 ml-md-16 mr-16"  style="min-width: 200px; background-color: #F8F8F8;padding-top: 4rem;
    ">
  <v-row class="d-flex flex-md-row "
   >
    <v-col xs="0" lg="0 d-flex flex-column justify-center" style="margin-right: 6rem; ">
      <!-- <h1 class="mt-16">
          Making
          <span class="highlighted-text">
            <span class="orange-box">Every</span>
          </span>
         <span> Interaction Count</span>
        </h1> -->

      <h1 class="mb-4" style="width: 349px;"> Making <span class="orange-box">Every</span>       </h1>

        <h1> Interaction Count
      </h1>
      <p>Our cutting-edge platform empowers you to connect with your customers,
        foster meaningful engagement, and propel the growth of your business.</p>

       
    <v-row class="d-sm-flex  mt-4 ml-1 d-md-none " >

      <v-btn color="#26A842" style="text-transform: capitalize;" @click="$router.push('/login')"> Login</v-btn>
      <v-btn variant="tonal" style="background-color:#26A842; color: white; text-transform: capitalize; "
          class="border-radius-16 ml-4" @click="$router.push('/signup')">
          Sign up
        </v-btn>
    </v-row>

      <v-btn color="green" class=" mt-4 d-none d-sm-flex "
        style=" height: 60px; border-radius: 10px; text-transform: capitalize; width: 50%;">
        Get Started</v-btn>
    </v-col>
    <v-col lg="0" xs="12" style=" max-width: fit-content; margin: 0 auto; ">
      <img width="100%" src="@/assets/hero.svg" alt="hero image">
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: 'HeroComponent'
}
</script>

<style >
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
.Hbtn {
  width: 266px;
  height: 282px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 12px;


}


/* .highlighted-text {
    position: relative;
    display: inline-block;
  }

  .orange-box {
    background-color: orange;
    padding: 4 5px; 
    position: absolute;
    bottom: 0;
    left: 0;
  } */


/* .orange-box {
  background-color: orange;
  position: relative;
  display: inline-block;
  padding: 0 8px; 
  z-index: 1; 
} */

.orange-box {
  position: relative;
  display: inline-block;
  background: linear-gradient(to top, rgb(255, 149, 0) 50%, rgba(0, 0, 0, 0) 50%);
  background-size: 100% 101%;
  background-position: 0 100%;
  transition: background-position 0.3s ease-in-out;

}
</style>
