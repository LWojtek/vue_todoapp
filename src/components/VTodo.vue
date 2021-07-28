<template>
    <li class="todo">
        <div class="checkbox__wrapper">
            <input type="checkbox" @click="markCompleted(todo)">
            <div class="checkbox"></div>
             <p class="todo__text">{{ todo.todo }}</p>
        </div>
        <div class="remove__icon" @click="removeTodo(todo)">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
        </div>
       
    </li> 
</template>

<script>
    export default {
        name: 'VTodo',
        props: ['todo'],
        methods: {
            removeTodo(todo){
                this.$store.dispatch('remTodo', todo)                
            },
            markCompleted(todo) {
                if (todo.completed) {
                    this.$store.dispatch('markUncompleted', todo)
                } else {
                    this.$store.dispatch('markCompleted', todo)
                }
            }
        }        
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

.todo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: grab;

    padding: 1rem;
    background-color: #fff;
    border-bottom: 1px solid $primary-light-gray;

        .dark-theme & {
            background-color: $dark-bg;
            border-bottom-color:  $secondary-dark-grayish-blue;
        }

        @media (prefers-color-scheme: dark) {
            background-color: $dark-bg;
            border-bottom-color:  $secondary-dark-grayish-blue;
        }

    input {
        height: 2.2rem;
    }

    p {
        flex-basis: 90%;
        padding-left: 0.5rem;
        font-size: 1.8rem;

        
        .dark-theme & {
            color:  $secondary-grayish-blue;
        }

        @media (prefers-color-scheme: dark) {
            color:  $secondary-grayish-blue;
        }
    }
}

.remove__icon {
    cursor: pointer;
    opacity: 0;
    transition: 250ms;
    margin-right: 1rem;    
    // width: 100%;
    height: 100%;

    @media screen and (max-width: 767px) {
        opacity: 1;
    }

    svg {
   

        path {
            .dark-theme & {
               fill: $primary-light-gray;
            }
    
            @media (prefers-color-scheme: dark) {
               fill: $primary-light-gray;
            }
        }

    }
}

.todo:hover > .remove__icon {
    opacity: 1;
}

.remove__icon:hover > svg path {
    transition: 250ms ease;

        @media screen and (max-width: 768px) {
            fill:  rgb(124, 124, 124);
        }
}

.todo__text {
    flex-basis: 90%;
}
.checkbox__wrapper {
    display: flex;
    align-items: center;
    flex-basis: 60%;
    position: relative;
    margin-left: 1rem;



    input {
        z-index: 10;
        width: 10%;
        height: 4rem;
        opacity: 0;
        cursor: pointer;
        transform: translateX(-1rem);
    }

    .checkbox {
        position: absolute;
        width: 2.2rem;
        height: 2.2rem;
        border-radius: 50%;
        background-color: $primary-light-grayish-blue;     
        transition: 250ms ease;
    }

    input[type=checkbox]:checked ~ .checkbox::before {
        background-image: linear-gradient(126deg, rgba(87,221,255,1) 0%, rgba(192,88,243,1) 75%);
    }

    input[type=checkbox]:checked ~ .checkbox::after {
        opacity: 1;
    }

    input[type=checkbox]:checked ~ .todo__text {
        color: darkgray;
        text-decoration: line-through;
    }

    input[type=checkbox]:checked ~ .checkbox {
        background-image: linear-gradient(126deg, rgba(87,221,255,1) 0%, rgba(192,88,243,1) 75%);
    }

    input[type=checkbox]:hover ~ .checkbox {      
        background-image: linear-gradient(126deg, rgba(87,221,255,1) 0%, rgba(192,88,243,1) 75%);
    }


    .checkbox::before {
        position: absolute;
        content: '';
        top: 0.1rem;
        left: 0.1rem;
        width: 2rem;
        height: 2rem;
        background: #fff;
        border-radius: 50%;   

                        
        .dark-theme & {
               background-color: $dark-bg;
        }
    
        @media (prefers-color-scheme: dark) {
                background-color: $dark-bg;
        }

    }

        .checkbox::after {
        position: absolute;
        z-index: 5;
        content: '';
        top: 0.2rem;
        left: 0.2rem;
        width: 1.8rem;
        height: 1.8rem;
        background: transparent;
        background-image: url('../assets/images/icon-check.svg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border-radius: 50%;
        opacity: 0;
    }
}

</style>