<template>
  <div class="home">
    <loader v-if="loader"/>
    <!-- header -->
    <pageHeaderVue active_home="active" />
    
    <section class="bg1">
      <!-- welcome section -->
      <homeWelcome :header="header" />

      <!-- who we are -->
      <homeWe :about="about"/> 
    </section>

    <section class="bg1">
      <!-- teams -->
      <Teams v-if="experts != {}" :experts="experts"  :experts_imgs="experts_imgs"/>

      <!-- services -->
      <Services  :services_obj="services_obj" :services="services"/>
    </section>

    <!-- contact us -->
    <contactUsVue :contact_us_image="contact_us_image" />

    <section class="bg1">
      <!-- cyber solves -->
      <cyberSolve :cyper_solutions="cyper_solutions" :solutions="solutions"/>

      <!-- options -->
      <Options :last_news="last_news" :news="news" />
    </section>

    <!-- slider -->
    <slider :partners="partners"/>

    <!-- home footer -->
    <Homefooter />
  </div>
</template>

<script>

import pageHeaderVue from '../components/page-header.vue'
import homeWelcome from '../components/home-welcome.vue'
import homeWe from '../components/home-who-we.vue'
import Teams from '../components/home-teams.vue'
import contactUsVue from '../components/contact-us.vue'

import Services from '../components/home-services.vue'

import cyberSolve from '../components/cyber-solves.vue'

import Options from '../components/options.vue'

import slider from '../components/home-slider.vue'

import Homefooter from '../components/home-footer.vue'

import loader from '../components/loader.vue'

import axios from 'axios'


export default {
  name: 'Home',
  data(){
    return{
      // home api
        header: {},
        about : {},
        experts : {},
        experts_imgs : [],
        services_obj : {},
        services : [],
        contact_us_image :'',
        cyper_solutions : {},
        solutions : [],
        last_news : {},
        news : [],
        partners : [],
        loader : true
        
    }

  },
  components: {
    pageHeaderVue,
    homeWelcome,
    homeWe,
    Teams,
    Services,
    contactUsVue,
    cyberSolve,
    Options,
    slider,
    Homefooter,
    loader
},
  
  async created(){
    // getting home api
    try{
        const res = await axios.get('https://cybervision.com.sa/api/home')
        this.header = res.data.data.header;
        this.about = res.data.data.about;
        this.experts = res.data.data.experts;
        this.experts_imgs = res.data.data.experts.images
        this.services_obj = res.data.data.services
        this.services = res.data.data.services.services
        this.contact_us_image = res.data.data.contact_us_image
        this.cyper_solutions = res.data.data.cyper_solutions
        this.solutions = res.data.data.cyper_solutions.solutions
        this.last_news = res.data.data.last_news
        this.news = res.data.data.last_news.lastNews
        this.partners = res.data.data.partners
        this.loader = false        
    }catch(e){
        console.log(e)
    }
    
  }
}
</script>

<style>
.bg1{
  background-image: url('../assets/wavy.png');
  background-image: url(/img/wavy.f7feb41f.png);
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
