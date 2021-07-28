<template>
    <div class="todos__list">
            <!-- <transition-group  name="fade" tag="ul"> -->
                <ul>
                    <VTodo
                    
                    :todo="todo"
                    v-for="todo in filteredTodos"
                    :key="todo.id" 
                    />
                </ul>
            <!-- </transition-group>   -->
            <VTodoFilters v-if="todos.length >= 1"/>
  
    </div>
</template>

<script>


import { mapState } from 'vuex';

import VTodo from '@/components/VTodo.vue';
import VTodoFilters from '@/components/VTodoFilters.vue';

    export default {
        data(){
            return {
                show: true,
            }
        },
        components: {
            VTodo,
            VTodoFilters
        },

        computed: {
            ...mapState([
                'todos',
                'filteredTodos'
            ])
        },
        created(){
            this.$store.state.filteredTodos = this.$store.state.todos;
        }
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

.todos__list {
    margin-top: 3rem;
}

ul {
    list-style-type: none;
    border-radius: 0.5rem;
    background: transparent;
    box-shadow: 0 4px 25px 0 rgba(0,0,0, 0.15);

    .dark-theme & {
        background-color: $dark-bg;
    }

    @media (prefers-color-scheme: dark) {
        background-color: $dark-bg;
    }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 200ms;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: translateY(100%) scaleX(1);
}


</style>