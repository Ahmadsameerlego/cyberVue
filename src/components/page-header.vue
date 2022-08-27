<template>
    <section class="container">
            <header class="mt-3 mb-3">
            <div class="row align-items-center">
                <!-- logo -->
                <div class="col-md-5">
                    <div id="logo">
                        <router-link to="/">
                            <img :src="navlogo" alt="Logo" />
                        </router-link>
                    </div>
                </div>
                <!-- links and lang -->
                <div class="col-md-7">
                    <nav class="navbar navbar-expand-lg navbar-light ">

                            <!-- toggle icon -->
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>

                            <!-- nav links -->
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <router-link  to="/" class="nav-link" :class="active_home" aria-current="page" href="#">{{ $t('nav.main') }}</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/About" class="nav-link" :class="active_About" href="#">{{ $t('nav.who') }}</router-link>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <router-link to="/Services" class="nav-link" :class="active_services" href="#">{{ $t('nav.services') }}</router-link>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <router-link to="/empolyment" class="nav-link" :class="active_employmnet" href="#">{{ $t('nav.employ') }}</router-link>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <router-link to="/last_news" class="nav-link" :class="active_news" href="#">{{ $t('nav.news') }}</router-link>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a  class="nav-link" href="#contact_us">{{ $t('nav.contact') }}</a>
                                    </li>

                                    <!-- change the language -->
                                    <li>
                                        <button @click="changeLocale" class="btn" >
                                            <img :src="$t('nav.lang_img')" alt="" class="lang_img">
                                        </button>
                                    </li>
                                </ul>
                            </div>
                    </nav>
                </div>
            </div>
        </header>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            isActive :false,
            navlogo : '',
            src : ''
        }
    },
    methods:{
        changeLocale : function(){
            let lang = 'ar';
            if(this.$i18n.locale == 'ar'){
                lang = 'en';
            }

            if(sessionStorage.getItem('lang')){
                sessionStorage.removeItem('lang');
            }

            sessionStorage.setItem('lang' ,lang);
            location.reload();


            // if(this.$i18n.locale == 'ar'){
            //     this.src = '../assets/en.png'
            //     console.log(this.src)
            // }

        },
    },
    props : [
        'active_About',
        'active_home',
        'active_services',
        'active_employmnet',
        'active_news'
    ],
    async created(){
        const res = await axios.get('https://cybervision.com.sa/api/settings');
        this.navlogo = res.data.data.nav_logo
    }
}
</script>

<style lang="scss" scoped>

$main_color : #028fd2;
.container{background-image: url(../assets/headerback.png);
    width: 100%;
    background-image: url(/img/headerback.d90f5b96.png);
    height: 100%;
    background-size: cover;}
header{
    #logo{
        img{
            width: 150px;
            display: flex;
            justify-content: start;
            height: 75px;
            object-fit: contain;
        }
    }
    .navbar-nav{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        .nav-item{
            .nav-link{
                color: #333;
                &.active{
                    color: $main-color;
                }
            }
        }
    }
}

.lang_img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
}
    .nav-item{width: 100px !important; display: flex;justify-content: center;}


@media(max-width: 768px){
    header #logo img[data-v-96d6f7aa]{margin:auto}
    .navbar-toggler{display: flex;margin: auto;}
    .navbar-collapse{
        position: fixed;
        top: 24%;
        width: 100%;
        background-color: #028fd2d6;
        z-index: 99;
        left: 0;
    }
    header .navbar-nav[data-v-96d6f7aa]{display: flex;justify-content: center; margin: auto; align-items: center;}
    header .navbar-nav .nav-item .nav-link[data-v-96d6f7aa]{color: #fff !important; font-weight: bold;}
}
</style>