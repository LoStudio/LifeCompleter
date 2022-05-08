<template>
    <div class="container">
        <img class="iconImg" src="@/assets/logo.png" alt="">
    </div>
</template>

<style scoped>
.container{
    height: 60px;
    width: 60px;
    background: #fff;
    border-radius: 60px;
    position: relative;
}

.iconImg{
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>