<template>
    <section class="ser_content mt-5 mb-5">
        <div class="container">
            <div class="service_img">
                <img :src="service.image" alt="service image">
            </div>
            <div class="service_text">
                <p class="text">
                    {{service.description}}
                </p>
            </div>

            <div class="additional_imgs d-flex justify-content-start align-items-center">
                <img :src="service.image" alt="Additional Image">
                <img :src="service.second_image" alt="Additional Image">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    props:{
        service : {}
    }
}
</script>

<style lang="scss">
.ser_content{
    .service_img{
        img{
            width: 100%;
            height: 300px;
            margin-bottom: 30px;
        }
    }
    .service_text{
        position: relative;

        .add_img{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 40%;
            height: 200px;
        }
    }
    .additional_imgs{
        flex-wrap: wrap;
        img{
            width: 300px;
            height: 200px;
            margin : 0 15px

        }
    }
}
@media(max-width:768px){
    .additional_imgs img{margin-bottom: 12px;}
    .additional_imgs img {
    margin-bottom: 12px !important;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: auto !important;
    margin-left: auto !important;
   }
}
</style>