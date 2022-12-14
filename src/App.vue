<template>
  <navbar/>
  <breadcrumb/>
  <title-card/>
  <router-view/>
  <notifications />
</template>
<script>
import navbar from '@/core/navber/navbar.vue'
import breadcrumb from '@/core/breadcrumb/breadcrumb.vue'
import titleCard from '@/common/componts/titleCard.vue'

export default {
  components:{
    navbar,
    breadcrumb,
    titleCard
  }
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
