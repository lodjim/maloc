<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const years = ref(new Date().getFullYear())
const router = useRouter();
function goApp(){
    router.push("/home")
}

</script>

<template>
<div class="container">
    <nav>
        
        <div class="logo">
            <img src="../assets/maloc.png" alt="" srcset="" width="96" height="96">
        </div>
        
        <div class="nav-links">
            <a class="nav-link" href="#welcome">Welcome</a>
            <a class="nav-link" href="#aboutus">About Us</a>
            <a class="nav-link" href="#contact">Contact</a>
        </div>
        
        <div class="left-btns">
            <button class="btn" @click="goApp"> 
                software
            </button>
        </div>
    </nav>
    <section class="welcome" id="welcome">
        <div class="left-bloc">
        <p class="welcome-msg">
        End Malaria,<br>
        Save Lives
        </p>
        <svg width="291" height="286" viewBox="0 0 291 286" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M203.262 52.137C220.26 59.8504 232.83 77.9912 243.401 97.8461C254.114 117.844 262.97 139.556 260.399 159.982C257.828 180.408 243.972 199.406 226.117 208.548C208.119 217.69 186.264 216.832 164.981 226.974C143.841 237.116 123.272 258.256 105.131 258.685C87.1328 259.113 71.4203 238.687 65.8496 217.69C60.2788 196.692 64.8497 174.98 59.7074 153.411C54.5651 131.842 39.5668 110.416 41.5666 92.7038C43.5664 74.9916 62.5642 61.136 82.2762 54.7082C101.845 48.1375 122.415 48.9945 143.412 48.1375C164.553 47.1376 186.122 44.4236 203.262 52.137Z" fill="#FF0066"/>
        <rect x="11.5427" y="51.9224" width="21.6425" height="21.6425" rx="4.32851" transform="rotate(-11.4837 11.5427 51.9224)" fill="#5EFF36"/>
        <rect x="223.64" y="10.0801" width="21.6425" height="21.6425" rx="4.32851" transform="rotate(-11.4837 223.64 10.0801)" fill="#5EFF36"/>
        <rect x="265.482" y="222.177" width="21.6425" height="21.6425" rx="4.32851" transform="rotate(-11.4837 265.482 222.177)" fill="#5EFF36"/>
        <rect x="53.385" y="264.019" width="21.6425" height="21.6425" rx="4.32851" transform="rotate(-11.4837 53.385 264.019)" fill="#5EFF36"/>
        <path d="M67.2918 272.377L278.149 230.462L236.233 19.6051L25.3765 61.5204L67.2918 272.377Z" fill="#5EFF36" fill-opacity="0.17" stroke="#5EFF36" stroke-width="1.44284"/>
        </svg>
        </div>
       <img src="../assets/microscope.png" alt="" srcset="" width="584" height="532">
    </section>
   
    <section class="aboutus" id="aboutus">
        
        <div class="aboutus-title">
            <p class="aboutus-title-text">About Us</p>
        </div>
        
        <div class="about-content">
            <div class="about-left-content">
                <div class="blobtext1">
                 <img src="../assets/vec1.svg" alt="" srcset="" class="vecImg"> 
                </div>
                <div class="blobtext2">
                        <img src="../assets/vec3.svg" alt="" srcset="" class="vecImg">
                        </div>
                        </div>
                        <div class="about-middle-content">
                            
                            <div class="circle">
                                <p class="circle-text">
                                    1
                                </p>
                            </div>
                            <div class="circle-limiter"> 
                            </div>
                              <div class="circle">
                                <p class="circle-text">
                                    2
                                </p>
                            </div>
                            <div class="circle-limiter"> 
                            </div>
                              <div class="circle">
                                <p class="circle-text">
                                    3
                                </p>
                            </div>
                        </div>
                        <div class="about-right-content">
                          <img src="../assets/vec2.svg" alt="" class="vecImg">
                     </div>
        </div>
    </section>
    <section class="contact" id="contact">

        <p class="aboutus-title-text">
            Contact Us 
        </p>
        <div class="contact-content">
        <div class="contact-info">
            <p class="contact-info-text">
           follow us on our various social media accounts so you don't miss any posts 
            </p>
            <div class="footer-rs">
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
            </div>
        </div>
     <div class="form-container">
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input class="form-input" type="email" id="email" name="email" placeholder="exemple@gmail.com">
      </div>
    <div class="form-group">
        <label for="email" class="form-label">Message</label>
        <textarea class="form-input-textarea" id="email" name="email" placeholder="message">
            </textarea>
      </div>
    <div class="submit-button-wrapper">
      <button class="submit-button" @click="goDiag">Send</button>
    </div>
    </div>
    </div>
    </section>
     <footer>
        <div class="footer-container">
            <div class="footer-links">
                <a href="#welcome" class="footer-link">Welcome</a>
                <a href="#aboutus" class="footer-link">About Us</a>
                <a href="#contact" class="footer-link">Contact</a>
            </div>
            <p><span id="current-year">{{ years }}</span> Maloc. All rights reserved.</p>
        </div>
    </footer>
</div>
</template>

<style scoped>
.footer-link{
    text-decoration: none;
    font-family: "Montserrat";
    font-size: 16px;
    color: #FFF;
}
.footer-link:hover{
    transform: scale(1.02);
    transition: 0.3s;
}
.body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
}

.content {
    flex: 1;
    padding: 20px;
}

footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    width: 100%;
}

.footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer-links {
    margin-bottom: 10px;
}

.footer-links a {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
}

.footer-links a:hover {
    text-decoration: underline;
}

.form-container {
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 550px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}

.form-label {
  font-size: 1.5rem;
  font-family: 'Montserrat', sans-serif;
}
.form-input-textarea{
  border: 2px solid #B1B1B1;
  border-radius: 6px;
  width: 488px;
  height: 66px;
  padding-top: 1rem;
  font-size: 1.25rem;
  font-family: 'Montserrat', sans-serif;
  margin-top: 1.25rem;
}
.form-input {
  border: 2px solid #B1B1B1;
  border-radius: 9999px;
  width: 488px;
  height: 66px;
  padding-left: 1.25rem;
  font-size: 1.25rem;
  font-family: 'Montserrat', sans-serif;
  margin-top: 1.25rem;
}

.submit-button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: start;
  margin-top: 3.125rem;
  width: 514px;
}

.submit-button {
  background-color: #EDEEEE;
  border-radius: 9999px;
  width: 514px;
  height: 66px;
  font-size: 1.25rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  transition: background-color 0.3s;
  border: none;
  cursor: pointer;
}

.submit-button:hover {
  background-color:  #D4D4D4;
}

.vecImg:hover{
    transform: scale(1.02);
}
.footer-info-text{
    font-size: 20px;
    font-family: "Montserrat";
    font-weight:500;
}
.footer-rs{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 130px;
}

.textFontSemiBold{
    font-family: "Epilogue", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    line-height: 30px;
    color: #2D2D2D;
}

.contact-info{
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}

.contact-info-text{
  font-size: 17px;
  width: 400px;
}
.contact-content{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90vw;
}
.about-right-content{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 566px;
}
.about-middle-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
body{
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll ;
}
.circle-limiter{
    width: 12px;
    height: 95px;
    background-color: #D9D9D9;
    border-radius: 10px;
    margin-top: 40px;
    margin-bottom:40px ;
}
.circle-text{
    font-size: 20px;
    font-family: "Montserrat";
    font-weight: 700;   
}
.circle{
    display: flex;
     width: 70px;
    justify-content: center;
    align-items: center;
    height: 70px;
    border-radius:50px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.2);

}
.about-left-content{
    display: flex;
    flex-direction: column;
}

.about-content{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
}

.aboutus-title-text{
    font-family: "Montserrat";
    font-size: 32px;
    color: #090909;
    font-weight: 700;
    margin-top: 100px;
}

.aboutus-title{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.aboutus{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;   
}
.welcome-msg{
    font-family: "Montserrat";
    font-weight: 700;
    font-size:96px;
}
.welcome{
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items: center;
    margin-top: 100px;
    width:80%;
}
.btn{
    display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 41px;
  border-radius: 48px;
  background-color: #EDEEEE;
  border: none;
  cursor: pointer;   
  font-size: 14px;
  font-family: "Montserrat";
  color: #090909;
  font-weight: 700;
}
.nav-link{
    text-decoration: none;
    font-family: "Montserrat";
    font-size: 16px;
    color: #090909;
    
}
.nav-link:hover{
    transform: scale(1.02);
    transition: 0.3s;
}
.nav-links{
    width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.container{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
nav{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}
</style>