<template>
    <v-row>
        <v-col lg="0" xs="0" style="min-width: 500px; max-width: fit-content;">
            <img width="100%" src="@/assets/verify.svg" alt="hero image">
        </v-col>

        <v-col class="d-flex flex-column justify-center">

            <img src="@/assets/main-logo.svg" class="logo">
            <h1 style="text-align: center; text-transform: capitalize; margin-top: 16px;">Verify Account</h1>


            <v-container fluid>
                <v-row align="center" justify="center">
                    <v-col cols="0" sm="10">
                        <v-card class="elevation-0">

                            <v-card-text>


                                <form @submit.prevent="submit">
                                    <p style="text-align: left; margin-top: 16px;">Enter your phone number</p>



                                    <vue-tel-input v-model="phone.value.value" :error-messages="phone.errorMessage.value"
                                        mode="international" label="Phone Number" variant="solo-filled"
                                        style="height: 56px; border-radius: 10px; margin-bottom: 16px; "></vue-tel-input>


                                    <v-btn class="me-4 mt-8"
                                        style="text-transform: capitalize; background-color: green; color: white; width: 100%; height: 56px;"
                                        type="submit">
                                        <span style="font-weight: 600;">Next </span>
                                    </v-btn>
                                </form>

                            </v-card-text>

                            <v-card-text class="text-center pt-4">
                                Already have an account?
                                <router-link to="/login" style="color: #1F4152; font-weight: 700;">Login</router-link>
                            </v-card-text>
                            <v-card-text>
                                Or Login Via
                            </v-card-text>
                            <v-card-actions>

                                <v-row class="d-flex justify-center">
                                    <v-btn variant="outlined" style="width: 40%;">
                                        Okta
                                    </v-btn>
                                    <v-btn prepend-icon="mdi-google" variant="outlined" style=" width: 40%;">
                                        Google

                                    </v-btn>
                                </v-row>
                            </v-card-actions>


                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

const { handleSubmit, handleReset } = useForm({
    validationSchema: {

        phone(value) {
            if (value?.length > 9 && /[0-9-]+/.test(value)) return true

            return 'Phone number needs to be at least 9 digits.'
        },



    },
})

const phone = useField('phone')




const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
})
</script>
<style></style>