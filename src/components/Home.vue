<template>
  <div class="hello">
    <header>
      <div class="logo"> 🩸Plasmatch</div>
      <nav>
        <ul class="nav-links">
          <li><router-link class="router-text" to='/donor-page'>Donate</router-link></li>
          <li><router-link class="router-text" to='/patient-page'>patient</router-link></li>
        </ul>
      </nav>
      <router-link to='/about'><button>Contact Us</button></router-link>
      <hr>
    </header>
    <body>
    <router-view/>
    </body>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
li, button {
  font-weight: 500;
  font-size: 16px;
  color: white;
  text-decoration: none;
  margin-left: 50px;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;
  background-color: darkslategrey;
}
.logo {
  font-family: "Lobster";
  color: red;
  font-size: 50px;
}
.nav-links {
  list-style: none;

}
.router-text {
  text-decoration:none;
  color: white;
  font-size: 20px;
}
.router-text:hover {
  transition: .2s;
  color: aqua;
}
.nav-links li {
  display: inline-block;
  padding: 0px 20px;
  transition: all 0.3s ease 0s;
}
button {
  padding: 9px 25px;
  background-color: rgba(0, 136, 169, 1);
  outline: none;
  border: none;
  border-radius: 20px;
}
button:hover{
  transition: .3s ease .3s;
  background-color: rgba(0, 136, 169, 0.6);
}
</style>
