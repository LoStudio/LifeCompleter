<template>
    <div @click="$emit('test-num',123)">
        
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';

defineEmits(['test-num']);
</script>

<style scoped>
div{
    width: 100px;
    height: 100px;
    background: #123123;
}
</style>