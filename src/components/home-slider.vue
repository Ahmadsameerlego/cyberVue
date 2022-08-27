<template>
    <section id="slider" class="mt-5 mb-5">
        <div class="container">
            <carousel>
                <slide v-for="slider in partners" :key="slider.id">
                    <img :src="slider.image" alt="slider image" class="slider_img">
                </slide>
            </carousel>
        </div>
    </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    data(){
        return{
            // slider_images : [ require('../assets/sy1.jpg') , require('../assets/sy1.jpg') , require('../assets/sy1.jpg') ]
        }
    },
    components: {
        Carousel,
        Slide
    },
    props : {
        partners : []
    }
}

</script>

<style >
#slider{margin-top: 60px !important; margin-bottom: 60px !important;}
.slider_img{
    width: 120px;
    height: 60px;
}
.VueCarousel-inner{flex-basis: 165px !important;}
</style>