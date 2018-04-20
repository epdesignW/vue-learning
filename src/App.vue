
<template>
  <div id="app">
    <left-nav></left-nav>
    <!-- <router-link to="/count">vuex小demo</router-link> -->
    <div class="main">
        <!-- <router-link to="/pos"><span class="ic ic-meiyuan"></span>pos支付</router-link> -->
        <router-view/>
    </div>
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'
export default {
  name: 'App',
  components:{
    leftNav  //引用leftNav
  }
}
</script>

<style >
body, ul , ul li, h1, h2, h3, h4, h5, h6{ margin: 0; padding: 0;}
li{ list-style: none;} 
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  
}
a,a:link,a:active,a:visited{ text-decoration: none; color: darkcyan;}
.main{ width: 90%; float: right;}
</style>
