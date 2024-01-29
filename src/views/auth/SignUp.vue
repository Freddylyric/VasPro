<template>
    <v-row>
        <v-col lg="0" xs="0" style="min-width: 500px; max-width: fit-content;">
            <img width="100%" src="@/assets/signup.svg" alt="hero image">
        </v-col>

        <v-col class="d-flex flex-column justify-center">

            <img src="@/assets/main-logo.svg" class="logo">
            <h1 style="text-align: center; text-transform: uppercase; margin-top: 16px;">Sign up</h1>


            <!-- <v-container fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8">
                        <v-card class="elevation-0">

                            <v-card-text>
                                <v-form ref="form" v-model="valid" lazy-validation>
                                    <v-text-field variant="solo-filled" label="Full Name" required v-model="fullName"
                                        :error="!$props.valid" :rules="fullNameRules"></v-text-field>
                                    <v-text-field variant="solo-filled" label="Business Name"
                                        v-model="businessName"></v-text-field>
                                    <v-text-field variant="solo-filled" label="Enter Email Address" required type="email"
                                        v-model="email" :error="!$props.valid && !$props.email"
                                        :rules="emailRules"></v-text-field>

                                    <vue-tel-input v-model="phoneNumber" mode="international" label="Phone Number"
                                        variant="solo-filled"
                                        style="height: 56px; border-radius: 10px; margin-bottom: 16px; "></vue-tel-input>





                                    <v-text-field variant="solo-filled" label="Referral Code"
                                        v-model="referralCode"></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>

                                <v-btn style="text-transform: capitalize; background-color: green; width: 100%;"
                                    color="green" @click="signUp">
                                    Next
                                </v-btn>
                            </v-card-actions>
                            <v-card-text class="text-center pt-4">
                                Already have an account?
                                <router-link to="/login">Login</router-link>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container> -->

            <v-container fluid>
                <v-row align="center" justify="center">
                    <v-col cols="0" sm="10">
                        <v-card class="elevation-0">

                            <v-card-text>


                                <form @submit.prevent="submit">
                                    <v-text-field variant="solo-filled" v-model="name.value.value" :counter="10"
                                        :error-messages="name.errorMessage.value" label="Name"></v-text-field>

                                    <v-text-field variant="solo-filled" v-model="businessName.value.value" :counter="10"
                                        :error-messages="businessName.errorMessage.value"
                                        label="Business Name"></v-text-field>



                                    <v-text-field variant="solo-filled" v-model="email.value.value"
                                        :error-messages="email.errorMessage.value" label="E-mail"></v-text-field>

                                    <vue-tel-input v-model="phone.value.value" :error-messages="phone.errorMessage.value"
                                        mode="international" label="Phone Number" variant="solo-filled"
                                        style="height: 56px; border-radius: 10px; margin-bottom: 16px; "></vue-tel-input>



                                    <v-text-field variant="solo-filled" v-model="referralCode.value.value"
                                        :error-messages="referralCode.errorMessage.value"
                                        label="Referral Code"></v-text-field>

                                    <v-btn class="me-4"
                                        style="text-transform: capitalize; background-color: green; color: white; width: 100%; height: 56px;"
                                        type="submit">
                                        next
                                    </v-btn>


                                </form>

                            </v-card-text>

                            <v-card-text class="text-center pt-4">
                                Already have an account?
                                <router-link to="/login" style="color: #1F4152; font-weight: 700;">Login</router-link>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>


        </v-col>
    </v-row>
</template>





<!-- <script>
export default {
    name: 'SignUp',
    data() {
        return {
            valid: true,
            fullName: '',
            fullNameRules: [v => !!v || 'Full name is required'],
            businessName: '',
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            countryCode: '+254', // Default country code
            countryCodes: ['+254', '+1', '+44', '+...'], // Add more country codes
            phoneNumber: '',
            referralCode: '',
        };
    },
    methods: {
        signUp() {
            // Handle form submission logic here
            if (this.valid) {
                console.log(this.fullName, this.email, this.countryCode, this.phoneNumber);
            }
        },
    },
};
</script> -->



<script setup>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        name(value) {
            if (value?.length >= 2) return true

            return 'Name needs to be at least 2 characters.'
        },
        // businessName(value) {
        //     if (value?.length >= 2) return true

        //     return 'Business name needs to be at least 2 characters.'
        // },
        phone(value) {
            if (value?.length > 9 && /[0-9-]+/.test(value)) return true

            return 'Phone number needs to be at least 9 digits.'
        },
        email(value) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

            return 'Must be a valid e-mail.'
        },


    },
})
const name = useField('name')
const businessName = useField('businessName')
const phone = useField('phone')
const email = useField('email')
const referralCode = useField('referralCode')



const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
})
</script>




<style></style>