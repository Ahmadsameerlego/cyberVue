
<template>
  <v-app :class="classes">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data(){
    return{
      classes:'',
      lang: "ar",
    }
  }
  ,
  beforeCreate() {
    if (sessionStorage.getItem("lang")) {
      this.$i18n.locale = sessionStorage.getItem("lang");
    }
  },
  beforeMount() {
    if (this.$i18n.locale === "ar") {
      this.classes = "rtl";
    } else {
      this.classes = "ltr";
    }

  },

};
</script>


<style lang="scss">
  /* basics  */
  /* cairo font */
  // @import url('https://fonts.googleapis.com/css2?family=Almarai:wght@700;800&family=Cairo:wght@200;300;400;500;600;700&display=swap');
  @font-face {
    font-family: "myFirstFont";
    src: url("./assets/fonts/URW\ DIN\ Arabic.ttf");
    }
  $main_color : #028fd2;
  .color{color:$main_color};
  .bg-color{background-color: $main_color;}
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    direction: rtl;
    text-align: right;
    font-family: "myFirstFont";
  }
  .v-application{font-family: "myFirstFont" !important;}
  /* عربي */
  .rtl {
  direction: rtl;
  text-align: right;
  .direction2 {
    direction: ltr;
  }

  .text-align {
    text-align: right;
  }
  .text-align2 {
    text-align: left;
  }

  .justify1 {
    justify-content: start;
    display: flex;
  }
  .justify2 {
    justify-content: end;
    display: flex;
  }
}

  /*انجليزي*/
  
.ltr {
  direction: ltr;
  text-align: left;
  svg{
    left: auto !important;
    right: 5% !important;
  }
  .direction2 {
    direction: rtl;
  }

  .text-align {
    text-align: left;
  }
  .text-align2 {
    text-align: right;
  }

  .justify2 {
    justify-content: start;
    display: flex;
  }
  .justify1 {
    justify-content: end;
    display: flex;
  }
  .welcome-info{
  margin-right:0 !important;
  margin-left: 44%;
  }
  .more[data-v-52e1108b]{left: 29%; right: 0 !important;}
  .fa-arrow-left-long {transform: rotate(180deg);}
  }
.paginate-links{
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: center;
    margin-top: 20px;
    .number{
        margin: 0 7px;
        width: 20px;
        height: 20px;
        background: #028fd2;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
    }
}
.VueCarousel-pagination[data-v-438fd353]{display: none !important;}
</style>
