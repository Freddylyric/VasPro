<template>
        <v-container  mt-16>

            <div id="surveys-section" class="section">
   
   <v-row class="mb-8 mt-8">


<v-col lg="6" class="survey" >
<h1 class=" mb-2" style="font-size: 32px;">About Surveys.</h1>
<p style="font-size: 16px; color: #183B56; line-height: 1.5; margin-bottom: 10px;">
Survey is a powerful way to engage with your audience, 
understand their needs, and ultimately win more clients. 

Our user-friendly system <br> <br> <br> seamlessly integrates surveys with SMS campaigns, providing you with a
comprehensive solution to elevate your marketing efforts and achieve sustainable growth.
</p>
<v-row class="mt-4">

</v-row>
</v-col>
<v-col lg="6" class="survey">
<img src="../../assets/engage.svg"  width="485px" height="309px" />
</v-col>
</v-row>
<v-row class="column-item">
<v-col >
<div  >
<h1  style="font-size: 38px; color: #183B56; font-weight: bold; padding-left: 26px;">20%</h1>
<h1 style="font-size: 16px; color: #183B56; font-weight: lighter;">Conversion Rates</h1>
<!-- Add your content for each column item here -->
</div>
</v-col>
<v-col>
<div  >
<h1  style="font-size: 38px; color: #183B56; font-weight: bold;  padding-left: 26px;">40%</h1>
<h1 style="font-size: 16px; color: #183B56; font-weight: lighter;">Repeat Customers</h1>
<!-- Add your content for each column item here -->
</div>
</v-col>
<v-col>
<div  >
<h1  style="font-size: 38px; color: #183B56; font-weight: bold;  padding-left: 14px;">25%</h1>
<h1 style="font-size: 16px; color: #183B56; font-weight: lighter;">Sales Boost</h1>
<!-- Add your content for each column item here -->
</div>
</v-col>
<v-col>
<div  >
<h1  style="font-size: 38px; color: #183B56; font-weight: bold;">80%</h1>
<h1 style="font-size: 16px; color: #183B56; font-weight: lighter;"> Feedback</h1>
<!-- Add your content for each column item here -->
</div>
</v-col>
<v-col>
<div  >
<h1  style="font-size: 38px; color: #183B56; font-weight: bold;  padding-left: 28px;">15%</h1>
<h1 style="font-size: 14px; color: #183B56; font-weight: lighter;">Reduced marketing costs</h1>
<!-- Add your content for each column item here -->
</div>
</v-col>
</v-row>
<h1  class="boost" style="color: #183B56; font-weight: 600; font-size:32px; padding-top: 80px;">Conducting Surveys for your business shows...</h1>
<v-row class="mb-8 mt-8">

<v-col lg="6" class="survey">
  <v-container class="rounded-image"  style="background-color: #D9D9D9; width: 394px; height: 674px;">
    <img src="../../assets/pexel.png" alt="Image" class="centered-image"  />

  </v-container>

</v-col>
<v-col lg="6" class="survey" >
<v-container class="research" style="height: 171px;">
<v-row>
<h1 class="mb-2" style="font-size: 16px; color: #183B56; font-weight: 600;">
Academic Research.
</h1>
<v-spacer></v-spacer>
<v-icon @click="toggleVisibility">mdi-chevron-down</v-icon>
<v-expand-transition>
<div v-show="isVisible">
<h1 class=" mb-2" style="font-size: 16px; font-weight: 400;">. Collecting data for research studies..</h1>
<h1 class="mb-2" style="font-size: 16px; font-weight: 400;">. Conducting experiments or observational studies.</h1>
<h1 class="mb-2" style="font-size: 16px; font-weight: 400;">. Gathering information for academic theses or dissertations..</h1>
</div>
</v-expand-transition>
</v-row>
</v-container>


<v-container class="research">

<v-row>
<h1 class="mb-2" style="font-size: 16px; color: #183B56; font-weight: 600;">
Market Research.
</h1>
<v-spacer></v-spacer>
<v-icon @click="toggleVisibility">mdi-chevron-down</v-icon>

<v-expand-transition>
<div v-show="isVisible">
<h1 class=" mb-2" style="font-size: 16px; font-weight: 400;">. Collecting data for research studies..</h1>
<h1 class="mb-2" style="font-size: 16px; font-weight: 400;">. Conducting experiments or observational studies.</h1>
<h1 class="mb-2" style="font-size: 16px; font-weight: 400;">. Gathering information for academic theses or dissertations..</h1>
</div>
</v-expand-transition>
</v-row>
</v-container>
<v-container class="research">

<v-row>
<h1 class="mb-2" style="font-size: 16px; color: #183B56; font-weight: 600;">
Customer Satisfaction.
</h1>
<v-spacer></v-spacer>
<v-icon @click="toggleVisibility">mdi-chevron-down</v-icon>

<v-expand-transition>
<div v-show="isVisible">
<h1 class=" mb-2" style="font-size: 16px; font-weight: 400;">. Collecting data for research studies..</h1>
<h1 class="mb-2" style="font-size: 16px; font-weight: 400;">. Conducting experiments or observational studies.</h1>
<h1 class="mb-2" style="font-size: 16px; font-weight: 400;">. Gathering information for academic theses or dissertations..</h1>
</div>
</v-expand-transition>
</v-row>
</v-container>  


<v-container class="research">

<v-row >
<h1 class="mb-2" style="font-size: 16px; color: #183B56; font-weight: 600;">
Employee Feedback.
</h1>
<v-spacer></v-spacer>
<v-icon @click="toggleVisibility">mdi-chevron-down</v-icon>

<v-expand-transition>
<div v-show="isVisible">
<h1 class=" mb-2" style="font-size: 16px; font-weight: 400;">. Collecting data for research studies..</h1>
<h1 class="mb-2" style="font-size: 16px; font-weight: 400;">. Conducting experiments or observational studies.</h1>
<h1 class="mb-2" style="font-size: 16px; font-weight: 400;">. Gathering information for academic theses or dissertations..</h1>
</div>
</v-expand-transition>
</v-row>
</v-container>
<v-container class="research">

<v-row>
<h1 class="mb-2" style="font-size: 16px; color: #183B56; font-weight: 600;">
Academic Research.
</h1>
<v-spacer></v-spacer>
<v-icon @click="toggleVisibility">mdi-chevron-down</v-icon>

<v-expand-transition>
<div v-show="isVisible">
<h1 class=" mb-2" style="font-size: 16px; font-weight: 400;">. Collecting data for research studies..</h1>
<h1 class="mb-2" style="font-size: 16px; font-weight: 400;">. Conducting experiments or observational studies.</h1>
<h1 class="mb-2" style="font-size: 16px; font-weight: 400;">. Gathering information for academic theses or dissertations..</h1>
</div>
</v-expand-transition>
</v-row>
</v-container>
<v-row class="mt-4">

</v-row>

</v-col>
</v-row>
<h1  class="boost" style="color: #183B56; font-weight: 600; font-size:32px; padding-top: 80px;">Features That Set Us Apart.</h1>
<v-container class="survey">

<v-row justify="center" align-center>
<v-col class="text-center">
<v-avatar class="rounded-icon" >
<img src="../../assets/mon.png" alt="Image" width="34px" height="34px" />
</v-avatar> 

<h1 style="color: #183B56; font-weight: 600; font-size: 20px; text-align: center;">Clear Objectives</h1>
<p style="font-weight: 400; font-size: 16px; text-align: center;">Clearly defined purpose and goals of the survey with guidelines for the design and analysis.</p>
</v-col>
<v-col class="text-center">
<v-avatar class="rounded-icon" >
<v-icon style="color: #ffffff;">mdi-history</v-icon>
</v-avatar>   
<h1  style="color: #183B56; font-weight: 600; font-size:20px;text-align: center; ">Realtime reports</h1>
<p  style="font-weight: 400; font-size:16px; text-align: center;">
Track down all your transactions for analysis and record keeping..</p>

</v-col>
<v-col class="text-center">
<v-avatar class="rounded-icon" >
<v-icon style="color: #ffffff;">mdi-calendar-month-outline</v-icon>
</v-avatar>    
<h1  style="color: #183B56; font-weight: 600; font-size:20px;text-align: center; ">Multi-triggers </h1>
<p  style="font-weight: 400; font-size:16px;text-align: center;  ">
Send Bulk payments at a future date and time automatically from your payment wallet to your users.</p>

</v-col>
</v-row> 



<v-row justify="center" align-center>
<v-col class="text-center">
<v-avatar class="rounded-icon" >
<img src="../../assets/mon.png" alt="Image" width="34px" height="34px" />
</v-avatar> 

<h1 style="color: #183B56; font-weight: 600; font-size: 20px; text-align: center;">Clear Objectives</h1>
<p style="font-weight: 400; font-size: 16px; text-align: center;">Clearly defined purpose and goals of the survey with guidelines for the design and analysis.</p>
</v-col>
<v-col class="text-center">
<v-avatar class="rounded-icon" >
<v-icon style="color: #ffffff;">mdi-history</v-icon>
</v-avatar>    
<h1  style="color: #183B56; font-weight: 600; font-size:20px;text-align: center; ">Realtime reports</h1>
<p  style="font-weight: 400; font-size:16px; text-align: center;">
Track down all your transactions for analysis and record keeping..</p>

</v-col>
<v-col class="text-center">
<v-avatar class="rounded-icon" >
<v-icon style="color: #ffffff;">mdi-calendar-month-outline</v-icon>
</v-avatar> 
<h1  style="color: #183B56; font-weight: 600; font-size:20px;text-align: center; ">Multi-triggers </h1>
<p  style="font-weight: 400; font-size:16px;text-align: center;  ">
Send Bulk payments at a future date and time automatically from your payment wallet to your users.</p>

</v-col>
</v-row> 



</v-container> 

<v-row class="survey">
  <img src="../../assets/nel.png" alt="Image" width="686px" height="433px" />
<v-col justify-center align-center style="padding-top: 160px;">
  <h1  style="color: #183B56; font-weight: 600; font-size:20px;text-align: center; ">Ready to Harness the Power of Surveys </h1>
  <p  style="font-weight: 400; font-size:16px;text-align: center;  ">
    Get started with our survey services today. Contact us for a free consultation, and let's discuss how we can tailor our survey solutions to meet your unique needs..</p>

</v-col>
</v-row>
</div>  

</v-container>
<Footer></Footer>

</template>
<script>
import Footer from '../Footer.vue';

export default {
  created () {
  },
    components: {
    Footer,
    
  },
watch: {
},
  data() {
    return {
       isVisible: false,
    };
  },
  methods: {
  toggleVisibility() {
    this.isVisible = !this.isVisible;
  },
}

};
</script>

<style scoped>
 .survey{
    padding-top: 80px;
  }
  .boost{
    text-align: center;
  }
  .research {
  border-radius: 10px;
  width: 492px;
  background-color: #FFFFFF;
  overflow:visible; 
  margin-bottom: 20px;
  padding: 20px;
}
.rounded-icon{
  background-color: #26A842;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  overflow: hidden;
  margin-bottom: 20px;

  
}
.research {
  border-radius: 10px;
  width: 492px;
  background-color: #FFFFFF;
  overflow:visible; 
  margin-bottom: 20px;
  padding: 20px;
}
.rounded-image {
  border-radius: 60%;

}
.centered-image {
  text-align: center;
  border-radius: 60%;
  width: 405px;
  height: 674px;
  margin-right:50px;

}
</style>