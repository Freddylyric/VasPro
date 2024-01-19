<template>
    <div>
        <HeroComponent />
        <ProductsComponent />
        <SolutionsComponent />
        <DevelopersComponent/>
        <Locations/>
        <Footer />

    </div>
</template>

<script>
import HeroComponent from '../components/landing_components/HeroComponent.vue'
import ProductsComponent from '../components/landing_components/ProductsComponent.vue'
import SolutionsComponent from '../components/landing_components/SolutionsComponent.vue'
import DevelopersComponent from '../components/landing_components/DevelopersComponent.vue'
import Locations from '../components/landing_components/Locations.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'Landing',
    components: {
        
        HeroComponent,
        ProductsComponent,
        SolutionsComponent,
        DevelopersComponent,
        Locations,
        Footer
    }
}
</script>

<style scoped>

</style>