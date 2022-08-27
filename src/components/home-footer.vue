<template>
    <footer>
        <div class="container">
            <!-- footer header -->
            <div class="footer_header d-flex justify-content-between align-items-center">
                <!-- white logo -->
                <div class="white_logo">
                    <img :src="footer_logo" alt="logo" class="white_logo">
                </div>

                <!-- contact us -->
                <div class="contact_us d-flex align-items-center">
                    <span>{{ $t('footer.call_us') }}</span>
                    <a :href="`mailto:${email}`" class="mail">{{email}}</a>
                </div>
            </div>

            <!-- footer content -->
            <section class="footer_content mt-5">
                <div class="row">
                    <div class="col-md-4">
                        <div class="content_item">
                            <h5>{{ $t('footer.info') }}</h5>
                            <p>
                                {{ footer_informations }}
                            </p>
                            <div class="social_icons d-flex">
                                <a :href="socail.link" v-for="socail in socials" :key="socail.id">
                                    <span class="socail_icon">
                                        <img :src="socail.icon" alt="">
                                    </span>
                                </a>
                                <!-- <a href="#">
                                    <span class="socail_icon"><font-awesome-icon icon="fa-brands fa-twitter" /></span>
                                </a>
                                <a href="#">
                                    <span class="socail_icon"><font-awesome-icon icon="fa-brands fa-youtube" /></span>
                                </a>
                                <a href="#">
                                    <span class="socail_icon"><font-awesome-icon icon="fa-brands fa-instagram" /></span>
                                </a> -->

                            </div>
                        </div>
                    </div>


                    <!-- socail -->
                    <div class="col-md-2">
                        <div class="links d-flex flex-column">
                            <h5>{{ $t('footer.links') }}</h5>
                            <router-link to="/">{{ $t('footer_links.main') }}</router-link>
                            <router-link to="/About">{{ $t('footer_links.who') }}</router-link>
                            <router-link to="/Services">{{ $t('footer_links.ser') }}</router-link>
                            <router-link to="/last_news">{{ $t('footer_links.news') }}</router-link>
                            <a href="#contact_us">{{ $t('footer_links.call') }}</a>
                        </div>
                    </div>

                    <!-- services -->
                    <div class="col-md-2">
                        <div class="links d-flex flex-column">
                            <h5>{{ $t('footer.serv') }}</h5>
                            <span v-for="service in services.slice(0,5)" :key="service.id">{{service.name}}</span>
                        </div>
                    </div>

                    <!-- news summars -->
                    <div class="col-md-4">
                        <div class="news-ser">
                            <h5 class="mb-3">{{ $t('footer.news') }}</h5>
                            <form >
                                <div class="input-group mb-3">
                                    <input v-model="SendNew" type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
                                    <button @click="postData" class="btn btn-outline-secondary" type="button" id="button-addon1"><font-awesome-icon icon="fa-solid fa-paper-plane" /></button>                                
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <div class="footer-bottom d-flex justify-content-between align-items-center">
                <p> {{copyrights}} </p>
                <p>{{ $t('footer.awa') }}</p>
            </div>
        </div>

        <div class="overloay">
        </div>
    </footer>
</template>

<script>
import axios from 'axios'
export default {

    data(){
        return{
            footer_logo : '',
            email : '',
            footer_informations : '',
            socials : [],
            services : [],
            copyrights : '',

            // input post
            SendNew : null,

            fail : '',
            success : ''
        }
    },
    async created(){
        // getting setting api => commonn
        try{
            const res  = await axios.get( 'https://cybervision.com.sa/api/settings' );
            this.footer_logo = res.data.data.footer_logo
            this.email = res.data.data.email
            this.footer_informations = res.data.data.footer_informations
            this.socials = res.data.data.socials
            this.services = res.data.data.services
            this.copyrights = res.data.data.copyrights


            // const res1 = await axios.get('https://cybervision.com.sa/api/subscripe');
            // this.fail = res1.data.data.key
            // console.log(this.fail)
        }
        catch(e){
        console.log(e)
        }
    },
    methods : {
        postData(){
            axios.post('https://cybervision.com.sa/api/subscripe', {email:this.SendNew})
            .then( (res) => {
                    this.$swal(res.data.msg);
            } )
            this.SendNew = ''
        }
        
    },
}
</script>

<style lang="scss" scoped>
$main_color : #028fd2;
footer{
    .overloay{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #028fd2e6;
        z-index: -1;
    }
    position: relative;
    padding-top: 15px;
    padding-bottom: 15px;
    background-image: url('../assets/footer-bg.png');
    z-index: 9;
    .footer_header{
        position: relative;
        .white_logo{
            width: 120px;
            height: 60px;
        }
        .contact_us{
            span{
                color: #fff;
                margin: 0 10px;
            }
            a{
                color: #fff;
                text-decoration: none;
            }
        }
        &::before{
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            background: #fff;
            bottom: -10px;
            left: 0;
        }
    }
    .footer_content{
        padding-top: 12px;
        position: relative;
        &::before{
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            background: #fff;
            bottom: -10px;
            left: 0;
        }
        h5{color: #fff;}
        p{color:#e9dede}
        .social_icons{
            img{
                width: 20px;
                height: 20px;
                margin: 0 10px;
            }
        }
    }
    .links{
        a , span{
            color:#e9dede;
            text-decoration: none;
        }
    }
}

input{border-radius: 0 !important;}
button{
    border-radius: 0 !important;
    background: #111;
    border: none;
    svg{
        color: rgb(216, 46, 46);
    }
}
.footer-bottom{
    margin-top: 22px;
    p{color: #fff;}
}
@media(max-width:768px){
    .content_item, .links {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 22px;
    }
}
</style>