<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const cellImages = ref(range(6));

function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

function useTheMicroscope(){
  router.push("/analysis") 
}
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
       <img src="https://picsum.photos/45" alt="" style="border-radius: 50px;">
       <button class="nav-button btn-anim">
              <svg width="19" height="19" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.2 13.8625C2.91313 13.8625 2.66429 13.7572 2.45349 13.5465C2.2428 13.3357 2.13745 13.0868 2.13745 12.8V3.45007C2.13745 3.16319 2.2428 2.91435 2.45349 2.70355C2.66429 2.49286 2.91313 2.38751 3.2 2.38751H7.86427V3.45007H3.2V12.8H7.86427V13.8625H3.2ZM10.7011 11.0468L9.95209 10.2818L11.5777 8.65621H5.96245V7.59381H11.5565L9.93089 5.96819L10.68 5.20319L13.6125 8.13569L10.7011 11.0468Z" fill="black"/>
              </svg>
       </button>
      </div>
    </nav>
    <div class="upload-images">
        <button class="upload-btn btn-anim">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66671 33.3333C5.75004 33.3333 4.96532 33.0069 4.31254 32.3542C3.65976 31.7014 3.33337 30.9167 3.33337 30V9.99999C3.33337 9.08332 3.65976 8.2986 4.31254 7.64582C4.96532 6.99305 5.75004 6.66666 6.66671 6.66666H16.6667L20 9.99999H33.3334C34.25 9.99999 35.0348 10.3264 35.6875 10.9792C36.3403 11.6319 36.6667 12.4167 36.6667 13.3333H18.625L15.2917 9.99999H6.66671V30L10.6667 16.6667H39.1667L34.875 30.9583C34.6528 31.6805 34.2431 32.2569 33.6459 32.6875C33.0487 33.118 32.3889 33.3333 31.6667 33.3333H6.66671ZM10.1667 30H31.6667L34.6667 20H13.1667L10.1667 30Z" fill="#090909"/>
</svg>
        <input type="file" width="90" height="90" class="input-file">
        </button>
        <p class="upload-text">Upload images</p>
      </div>

<div class="sep">
    <div class="sep-line"></div>
    <p class="sep-text">Or</p>
    <div class="sep-line"></div>
</div> 

<button class="microscope-btn btn-anim" @click="useTheMicroscope">
<span class="microscope-btn-text">Microscope</span>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.33337 35V32.2221H16.8888V28.2221H16.4721C14.2038 28.2221 12.2802 27.4328 10.7013 25.8541C9.12268 24.2755 8.33337 22.3519 8.33337 20.0833C8.33337 18.3889 8.81254 16.8472 9.77087 15.4583C10.7292 14.0694 12 13.0833 13.5834 12.5C13.7314 11.4444 14.2199 10.5879 15.0488 9.9304C15.8774 9.27317 16.8334 8.97234 17.9167 9.0279L17.028 6.5279L18.6946 5.92873L18.1113 4.38873L21 3.33331L21.5555 4.88873L23.1946 4.3054L27.8613 16.6666L26.1388 17.2779L26.7221 18.8333L23.8888 19.8612L23.3334 18.3054L21.6113 18.9446L20.5834 16.1387C20.1667 16.5832 19.6782 16.9073 19.118 17.1112C18.558 17.3148 17.9692 17.3982 17.3517 17.3612C16.6728 17.324 16.0417 17.1133 15.4584 16.7291C14.875 16.345 14.3982 15.8612 14.028 15.2779C13.1296 15.7407 12.4189 16.4023 11.8959 17.2629C11.3728 18.1235 11.1113 19.0636 11.1113 20.0833C11.1113 21.5725 11.6324 22.8383 12.6746 23.8808C13.7171 24.9233 14.983 25.4446 16.4721 25.4446H30.5555V28.2221H21.3334V32.2221H31.6667V35H8.33337ZM23.028 16.0833L25 15.3612L21.8334 7.0279L19.8334 7.74998L23.028 16.0833ZM17.6617 15.1387C18.2114 15.1387 18.6738 14.9529 19.0488 14.5812C19.4238 14.2096 19.6113 13.7489 19.6113 13.1991C19.6113 12.6497 19.4253 12.1875 19.0534 11.8125C18.6817 11.4375 18.2212 11.25 17.6717 11.25C17.122 11.25 16.6596 11.4358 16.2846 11.8075C15.9096 12.1794 15.7221 12.6401 15.7221 13.1896C15.7221 13.739 15.9081 14.2012 16.28 14.5762C16.6517 14.9512 17.1123 15.1387 17.6617 15.1387Z" fill="#090909"/>
</svg>
</button>

<div class="latest-title">
  <p class="latest-title-text">Latest analysis</p>
</div>
<div class="row">

  <div class="col1">
    <img src="../assets/C101P62ThinF_IMG_20150918_151149_cell_69.png" alt="" srcset="" width="75" height="75" v-for="i in cellImages">
  </div>
  <div class="col2">
      <p class="state-text">
        Positive
      </p>
  </div>
  </div>

  <div class="row">

  </div>

</div>
</template>

<style scoped>
.btn-anim:hover{
  background-color: #D4D4D4;
  transition: .3s;
  transform: scale(1.02);
}
.state-text{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: "Montserrat";
  font-weight:700;
}
.col2{
  width: 170px;
  height:182px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-radius: 38px;
  border-color: #D3D3D3;

}
.col1{
  width:734px;
  height: 182px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-radius: 38px;
  border-color: #D3D3D3;
}
.row{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 917px;
  height: 182px;
}
.latest-title-text{
   font-size: 20px;
  font-family: "Montserrat";
}
.latest-title{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 917px;
}
.microscope-btn-text{
  font-size: 20px;
  font-family: "Montserrat";
  font-weight: 700;
}

.microscope-btn{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 488px;
  height: 66px;
  border-radius: 48px;
  background-color: #EDEEEE;
  border: none;
  cursor: pointer;
}
.input-file{
      opacity: 0;
    position: absolute;    
     z-index: 1;
     top: 45px;
     left: 45px;

}
.sep-text{
  font-size: 20px;
  font-family: "Montserrat";
  font-weight: 500;
}
.sep{
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  margin-top:30px;
  width: 917px;
}
.sep-line{
  width: 424px;
  height: 5px;
  border-radius: 5px;
  background-color: #D3D3D3;
}

.upload-text{
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 500;
}
.upload-btn{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  border-radius: 45px;
  background-color: #EDEEEE;
  border:none;
  cursor: pointer;
  position: relative;
}
.upload-images{
  width: 917px;
  height: 203px;
  border-style: dashed;
  border-width: 1px;
  border-color: #D3D3D3;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.container{
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

.nav-items{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  height: 100px;
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
</style>