<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function goBack(){
    router.push("/home")
}
function goDiag(){
    router.push("/diagnostic")
}
</script>

<template>
<div class="container">
  <div class="image-wrapper">
    <img src="../assets/maloc-628x628.png" alt="">
  </div>
  <div class="content-wrapper">
    <div class="button-wrapper">
      <button class="back-button" @click="goBack"> 
        <span class="icon-wrapper">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.125 11.375L1.75 7M1.75 7L6.125 2.625M1.75 7H12.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <span class="button-text">Get to previous</span>
      </button>
    </div>
    <div class="login-header">
      <p class="login-title">Login</p>
    </div>
    <div class="form-container">
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input class="form-input" type="email" id="email" name="email" placeholder="exemple@gmail.com">
      </div>
      <div class="form-group">
        <label for="pwd" class="form-label">Password</label>
        <input class="form-input" type="password" id="pwd" name="pwd">
      </div>
    <div class="submit-button-wrapper">
      <button class="submit-button" @click="goDiag">Log in</button>
    </div>
    </div>
 </div>
</div>
</template>

<style scoped>
.myFont {
  font-family: "Montserrat", sans-serif;
}
</style>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}


.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.button-wrapper {
  display: flex;
  flex-direction: column;
  align-self: start;
  width: 100%;
}

.back-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 193px;
  height: 30px;
  border: none;
  cursor: pointer;
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #EDEEEE;
}

.button-text {
  margin-left: 12px;
  font-family: 'Montserrat', sans-serif;
  color: #090909;
}

.login-header {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.75rem;
}

.login-title {
  font-size: 2.25rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
}

.form-container {
  display: flex;
  flex-direction: column;
  width: 100%;
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
</style>
