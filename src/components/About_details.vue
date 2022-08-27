<template>
    <div>
        <section id="About-details" :style="{ backgroundImage : `url(${chalenges.image})` }">
        <div class="container">
            <p class="text-center text-white">{{ $t('common.challange') }}</p>
            <h3 class="text-center text-white">{{chalenges.title}}</h3>

            <div class="sec-items">
                <div class="row">
                    <div class="col-lg-3 col-md-6" v-for="challenge in challenges_arr" :key="challenge.id">
                        <div class="sec-item d-flex justify-content-center align-items-center flex-column">
                            <div class="item-image">
                                <img :src="challenge.image" alt="image">
                            </div>
                            <h4 class="item-title">{{ challenge.title }}</h4>
                            <p class="item-details">
                                {{ challenge.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div>
        <div class="container">
            <p class="mt-5 mb-5" v-html="about.secondDescription"></p>
        </div>
    </div>
    </div>
    
</template>

<script>
export default {
    
    props : {
        chalenges : {},
        challenges_arr : [],
        about : {}
    }
}
</script>

<style lang="scss">
#About-details{
    
    background-size: cover;
    margin-top: 100px;
    padding: 30px 0;
    height: 360px;
    .sec-item{
        position: relative;
        width: 200px;
        height: 200px;
        background: #fff;
        border-radius: 3px;
        padding: 0 15px;
        margin-top: 20px;
        
        img{
            width: 40px;
            height: 40px;
            object-fit: cover;
            margin-bottom:12px
        }
        .item-title , .item-details{
            text-align: center;
        }
    }
}
@media(max-width:992px){
    #About-details{height: fit-content;}
    .sec-item{ margin-right: auto; margin-left: auto; }
}
</style>