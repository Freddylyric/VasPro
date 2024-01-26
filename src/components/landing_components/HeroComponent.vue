<template>
  <v-row class="d-flex flex-md-row "
    style="min-width: 200px; background-color: #F8F8F8; padding-left: 4rem; padding-right: 4rem; padding-top: 4rem;">
    <v-col xs="0" lg="0 d-flex flex-column justify-center" style="margin-right: 6rem; ">
      <!-- <h1 class="mt-16">
          Making
          <span class="highlighted-text">
            <span class="orange-box">Every</span>
          </span>
         <span> Interaction Count</span>
        </h1> -->

      <h1 class="mb-4">
        Making <span class="orange-box">Every</span> Interaction Count
      </h1>
      <p>Our cutting-edge platform empowers you to connect with your customers,
        foster meaningful engagement, and propel the growth of your business.</p>
      <v-btn color="green" class=" mt-4 "
        style=" height: 60px; border-radius: 10px; text-transform: capitalize; width: 50%;">
        Get Started</v-btn>
    </v-col>


    <v-col lg="0" xs="0" style="min-width: 600px; max-width: fit-content; ">
      <img width="100%" src="@/assets/hero.svg" alt="hero image">
    </v-col>
  </v-row>
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
