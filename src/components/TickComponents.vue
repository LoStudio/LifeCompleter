<template>
    <BasicComponents class="BasicComponents" v-show="!PisDone.isDone">
        <TickIcon></TickIcon>
        <div class="MiddleContainer">
            <H3>{{title}}</H3>
            <p>{{subTitle}}</p>
        </div>
        <IsCheckedIcon @click="()=>$emit('submit',true)"></IsCheckedIcon>
    </BasicComponents>
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
    color: whitesmoke;
    /* align-content: center; */
}

.BasicComponents>.MiddleContainer{
    text-align: left;
    width: 320px;
}
</style>