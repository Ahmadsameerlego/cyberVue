<template>
    <section id="contact_us">
        <div class="contact-image">
            <img :src="contact_us_image" alt="contact background">

            <form id="contact-form" @submit.prevent="sendMessage"> 
                <h6 class="our-ser">{{ $t('contact.what_service') }}</h6>
                <h4 class="contactUs">{{ $t('contact.call_us') }}</h4>
                <div class="row mb-3">
                    <div class="col-md-6">
                        <input v-model="name" type="text" class="form-control mb-2" :placeholder="$t('contact.name')">
                    </div>
                    <div class="col-md-6">
                        <input type="tel" v-model="phone" class="form-control mb-2"  :placeholder="$t('contact.phone')">
                    </div>
                </div>

                <div class="mb-3">
                    <input type="email" v-model="email" class="form-control" :placeholder="$t('contact.email')">
                </div>

                <div class="mb-3">
                    <input type="text" v-model="subject" class="form-control" :placeholder="$t('contact.address')">
                </div>

                <div class="mb-3">
                    <textarea v-model="message" class="form-control" :placeholder="$t('contact.message')"></textarea>
                </div>

                <!-- <button class="btn text-light bg-dark" style="width:120px">
                    
                </button> -->
                <v-btn
                    class="ma-2 btn text-light bg-dark"
                    :loading="loading"
                    :disabled="loading"
                    color="secondary"
                    @click="loader = 'loading'"
                    type="submit"
                >
                {{ $t('contact.send') }}
                </v-btn>
            </form>
            
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            name : '',
            phone : '',
            email :'',
            subject : '',
            message : '',
            loader: null,
            loading: false,
        }
    },
    watch: {

    },
    props : {
        // eslint-disable-next-line vue/require-prop-type-constructor
        contact_us_image : ''
    },
    async created(){

    },
    methods:{
        sendMessage(){
            const fd = new FormData();
            fd.append('name' , this.name)
            fd.append('phone', this.phone)
            fd.append('email', this.email)
            fd.append('subject', this.subject)
            fd.append('message', this.message)

            axios.post('https://cybervision.com.sa/api/send-message', fd)
            .then( (res)=>{
                if(res.data.key == 'success'){
                    this.name = ''
                    this.phone = ''
                    this.email = ''
                    this.subject = ''
                    this.message = ''
                    this.$swal(res.data.msg);

                }else{
                    this.$swal({
                        icon: 'error',
                        text: res.data.msg,
                    });
                }
            } )


            const l = this.loader
            this[l] = !this[l]

            setTimeout(() => (this[l] = false), 1000)

            this.loader = null
        }
    }
}
</script>

<style lang="scss">
$main_color : #028fd2;
#contact_us{
    margin-top: 100px;
    position: relative;
    .contactUs{color: #fff;}
    .our-ser{ color: #d3b4b4;}
    .contact-image{
        img{
            width: 100%;
            height: 240px;
            filter: brightness(.7);
        }
    }
    #contact-form{
        position: absolute;
        right: 17%;
        background: $main_color;
        padding: 30px 20px;
        top: -22%;
    }
}
@media(max-width:768px){
    #contact_us #contact-form {
    right: 11%;
    width: 80%;
    margin: auto;
}
}
</style>