<template>
    <header class="container header--bg">
        
    </header>
</template>

<script>

export default {

}
</script>

<style lang="scss">

header {
    min-height: 30rem;
}

.header--bg {
    background-image: url('../assets/images/bg-desktop-light.jpg');
    background-repeat: no-repeat;
    transition: 250ms ease;

    .dark-theme & {
        background-image: url('../assets/images/bg-desktop-dark.jpg');
    }

    @media (prefers-color-scheme: dark) {
        background-image: url('../assets/images/bg-desktop-dark.jpg');
    }

    @media screen and (max-width: 375px) {
        background-image:url('../assets/images/bg-mobile-light.jpg');
    }
}

</style>

