<template>
    <div>
        <div class="todos__filters">
            <div class="items__left">
                <p>{{ itemsLeft.length }} items left</p>
            </div>
            <VFilter />
            <div class="items__right">
                <button>Clear Completed</button>
            </div>
        </div>    
    </div>
</template>

<script>

import VFilter from '@/components/VFilter.vue';
import { mapState } from 'vuex';



    export default {
        computed: {
            ...mapState([
                'filteredTodos'
            ]),
            itemsLeft(){
                return this.filteredTodos.filter((todo) => {
                    return !todo.completed
                })
            }
        },
    components: {
        VFilter
    }
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

.todos__filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    background-color: #fff;

        .dark-theme & {
            background-color:  $dark-bg;
        }

        @media (prefers-color-scheme: dark) {
            background-color:  $dark-bg;
        }

    .items__left,
    .items__right {
        flex-basis: 20%;
    }

    .items__left p {
        color: #9c9c9c;
        font-size: 1.4rem;
    }

    
    button {
        border: none;
        background: none;
        outline: none;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1.4rem;        
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
    }

}



</style>