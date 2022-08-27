<template>
    <section class="employment">
        <PageHeader active_employmnet="active" />
        <About_initVue :title="$t('headers.emp_1')" :head="$t('headers.emp_2')"/>

        <employForm />

        <Slider />
        <PageFooter />
    </section>
</template>

<script>
import PageHeader from '../components/page-header.vue'
import About_initVue from '../components/About_init.vue'
import Slider from '../components/home-slider.vue'
import PageFooter from '../components/home-footer.vue'

import employForm from '../components/empoly_form.vue'


export default {
    data(){
        return{
             
        }
    },
    components : {
        PageHeader,
        About_initVue,
        Slider,
        PageFooter,
        employForm,
        
    }
}
</script>

<style>

</style>