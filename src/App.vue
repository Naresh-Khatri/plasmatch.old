<template>
  <div id="app">
    
    <header>
      <router-link class="router-text" to="/home"> 
      <div class="logo"> 🩸Plasmatch</div>
    </router-link>
      <nav>
        <ul class="nav-links">
          <li><router-link class="router-text" to='/donor-page'>Donor</router-link></li>
          <li><router-link class="router-text" to='/patient-page'>Patient</router-link></li>
        </ul>
      </nav>
      <router-link to='/about'><button>Contact Us</button></router-link>
    </header>
        <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  
  },
  created(){
    window.addEventListener("scroll",function(){
          var header = document.querySelector("header");
        header.classList.toggle("sticky",window.scrollY>0)
        })
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0px;
}
li, button {
  font-weight: 500;
  font-size: 16px;
  color: white;
  text-decoration: none;
  margin-left: 50px;
}
header {
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20%;
  background: linear-gradient(to left,  darkslategrey , black);
  z-index: 1000;
  transition: .2s;

}
header.sticky {
  padding: 10px 10%;
  background: linear-gradient(to left, rgba(47,79,79,0.8) , rgba(0,0,0,0.8)); 
  backdrop-filter: blur(2px);
  transition: .2s;
}
.logo {
  font-family: "Lobster";
  color: red;
  font-size: 50px;
  transition: 0.1s;
}
.logo:hover {
  font-size: 55px;
  transition: all .2s ease-out;
}
.nav-links {
  list-style: none;

}
.router-text {
  text-decoration:none;
  color: white;
  font-size: 20px;
  transition: 0.1s;
}
.router-text:hover {
transition: .2s ease-out;
  font-size: 30px;
  color: aqua;
}
.nav-links li {
  display: inline-block;
  padding: 0px 20px;
  transition: all 0.2s ease 0s;
}
button {
  padding: 9px 25px;
  background-color: rgba(0, 136, 169, 1);
  outline: none;
  border: none;
  border-radius: 20px;
}
button:hover{
  transition: .2s ease .2s;
  background-color: rgba(0, 136, 169, 0.6);
}
@media only screen and (max-width: 600px) {
  .logo {
    font-size: 15px;
    padding: 0px 0px;
     display: flex;
  justify-content:initial;
  align-items: center;
  }
}
</style>
