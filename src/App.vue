<template>
   <body :class="{'dark-theme' : darkmode}">
    <VHeader />
    <VTodoWrapper />
  </body>
</template>

<script>
import VTodoWrapper from './components/VTodoWrapper.vue'
import VHeader from './components/VHeader.vue'

export default {
  name: 'App',
  data(){
    return {
      darkmode: false,
    }
  },
  components: {
    VTodoWrapper,
    VHeader
  },
  created () {
      this.bus.$on('darkmode', (on) => {
        this.darkmode = on;
      });
      this.darkmode = JSON.parse(localStorage.getItem('darkmode'))
  },
  watch: {
      darkmode(newVal) {
          localStorage.setItem("darkmode", JSON.stringify(this.darkmode))      
          this.bus.$emit('darkmode', newVal)
      }, 
  }
  
}
</script>

<style lang="scss">

@import '@/assets/scss/global.scss';
@import '@/assets/scss/variables.scss';

body {  
      min-height: 100vh;
      width: 100%;
      background-color: $primary-light-gray;
  
      &.dark-theme {
          background-color: $secondary-dark-blue;
      }
  
      @media (prefers-color-scheme: dark) {
          background-color: $secondary-dark-blue;
      }
}



</style>
