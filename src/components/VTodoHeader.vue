<template>
    <div class="header__wrapper">
        <h1>TODO</h1>
        <div class="switch" @click="darkmode = !darkmode">
            <img src="@/assets/images/icon-moon.svg" alt="" v-show="!this.darkmode">
            <img src="@/assets/images/icon-sun.svg" alt="" v-show="this.darkmode">
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                darkmode: false,
            }
        },
        watch: {
            darkmode(newVal){
                this.bus.$emit('darkmode', newVal);
            }
        }, 
        created() {
            this.bus.$on('darkmode', (on) => {
                this.darkmode = on;
            });
        }
    }
</script>

<style lang="scss" scoped>

.header__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 5rem;

    h1 {
        letter-spacing: 2rem;
        padding-top: 1rem;
        color: #fff;
    }
}

</style>