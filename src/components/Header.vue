<template>
  <div class="header">
    <md-toolbar-row>
        <div class="md-toolbar-section-start">
          <ul>
            <li>My Item 1</li>
            <li>My Item 2</li>
            <li>My Item 3</li>
          </ul>
            <a href="#" class="logo-raizama">RAIZAMA</a>
            <md-button>Entrar</md-button>
        </div>
        <!-- <div class="md-toolbar-section-start">

        </div>
        <div class="md-toolbar-section-start">

        </div> -->
    </md-toolbar-row>
  </div>
</template>

<script>

  export default{
    data(){
      return {

      }
    }  
  }
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-align: center;
}

header {
  border: #42b983;
  /* box-sizing: border-box; */
  display: inline-block;
  vertical-align: middle;
}

.logo-raizama{
  display: grid;
  text-align: center;
}

.md-toolbar-row {
  width: 100% !important;
}
</style>
