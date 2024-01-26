<template>
    <!-- src/views/auth/Verify.vue -->
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
                                    <v-text-field variant="solo-filled" v-model="verCode.value.value" :counter="10"
                                        :error-messages="verCode.errorMessage.value"
                                        label="Enter Verification Code"></v-text-field>






                                    <v-text-field variant="solo-filled" v-model="password.value.value"
                                        :error-messages="password.errorMessage.value" label="Enter Password"></v-text-field>


                                    <v-text-field variant="solo-filled" v-model="verPassword.value.value"
                                        :error-messages="verPassword.errorMessage.value"
                                        label="Verify Password"></v-text-field>


                                    <v-checkbox v-model="checkbox.value.value" :error-messages="checkbox.errorMessage.value"
                                        value="1" label="By signing up, you agree to our Terms of Use."
                                        type="checkbox"></v-checkbox>

                                    <v-checkbox v-model="checkbox2.value.value"
                                        :error-messages="checkbox.errorMessage.value" value="2" label="Allow Login via OKTA"
                                        type="checkbox"></v-checkbox>

                                    <v-btn class="me-4"
                                        style="text-transform: capitalize; background-color: green; color: white; width: 100%; height: 56px;"
                                        type="submit">
                                        <span style="font-weight: 600;">Verify Account</span>
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

<script setup>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        verCode(value) {
            if (value?.length >= 2) return true

            return 'code needs to be at least 2 characters.'
        },
        // businessName(value) {
        //     if (value?.length >= 2) return true

        //     return 'Business name needs to be at least 2 characters.'
        // },
        // phone(value) {
        //     if (value?.length > 9 && /[0-9-]+/.test(value)) return true

        //     return 'Phone number needs to be at least 9 digits.'
        // },
        // email(value) {
        //     if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        //     return 'Must be a valid e-mail.'
        // },


        checkbox(value) {
            if (value === '1') return true

            return 'Must be checked.'
        },

        checkbox2(value) {
            if (value === '1') return true

            return 'Must be checked.'
        },


    },
})
const verCode = useField('verCode')
const password = useField('password')
const verPassword = useField('verPassword')
const checkbox = useField('checkbox')
const checkbox2 = useField('checkbox2')




const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
})
</script>


<style></style>