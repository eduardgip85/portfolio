<template>
  <div class="home">
    <img src="../assets/background.jpg" alt="" style="width: 100%; height: auto; max-height: 500px">

    <div class="text-white textIntro">
      <b-row style="text-align: center" class="text-center m-0">
        <b-col cols="12">
          <div>
            {{ $t('Welcome1') }}
          </div>
          <div>
            {{ $t('Welcome2') }}
          </div>  
        </b-col>
      </b-row>
      
    </div>


    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red" class="bi bi-caret-down-square-fill" viewBox="0 0 16 16">
      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6H4z"/>
    </svg>
    
    <About id=""></About>
    <Portfolio></Portfolio>
    <About id=""></About>
    <About id=""></About>
    <About id="about"></About>

    
  </div>
</template>


<script>
import About from '@/components/About.vue'
import Portfolio from '@/components/Portfolio'

export default {
  name: 'Home',
  components: {
    About,
    Portfolio
  }
}

</script>

<style>
  .bi-caret-down-square-fill {
    position: relative;
    top: -16px; 
    margin: auto;
    width: 100%;
  }

/* mobile screen */
@media(max-width:425px ){

  .textIntro{
    display: none;
  }

}

/* pc screen */
@media (min-width: 430px){

  .textIntro{
    /* top: -100px;
    position: relative; */
    top:150px;
    position: absolute;
    font-weight: bold;
    margin: auto;
    width: 100%;
    font-size: 75px;
  }

}



</style>