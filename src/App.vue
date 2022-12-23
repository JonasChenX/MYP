<template>
  <navbar/>
  <breadcrumb/>
  <router-view/>
  <notifications-group/>
</template>
<script>
import navbar from '@/core/navbar/navbar.vue'
import breadcrumb from '@/core/breadcrumb/breadcrumb.vue'
import notificationsGroup from '@/components/myp201/componts/notificationsGroup.vue'
export default {
  components:{
    navbar,
    breadcrumb,
    notificationsGroup,
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
