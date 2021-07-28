<template>
    <div class="todo__wrapper">
        <div class="checkbox__wrapper">
            <input type="checkbox">
            <div class="checkbox"></div>
        </div>
        <div class="input__wrapper">
            <input 
                type="text" 
                placeholder="Create a new todo..."
                v-model="todo"
                @keyup.enter="addTodo(todo)"
                >
        </div>
    </div>
</template>

<script>

 import { uuid } from 'vue-uuid'

    export default {
        data(){
            return {
                todo: ''
            }
        },
        methods: {
            addTodo(todo){
                this.$store.dispatch('newTodo', {
                    todo: todo,
                    id: uuid.v1(),
                    completed: false
                })
                this.todo = ''
            }
        },
}
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

.todo__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem;
    border-radius: 0.5rem;
    background-color: #fff;

    
    .dark-theme & {
        background-color: #24283B;
    }

    @media (prefers-color-scheme: dark) {
        background-color: #24283B;
    }

    input {
        height: 2.2rem;

            
        .dark-theme & {
            background-color: #24283B;
        }

        @media (prefers-color-scheme: dark) {
            background-color: #24283B;
        }
    }
}

.checkbox__wrapper {
    display: flex;
    align-items: center;
    flex-basis: 7%;
    position: relative;


    input {
        width: 100%;
        opacity: 0;
    }

    .checkbox {
        position: absolute;
        width: 2.2rem;
        height: 2.2rem;
        border-radius: 50%;
        border: 1px solid $primary-light-grayish-blue;
    }
}

.input__wrapper {
    flex-basis: 93%;

    input {
        width: 100%;
        outline: none;
        border: none;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1.8rem;
        padding-top: 0.5rem;
        padding-left: 0.5rem;

        .dark-theme & {
            color:  $secondary-grayish-blue;
        }

        @media (prefers-color-scheme: dark) {
            color:  $secondary-grayish-blue;
        }
    }
}

</style>