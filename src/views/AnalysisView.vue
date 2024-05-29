<script setup>
import { ref,onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Loading from '@/components/Loading.vue';
import Validate from '@/components/Validate.vue';

const router  = useRouter()

const step_state =  ref({"ci":"loading","ai":"none","cr":"none"})
const buttonContent = ref("Stop")

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function goNext(){
    if (buttonContent.value==="Stop"){
        router.push("/diagnostic")
    }else{
        router.push("/")
    }
}

async function handleChangeState(){
    await sleep(7000);
    step_state.value.ci="validate"
    step_state.value.ai ="loading"
    await sleep(10000);
    step_state.value.ai="validate"
    step_state.value.cr = "loading"
    await sleep(5000);
    step_state.value.cr="validate"
    buttonContent.value="See results"
}

onMounted(async ()=>{
    await handleChangeState()
})

</script>
<template>
    <div class="container">
     <nav class="nav-bar">
      <div class="img-logo">
        <img src="../assets/maloc.png" alt="" srcset="" width="94" height="94">
      </div>
      <div class="nav-items">
       <p class="name-item">
        Dr-Lo
       </p> 
       <img src="../assets/787-45x45.jpg" alt="" style="border-radius: 50px;">
       <button class="nav-button btn-anim">
              <svg width="19" height="19" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.2 13.8625C2.91313 13.8625 2.66429 13.7572 2.45349 13.5465C2.2428 13.3357 2.13745 13.0868 2.13745 12.8V3.45007C2.13745 3.16319 2.2428 2.91435 2.45349 2.70355C2.66429 2.49286 2.91313 2.38751 3.2 2.38751H7.86427V3.45007H3.2V12.8H7.86427V13.8625H3.2ZM10.7011 11.0468L9.95209 10.2818L11.5777 8.65621H5.96245V7.59381H11.5565L9.93089 5.96819L10.68 5.20319L13.6125 8.13569L10.7011 11.0468Z" fill="black"/>
              </svg>
       </button>
      </div>
    </nav>
        <div class="animation">
        <iframe src="https://lottie.host/embed/9f48f092-66e4-4678-a12f-17f68db11cfc/F8u67RjQna.json" width="500" height="500" style="border: none;"></iframe>
        </div>
        <div class="stepper">
            <div class="step1">
                <p class="im" v-show="step_state.ci === 'none' ">1</p>
                <Validate v-show="step_state.ci === 'validate'"></Validate>
                <Loading v-show="step_state.ci === 'loading'"></Loading>
                <p class="step-text">collecting images</p>
            </div>
        <div class="limiter">
        </div>
         <div class="step1">
                 <p class="im" v-show="step_state.ai === 'none' ">2</p>
                <Validate v-show="step_state.ai === 'validate'"></Validate>
                <Loading v-show="step_state.ai === 'loading'"></Loading>
                <p class="step-text">analyzing images</p>
            </div>
        <div class="limiter"></div>
        <div class="step1">
              <p class="im" v-show="step_state.cr === 'none' ">3</p>
                <Validate v-show="step_state.cr === 'validate'"></Validate>
                <Loading v-show="step_state.cr === 'loading'"></Loading>
            <p class="step-text">creating result</p>
        </div>
    </div>
    <button class="action-btn" @click="goNext" >
      <span class="action-btn-text">{{ buttonContent }}</span>
    </button>
    </div>

</template>
<style scoped>

.action-btn-text{
  font-size: 20px;
  font-family: "Montserrat";
  font-weight: 700;
}
.action-btn{
  margin-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 224px;
  height: 66px;
  border-radius: 48px;
  background-color: #EDEEEE;
  border: none;
  cursor: pointer;
}

.im{
    font-size: 20px;
    font-family: "Montserrat";
    font-weight: 700;
}
.limiter{
    background-color: #D3D3D3;
    width: 105px;
    height: 3px;
    border-radius: 3px;
}

.step1{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 200px;
}
.step-text{
    font-family: 'Montserrat';
    font-size: 16px;
    font-weight: 500;
    color: #090909 ;
}
.stepper{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

}
.animation{
    display: flex;
    justify-content: center;
    align-items: center;
}
.container{
    display: flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items: center;
    width: 100vw;
    height: 100vh;
}
.nav-bar{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
}
.name-item{
  font-size: 15px;
  font-family: "Montserrat";
  font-weight: 700;
}

.nav-button{
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 5rem;
  border:none;
cursor: pointer;
} 
.nav-items{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  height: 100px;
}
</style>
