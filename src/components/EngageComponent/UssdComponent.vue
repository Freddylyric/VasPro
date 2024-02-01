<template>
                <v-container  >

    <div id="ussd-section" class="section">
    <!-- Your USSD section content goes here -->
    <v-row class="mb-8 mt-8">
      
       
      <v-col lg="6" class="survey" >
        <h1 class=" mb-2" style="font-size: 32px;">About USSD.</h1>
        <p style="font-size: 14px; color: #183B56; line-height: 1.5; margin-bottom: 10px;">
          USSD, which stands for Unstructured Supplementary Service Data, is a communication protocol used in the telecommunications industry to enable
           the exchange of information between a mobile device and a service provider's computer. <br> <br> <br> Its simplicity, real-time nature, and accessibility make it suitable for a variety of applications, especially those
            that require quick and interactive communication between users and service providers..
</p>
          <v-row class="mt-4">
       
        </v-row>
      </v-col>
      <v-col lg="6" class="survey">
        <img src="../../assets/engage.svg"  width="485px" height="309px" />
      </v-col>
    </v-row>
    <v-row class="column-item" >
  <v-col >
    <div  >
      <h1  style="font-size: 38px; color: #183B56; font-weight: bold; padding-left: 26px;">20%</h1>
      <h1 style="font-size: 14px; color: #183B56; font-weight: lighter;">Conversion Rates</h1>
      <!-- Add your content for each column item here -->
    </div>
  </v-col>
  <v-col>
    <div  >
      <h1  style="font-size: 38px; color: #183B56; font-weight: bold;  padding-left: 26px;">40%</h1>
      <h1 style="font-size: 14px; color: #183B56; font-weight: lighter;">Repeat Customers</h1>
      <!-- Add your content for each column item here -->
    </div>
  </v-col>
  <v-col>
    <div  >
      <h1  style="font-size: 38px; color: #183B56; font-weight: bold;  padding-left: 14px;">25%</h1>
      <h1 style="font-size: 14px; color: #183B56; font-weight: lighter;">Sales Boost</h1>
      <!-- Add your content for each column item here -->
    </div>
  </v-col>
  <v-col>
    <div  >
      <h1  style="font-size: 38px; color: #183B56; font-weight: bold;">80%</h1>
      <h1 style="font-size: 14px; color: #183B56; font-weight: lighter;"> Feedback</h1>
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

  <h1  class="boost" style="color: #183B56; font-weight: 600; font-size:32px; padding-top: 80px;">Features That Set Us Apart.</h1>
<v-container class="survey">

<v-row justify="center" align-center>
  <v-col class="text-center">
    <v-avatar class="rounded-icon" >
  <img src="../../assets/thumb.png" alt="Image" width="18px" height="18px" />
</v-avatar> 

    <h1 style="color: #183B56; font-weight: 600; font-size: 20px; text-align: center;">Interactive USSD Sessions</h1>
    <p style="font-weight: 400; font-size: 14px; text-align: center;">Leverage interactive USSD sessions to engage your audience, collect data, and offer tailored services.</p>
  </v-col>
  <v-col class="text-center">
    <v-avatar class="rounded-icon" >
      <img src="../../assets/ec.png" alt="Image" width="18px" height="18px" />
</v-avatar>   
  <h1  style="color: #183B56; font-weight: 600; font-size:20px;text-align: center; ">Efficient Communication</h1>
    <p  style="font-weight: 400; font-size:14px; text-align: center;">
      Our USSD system streamlines communication, ensuring timely and relevant interactions with your audience..</p>

  </v-col>
  <v-col class="text-center">
    <v-avatar class="rounded-icon" >
      <img src="../../assets/check.png" alt="Image" width="18px" height="18px" />
</v-avatar>    
  <h1  style="color: #183B56; font-weight: 600; font-size:20px;text-align: center; ">Real-Time Analytics</h1>
    <p  style="font-weight: 400; font-size:14px;text-align: center;  ">
      Gain insights into your USSD session performance with real-time analytics, allowing you to optimize and enhance your services.</p>

  </v-col>
</v-row> 



<v-row justify="center" align-center>
  <v-col class="text-center">
    <v-avatar class="rounded-icon" >
  <img src="../../assets/mon.png" alt="Image" width="34px" height="34px" />
</v-avatar> 

    <h1 style="color: #183B56; font-weight: 600; font-size: 20px; text-align: center;">Custom USSD Development </h1>
    <p style="font-weight: 400; font-size: 16px; text-align: center;">Create custom USSD sessions that align with your brand and communication goals, making your campaigns more memorable.</p>
  </v-col>
 
</v-row> 
</v-container> 
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
.section{
  background-color: #FFFFFF;

}
.survey{
    padding-top: 80px;
  }
  .boost{
    text-align: center;
  }
  .rounded-icon{
  background-color: #26A842;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  overflow: hidden;
  margin-bottom: 20px;
}
.column-item{
  background-color: #F8FCF9;
  width: 1150px;
  margin-left: 20px;
  margin-right: 20px;
}

</style>