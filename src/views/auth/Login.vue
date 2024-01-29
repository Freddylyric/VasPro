<template>
    <!-- src/views/auth/Login.vue -->


    <v-row>

        <v-col lg="0" xs="0" style="min-width: 500px; max-width: fit-content;">
            <img width="100%" src="@/assets/login.svg" alt="hero image">
        </v-col>

        <v-col class="d-flex flex-column justify-center">
            <img src="@/assets/main-logo.svg" class="logo">
            <h1 style="text-align: center; text-transform: uppercase; margin-top: 16px;">Login</h1>


            <v-container fluid>
                <v-row align="center" justify="center">
                    <v-col cols="0" sm="10">
                        <v-card class="elevation-0">

                            <v-card-text>
                                <form @submit.prevent="submit">
                                    <v-text-field variant="solo-filled" label="Email" outlined dense></v-text-field>
                                    <v-text-field variant="solo-filled" label="Password" outlined dense></v-text-field>
                                    <v-btn color="#26A842" class="border-radius-16"
                                        style="width: 100%; margin-top: 16px; height: 52px;">Login</v-btn>
                                </form>
                            </v-card-text>

                            <v-card-text>
                                Or Login with
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
                            <v-card-text class="text-center pt-4">
                                Don't have an account?
                                <router-link to="/signup" style="color: #1F4152; font-weight: 700;">Login</router-link>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'Login'
}
</script>

<style></style>