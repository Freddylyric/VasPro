<template>
    <div class=" mt-16 " style="background-color: #F8FCF9;  ">
        <v-row class="ml-md-16 mr-16">
            <v-container  class=" custom-container" style="max-width: 50%;  min-width: 430px;">
            <v-row >
                <v-col  style="max-width: 227px;">
                    <v-container class="ex">
                        <img src="@/assets/easygym.svg" alt="Easygym" width="188px" height="71px">
                    </v-container>
                    <v-container>
                        <img src="@/assets/springboard.svg" alt="Springboard" width="173px" height="92px">

                    </v-container>
                    <v-container class="ex">
                        <img src="@/assets/finberry.svg" alt="FinBerry" width="175px" height="92px">
                    </v-container>

                    <v-container class="ex">
                        <img src="@/assets/blueband.svg" alt="FinBerry" width="172px" height="98px">

                    </v-container>
          </v-col >
          <v-col style="max-width:  100px;">
                    <v-container class="pep" >
                        <img src="@/assets/peppinos.svg" alt="Easygym" width="71px" height="71px">
                    </v-container>
                    <v-container class="pep">
                        <img src="@/assets/tembo.svg" alt="Springboard" width="73px" height="75px">
                    </v-container>
                    <v-container class="pep">
                        <img src="@/assets/clarette.svg" alt="Clarette" width="80px" height="80px">
                    </v-container>
                    <v-container class="pep">
                        <img src="@/assets/kingdom.svg" alt="Kingdom" width="75px" height="74px">

                    </v-container>
          </v-col>
          <v-col  style="max-width: 227px;">
                    <v-container class="coke">
                        <img src="@/assets/cocacola.svg" alt="Cocacola" width="212px" height="69px">
                    </v-container>
                    <v-container class="gulf">
                        <img src="@/assets/gab.svg" alt="Gulf" width="187px" height="105px">
                    </v-container>
          </v-col >
        </v-row>
        </v-container>
            <v-col class="custom-containertitle" style="max-width: 50%; text-align: center; justify-content: center;" >     
        <v-container class="rounded-container">
          <h1 class="title">
            Join the group of brands that use <span class="greenText">Vaspro</span> to connect with their customers
          </h1>
        </v-container>
      </v-col>
        </v-row>
       
      
    </div>
</template>

<style scoped>

.custom-containertitle {
  /* Add your default styling for padding and margin */
  padding-left: 117px;
    margin: 10px;

  /* Media query to disable padding and margin on screens with a width less than 600px (adjust as needed) */
  @media (max-width: 600px) {
    text-align: center;
    margin: 0;
    padding-left: 50px;
    min-width: 378px;
    margin-top: 0%;
    margin-bottom: 0%;
    padding-top: 0%;

  }
}
@media screen   and (min-width: 400px){
    .title{
  font-size:2.25rem;
  font-weight: 800;
  line-height: 48px;
  font-family: Poppins;
font-weight: 700;
line-height: 57px;
letter-spacing: 0em;
text-align: center;
justify-content: center;
justify-self: center;
max-width: 479px;
max-height: 228px;
margin-top: 100px;
margin-bottom: 40px;
font: Poppins;
}

  }

.ex{
    width: 227px;
    height: 113px;
    background-color: #FFFFFF;
    margin-bottom: 10px;

}
.pep{
    width: 100px;
    height: 90px;
    background-color: #FFFFFF;
    margin-bottom: 10px;
    margin-left: 0%;
}
.coke{
    width: 227px;
    height: 113px;
    margin-bottom: 10px;
    margin-top: 100px;
    background-color: #FFFFFF;
}
.gulf{
    width: 227px;
    height: 113px;
    margin-bottom: 10px;
    background-color: #FFFFFF;


}
.greenText {
 font-family: Poppins;
font-size: 38px;
font-weight: 700;
line-height: 57px;
letter-spacing: 0em;
text-align: left;

color: #26A842;
}
@media (max-width: 600px) {
      .rounded-container {
      }
    }
</style>