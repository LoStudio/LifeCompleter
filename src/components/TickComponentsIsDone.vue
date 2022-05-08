<template>
    <div class="outsideContainer">
        <BasicComponents class="BasicComponents" v-show="PisDone.isDone">
            <TickIcon></TickIcon>
            <div class="MiddleContainer">
                <H3>{{title}}</H3>
                <p>{{subTitle}}</p>
            </div>
            <IsCheckedIcon @click="()=>$emit('submit',false)"></IsCheckedIcon>
        </BasicComponents>
        <!-- <hr> -->
    </div>
</template>

<script setup>
import BasicComponents from './BasicComponents.vue';
import TickIcon from './TickComponents/TickIcon.vue';
import IsCheckedIcon from './TickComponents/IsCheckedIcon.vue';
import { defineProps,defineEmits } from 'vue';

const PisDone = defineProps(['isDone','title','subTitle'])
defineEmits(["submit"])

</script>

<style scoped>
.MiddleContainer>h3,p{
    margin: 0;
}

.BasicComponents{
    display: flex;
    justify-content:space-around;
    align-items: center;
    /* align-content: center; */
    background:gray;
    text-decoration: line-through;
    /* position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-0%); */
}
/* 
.outsideContainer>hr{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-0%);
    height: 10px;
    width: 100%;
    z-index: 10;
} */

.BasicComponents>.MiddleContainer{
    text-align: left;
    width: 320px;
}

.outsideContainer{
    position: relative;
}
</style>