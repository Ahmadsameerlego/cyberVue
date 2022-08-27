<template>
    <section id="who-we" class="mt-5 mb-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="who-images">
                        <img :src=" about.first_image " alt=" who are we " class="who-img-1">
                        <img :src="about.second_image" alt=" who are we " class="who-img-2">


                        <div class="more d-flex flex-column justify-content-center align-items-center">
                            <span class="more_num"> {{about.years_of_experiance}}</span>
                            <span class="more-year"> {{ $t('welcome.exp_years') }} </span>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="who-details">
                        <p class="where-help">{{ $t('welcome.where_help') }}</p>

                        <p class="who-wel"> {{ about.title }} </p>

                        <div class="who-desc">
                            <p v-html="about.description"></p>
                            <!-- who items -->
                            <!-- <div class="who-item d-flex justify-content-start align-items-baseline">
                                <span class="icon"><font-awesome-icon icon="fa-solid fa-check" /></span>
                                <p v-html="about.description"></p>
                            </div> -->
                        </div>

                        <router-link to="/About" class="more show_more"  
                            :loading="loading"
                            :disabled="loading"
                            color="secondary"
                            @click="loader = 'loading'"
                            type="submit"
                            v-if="show"
                            >
                            {{ $t('welcome.more') }}
                            <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            loader: null,
            loading: false,
            show : true
        }
    },
    props : {
        about : {}
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
    mounted(){
        if(this.$route.path == '/About'){this.show = false}
    }
}
</script>

<style lang="scss" scoped>
$main_color : #028fd2;
#who-we{margin-top: 120px !important;}
.who-images{
    display: flex;
    position: relative;
    justify-content: start;
    img{
        width: 160px;
        height: 260px;
        margin-right: 10px;
        margin-left: 10px;
        &.who-img-2{
            margin-top: -30px;
        }
    }
    }
    .more{
        position: absolute;
        background:linear-gradient(0deg, rgba(0,74,109,1) 0%, rgba(0,148,217,1) 74%);
        border: none;
        width: 100px;
        color: #fff;
        height: 70px;
        border-radius: 3px;
        top: 39%;
        right: 29%;
        .more_num{
            font-weight: 500;
            font-size: 20px;
        }
        
}

.who-details{
    position: relative;
    .where-help{
        color: $main_color;
    }
    .who-wel{
        font-weight: bold;
        font-size: 20px;
    }
    .icon{
        color: $main_color;
        margin-left: 5px;
    }
    .who-desc{
        p{
            color: #444;
        }
    }
    .show_more{
        position: relative;
        left: 0;
        text-decoration: none;
        display: flex;
        height: 34px;
        justify-content: space-evenly;
        align-items: center;
        width: 144px;
    }
}
@media(max-width:768px){
    .who-images[data-v-52e1108b]{justify-content: center !important; margin-bottom: 20px;}
    .more[data-v-52e1108b]{right: 44%; }
}
</style>