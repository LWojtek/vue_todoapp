<template>
  <main class="container">
    <div class="todos__wrapper">

        <VTodoHeader/>

        <VTodoNew />

        <VTodos />

    </div>
  </main>
</template>

<script>

import VTodoHeader from '@/components/VTodoHeader.vue';
import VTodoNew from '@/components/VTodoNew.vue';
import VTodos from '@/components/VTodos.vue';

export default {
  name: 'VTodoWrapper',
  components: {
    VTodoHeader,
    VTodoNew,
    VTodos
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.todos__wrapper {
  max-width: 40%;
  width: 100%;
  margin: 0 auto;

  transform: translateY(-23rem);

  @media screen and (max-width: 680px) {
    max-width: 90%;
  }

    @media screen and (max-width: 1280px) {
    max-width: 60%;
  }
}


</style>
