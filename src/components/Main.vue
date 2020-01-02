<template>
  <div class="main">
    <Header></Header>
    <div>main {{ msg }}</div>
    <Footer></Footer>


  </div>
</template>

<script>
import Header from './Header';
import Footer from './Footer';

export default {
  name: 'Main',
  components:{Header, Footer},
  data () {
    return {
      msg: 'valor da variavel de msg'
    }
  }
}

components: {
  
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
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
} */
</style>
