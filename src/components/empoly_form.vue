<template>
    <section class="employ_form mt-5 mb-5" >
        <div class="container">
            <h4 class="mb-5">{{ $t('emForm.form_title') }}</h4>

            <div class="form_em">
                <form  @submit.prevent="sendData">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="mb-3">
                                <label for="first_name" class="form-label">{{ $t('emForm.first_name') }}</label>
                                <input type="text" v-model="first_name" class="form-control" id="first_name" aria-describedby="emailHelp" :placeholder=" $t('emForm.enter_name')">
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="mb-3">
                                <label for="second_name" class="form-label">{{ $t('emForm.sec_name') }}</label>
                                <input type="text" v-model="second_name" class="form-control" id="second_name" aria-describedby="emailHelp" :placeholder=" $t('emForm.enter_name') ">
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="mb-3">
                                <label for="last_name" class="form-label">{{ $t('emForm.last_name') }}</label>
                                <input type="text" v-model="last_name" class="form-control" id="last_name" aria-describedby="emailHelp" :placeholder=" $t('emForm.enter_name') ">
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="date" class="form-label">{{ $t('emForm.date') }}</label>
                        <input type="date" v-model="date" class="form-control" id="date" aria-describedby="emailHelp" :placeholder="$t('emForm.en-date')">
                    </div>

                    <div class="mb-3 select">
                        <label class="form-label" >{{ $t('emForm.gender') }}</label>
                        <select v-model="gender" class="form-select" aria-label="Default select example">
                            <option v-for="gender in gender_options" :key="gender" :value="gender">{{ gender }}</option>
                        </select>
                        <font-awesome-icon icon="fa-solid fa-chevron-down" />
                    </div>

                    <div class="mb-3">
                        <label for="phone" class="form-label">{{ $t('emForm.phone') }}</label>
                        <input type="tel" v-model="phone" class="form-control" id="phone" aria-describedby="emailHelp" :placeholder="$t('emForm.en_phone')">
                    </div>

                    <div class="mb-3">
                        <label for="ident" class="form-label">{{ $t('emForm.iden') }}</label>
                        <input type="number" v-model="iden" class="form-control" id="ident" aria-describedby="emailHelp" :placeholder="$t('emForm.en_iden')">
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">{{ $t('emForm.mail') }}</label>
                        <input type="email" v-model="email" class="form-control" id="email" aria-describedby="emailHelp" :placeholder=" $t('emForm.en_mail') ">
                    </div>

                    <div class="mb-3 select">
                        <label class="form-label">{{ $t('emForm.job') }}</label>
                        <select v-model="job" class="form-select" @change="chooseJob($event)" aria-label="Default select example">
                            <option v-for="job in jobsTypes" :key="job.id" :value="job.id" >{{ job.name }}</option>
                        </select>
                        <font-awesome-icon icon="fa-solid fa-chevron-down" />
                    </div>

                    <!--hhh-->
                    <div class="mb-3 select">
                        <label class="form-label">{{ $t('emForm.job_title') }}</label>
                        <select v-model="job_title"  class="form-select" aria-label="Default select example">
                            <option  v-for="title in jobs" :key="title.id" :value="title.id"> {{  title.name }} </option>
                        </select>
                        <font-awesome-icon icon="fa-solid fa-chevron-down" />
                    </div>

                    <div class="mb-3 select">
                        <label class="form-label">{{ $t('emForm.nation') }}</label>
                        <select v-model="region"  class="form-select" aria-label="Default select example">
                            <option v-for="region in regions" :key="region.id" :value="region.id">{{ region.name }}</option>
                        </select>
                        <font-awesome-icon icon="fa-solid fa-chevron-down" />
                    </div>

                    <div class="mb-3 select">
                        <label class="form-label">{{ $t('emForm.exp_years') }}</label>
                        <select v-model="exp_years"  class="form-select" aria-label="Default select example">
                            <option v-for="exp in yearsOfExperiances" :key="exp.id" :value="exp.id">{{ exp.name }}</option>
                        </select>
                        <font-awesome-icon icon="fa-solid fa-chevron-down" />
                    </div>


                    <div class="mb-3 select">
                        <label for="personal_img" class="form-label">{{ $t('emForm.pers_img') }}</label>
                        <input type="file" ref="per_img" @change="uploadFile($event)" class="form-control" id="personal_img" aria-describedby="emailHelp" :placeholder="$t('emForm.en_pers_img')">
                        <font-awesome-icon icon="fa-solid fa-camera" />
                    </div>

                    <div class="mb-3 select">
                        <label for="cv" class="form-label">{{ $t('emForm.cv') }}</label>
                        <input type="file" ref="cv" @change="uploadFile($event)" class="form-control" id="cv" aria-describedby="emailHelp" :placeholder="$t('emForm.en_pers_img')">
                        <font-awesome-icon icon="fa-solid fa-camera" />
                    </div>

                    <div class="mb-3 select">
                        <label for="exp" class="form-label">{{ $t('emForm.exp') }}</label>
                        <input type="file" ref="cer" @change="uploadFile($event)" class="form-control" id="exp" aria-describedby="emailHelp" :placeholder="$t('emForm.en_pers_img')" multiple>
                        <font-awesome-icon icon="fa-solid fa-camera" />
                    </div>

                    <div class="submit">
                        <button class="btn emp-sub" type="submit" :disabled="checkSub"
                        :loading="loading"
                        color="secondary"
                        @click="loader = 'loading'"
                        >{{ $t('emForm.send') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
                first_name : '',
                second_name : '',
                last_name : '',
                date : '',
                gender : '',
                phone : '',
                iden : '',
                email : '',
                job : '',
                job_title : '',
                job_title_arr : [],
                region : '',
                exp_years : '',
                personal_img : null,
                cv : null,
                cer : null,
                select_id : 0,
                loader: null,
                loading: false,
                jobs : [],
                
                gender_options : [ 'male' , 'female'],
                job_options : '',
                job_title_options : [],
                jobsTypes : [],
                regions : [],
                yearsOfExperiances : [],
                checkSub : false
        }
    },
    
    async created(){
        const form_get = await axios.get('https://cybervision.com.sa/api/employment-page-data');
        this.jobsTypes = form_get.data.data.jobsTypes;
        this.regions = form_get.data.data.regions;
        this.yearsOfExperiances = form_get.data.data.yearsOfExperiances;
        this.titles = form_get.data.data.jobsTypes.jobs;
    },
    
    methods:{
        uploadFile(){
            this.personal_img = this.$refs.per_img.files[0]
            this.cv = this.$refs.cv.files[0]
            this.cer = this.$refs.cer.files[0]
        },
        chooseJob(e){
            this.select_id = e.target.value;
            this.jobs = this.jobsTypes[this.select_id].jobs
        },
        sendData(){
            this.checkSub = true;
            const fd = new FormData()
            fd.append('first_name', this.first_name);
            fd.append('second_name', this.second_name)
            fd.append('last_name', this.last_name)
            fd.append('date_of_birth', this.date)
            fd.append('gender', this.gender)
            fd.append('phone', this.phone)
            fd.append('identification_number', this.iden)
            fd.append('email', this.email)
            fd.append('job_type_id', this.job)
            fd.append('job_id', this.job_title)
            fd.append('region_id', this.region)
            fd.append('years_of_experiance_id', this.exp_years)
            fd.append('personal_picture', this.personal_img )
            fd.append('cv', this.cv )
            fd.append('certificates', this.cer )

            axios.post('https://cybervision.com.sa/api/employment-request', fd)
            .then((res)=>{
                if(res.data.key == 'success'){
                    this.first_name = '';
                    this.second_name = '';
                    this.last_name = '';
                    this.date = '';
                    this.gender = '';
                    this.phone = '';
                    this.iden = '';
                    this.email = '';
                    this.job = '';
                    this.job_title = '';
                    this.region = '';
                    this.exp_years = '';
                    this.personal_img = null && '';
                    this.cer = null && '';
                    this.cv = null && '';
                    this.$swal(res.data.msg);    
                }else{
                    this.$swal({
                        icon: 'error',
                        text: res.data.msg,
                    });
                }
                if( res.data.key ){this.checkSub = false}
                
                const l = this.loader
                this[l] = !this[l]

                setTimeout(() => (this[l] = false), 1000)

                this.loader = null
                
            
            })
            
        },
        

    },
}
</script>

<style lang="scss">
$main_color : #028fd2;

.form_em{
    background: #f3f3f3;
    padding: 20px;
    label{
        color: #111;
        font-weight: 500;
    }
    input, select{
        position: relative;
        background:  #f3f3f3;
    }
    .select{
        position: relative;
        svg{
            position: absolute;
            left: 2%;
            top: 61%;
            color: gainsboro;
        }
        option{color: gainsboro;}
    }
    .submit{
        display: flex;
        justify-content: center;
        align-items: center;
        button{
            width: 70%;
            margin: auto;
            text-align: center;
            background: #028fd2;
            color:#fff
        }
    }
}

</style>