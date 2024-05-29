<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function toLogin(){
  router.push("/login")
}
</script>

<template>
<div class="container">
  <nav class="nav">
   <div class="nav-items"> 
    <button class="nav-button">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_47)">
          <path d="M10 1.80187C12.6701 1.80187 12.9863 1.81203 14.0408 1.86008C15.0158 1.90461 15.5453 2.0675 15.8977 2.20445C16.3645 2.38586 16.6976 2.60258 17.0475 2.9525C17.3975 3.30242 17.6141 3.63555 17.7955 4.10227C17.9325 4.45469 18.0954 4.98422 18.1399 5.95914C18.188 7.01367 18.1981 7.32992 18.1981 10C18.1981 12.6702 18.188 12.9864 18.1399 14.0409C18.0954 15.0159 17.9325 15.5453 17.7955 15.8977C17.6141 16.3645 17.3974 16.6977 17.0475 17.0476C16.6976 17.3975 16.3645 17.6142 15.8977 17.7955C15.5453 17.9325 15.0158 18.0955 14.0408 18.1399C12.9865 18.188 12.6702 18.1982 10 18.1982C7.32969 18.1982 7.01344 18.188 5.95914 18.1399C4.98414 18.0954 4.45469 17.9325 4.10227 17.7955C3.63555 17.6142 3.30234 17.3975 2.95242 17.0476C2.6025 16.6976 2.38578 16.3645 2.20445 15.8977C2.0675 15.5454 1.90453 15.0159 1.86008 14.0409C1.81195 12.9864 1.8018 12.6702 1.8018 10C1.8018 7.32992 1.81195 7.01367 1.86008 5.95922C1.90461 4.98422 2.0675 4.45469 2.20445 4.10227C2.38578 3.63555 2.6025 3.30242 2.95242 2.9525C3.30242 2.6025 3.63555 2.38586 4.10227 2.20445C4.45461 2.0675 4.98414 1.90461 5.95914 1.86008C7.01359 1.81203 7.32984 1.80187 10 1.80187ZM10 0C7.28414 0 6.94359 0.0114844 5.87703 0.0601562C4.81258 0.10875 4.08562 0.277812 3.44961 0.525C2.79195 0.780547 2.2343 1.1225 1.67836 1.67844C1.12242 2.23438 0.780547 2.79203 0.525 3.44961C0.277734 4.0857 0.10875 4.81266 0.0601562 5.87703C0.0114844 6.94359 0 7.28414 0 10C0 12.7159 0.0114844 13.0564 0.0601562 14.123C0.10875 15.1874 0.277734 15.9144 0.525 16.5504C0.780469 17.208 1.12242 17.7657 1.67836 18.3216C2.2343 18.8776 2.79195 19.2195 3.44961 19.475C4.0857 19.7223 4.81258 19.8913 5.87695 19.9398C6.94359 19.9885 7.28414 20 10 20C12.7159 20 13.0564 19.9885 14.123 19.9398C15.1873 19.8913 15.9143 19.7223 16.5503 19.475C17.208 19.2195 17.7656 18.8776 18.3216 18.3216C18.8775 17.7657 19.2195 17.208 19.475 16.5504C19.7222 15.9143 19.8913 15.1874 19.9398 14.123C19.9885 13.0564 20 12.7159 20 10C20 7.28414 19.9885 6.94359 19.9398 5.87703C19.8913 4.81266 19.7222 4.0857 19.475 3.44969C19.2195 2.79203 18.8775 2.23438 18.3216 1.67844C17.7656 1.1225 17.208 0.780469 16.5504 0.525C15.9143 0.277812 15.1873 0.10875 14.123 0.0601562C13.0564 0.0114844 12.7159 0 10 0ZM10 4.86484C7.16391 4.86484 4.86484 7.16406 4.86484 10C4.86484 12.8361 7.16391 15.1352 10 15.1352C12.836 15.1352 15.1352 12.8361 15.1352 10C15.1352 7.16398 12.836 4.86484 10 4.86484ZM10 13.3334C8.15906 13.3334 6.66664 11.8409 6.66664 10C6.66664 8.15906 8.15906 6.66664 10 6.66664C11.8409 6.66664 13.3334 8.15906 13.3334 10C13.3334 11.8409 11.8409 13.3334 10 13.3334ZM16.538 4.66195C16.538 5.32477 16.0008 5.86195 15.338 5.86195C14.6752 5.86195 14.138 5.32477 14.138 4.66195C14.138 3.99922 14.6752 3.46195 15.338 3.46195C16.0008 3.46195 16.538 3.99922 16.538 4.66195Z" fill="#090909"/>
        </g>
        <defs>
          <clipPath id="clip0_1_47">
            <rect width="20" height="20" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </button>
    <button class="nav-button">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_49)">
          <rect width="20" height="20" fill="white"/>
          <path d="M17.0408 17.0412H14.0775V12.4003C14.0775 11.2937 14.0577 9.86905 12.5362 9.86905C10.9928 9.86905 10.7566 11.0748 10.7566 12.3198V17.0408H7.79331V7.49741H10.6381V8.80163H10.6779C10.9626 8.31483 11.374 7.91437 11.8683 7.64289C12.3626 7.37141 12.9213 7.23908 13.4848 7.25999C16.4883 7.25999 17.0421 9.23561 17.0421 11.8058L17.0408 17.0412ZM4.44957 6.19296C3.4998 6.19311 2.72972 5.42327 2.72957 4.4735C2.72941 3.52374 3.49917 2.75366 4.44894 2.7535C5.39871 2.75327 6.16878 3.52311 6.16894 4.47288C6.16902 4.92898 5.98792 5.36643 5.66548 5.689C5.34304 6.01158 4.90566 6.19285 4.44957 6.19296ZM5.93128 17.0412H2.9648V7.49741H5.93121V17.0412L5.93128 17.0412ZM18.5182 0.00139458H1.47574C0.670268 -0.00766792 0.00972168 0.637566 -0.00012207 1.44304V18.5566C0.00940918 19.3624 0.669878 20.0083 1.47566 19.9998H18.5182C19.3257 20.0098 19.9887 19.364 19.9999 18.5566V1.44171C19.9884 0.634676 19.3253 -0.0104804 18.5182 6.64564e-05" fill="#090909"/>
        </g>
        <defs>
          <clipPath id="clip0_1_49">
            <rect width="20" height="20" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </button>
    <button class="nav-button nav-button-last">
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_51)">
          <path d="M11.9027 8.65473L19.3482 0H17.5838L11.119 7.51478L5.95547 0H0L7.8082 11.3637L0 20.4395H1.76443L8.59152 12.5036L14.0445 20.4395H20L11.9023 8.65473H11.9027ZM9.48608 11.4638L8.69495 10.3322L2.40018 1.32823H5.11025L10.1902 8.59475L10.9813 9.72632L17.5847 19.1717H14.8746L9.48608 11.4642V11.4638Z" fill="#090909"/>
        </g>
        <defs>
          <clipPath id="clip0_1_51">
            <rect width="20" height="20.45" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </button>
   </div> 
  </nav>
  <div class="image-container">
    <img src="../assets/maloc.png" alt="" srcset="" >
  </div>
  
  <div class="text-container">
    <p class="heading myFont">Welcome</p>
    <p class="subheading myFont">Simplifying malaria diagnostics for lab technicians.</p>
    <p class="paragraph myFont">Your reliable partner in malaria detection.</p>
    <button class="main-button myFont" @click="toLogin">
      Get Started
    </button>
  </div>
</div>

</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}

.myFont{
  font-family: "Montserrat", sans-serif;
}

.nav-items{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 15rem;
}
.nav{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 4rem;
}
.nav-button{
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 5rem;
  border:none;
cursor: pointer;

}
.image-container{
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
}
.text-container{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height:500px;
  width: 100%;
}
.heading{
  font-size: 40px;
  font-weight: 700;
  text-align: center;
}
.subheading{
  font-size: 24px ;
  font-weight: 300;
  text-align: center;
}
.paragraph{  
  font-size: 20px ;
  font-weight: 300;
  text-align: center;
}
.main-button{
  width: 329px;
  height: 66px;
  border-radius: 200px;
  border:none;
  margin-top: 40px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
}
.main-button:hover,.nav-button:hover{
  background-color: #D4D4D4;
  transition: .7s;
  transform: scale(1.02);
} 
</style>