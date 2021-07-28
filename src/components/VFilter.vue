<template>
    <div class="filters">
        <button @click="showAll()">All</button>
        <button @click="showUncompleted()">Active</button>
        <button @click="showCompleted()">Completed</button>     
    </div>
</template>

<script>


    export default {

        computed: {
            todos(){
                return this.$store.state.todos;
            },
            filteredTodos(){
                return this.$store.state.filteredTodos;
            }
        },
        methods: {
            showCompleted(){
                this.$store.dispatch('showCompleted', this.todos.filter((todo) => todo.completed))
            },
            showUncompleted(){
                this.$store.dispatch('showCompleted', this.todos.filter((todo) => !todo.completed))
            },
            showAll(){
                this.$store.dispatch('showAll', this.todos)
            }
        }
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

.filters {
    flex-basis: 60%;
    max-width: 60%;
    display: flex;
    justify-content: center;
    

    button {
        border: none;
        background: none;
        outline: none;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1.6rem;
        margin-right: 2rem;
        cursor: pointer;
        color: #9c9c9c;
        transition: 250ms ease;

        &:hover {
            color: #000;

            .dark-theme & {
                color:  $secondary-grayish-blue;
            }

            @media (prefers-color-scheme: dark) {
                color:  $secondary-grayish-blue;
            }
        }

        &.active {
            color: $bright-blue;
        }
    }
}


</style>