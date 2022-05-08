/** 
TODO: 
- 1. ADD a list with the bool todo value. And use the v-for to print out the card.
- 2. click the button change the list value.
    2022/05/04 BUG:
    The value emited and change the value in the parent template, but the ui didn't response.
3. Package the internet model.
**/

<script setup>
import TickComponents from '@/components/TickComponents.vue';
import { getTodoList,setTodoList,createTodoList } from '@/firebase';
import {ref,watch} from 'vue';
import TickComponentsIsDone from '../components/TickComponentsIsDone.vue';

const infos=ref([]);
let saved = ref(true);
let inputTitle = ref("");
let inputSubtitle = ref("")
let firstInfosChanged = ref(true)

const getUserInfo = async()=>{
    // await getUser()
    const a = await getTodoList()
    // console.log("This is my:"+a[0].title)
    infos.value=a
}

getUserInfo()


function updateList(key){
    // console.log(key-1)
    infos.value[key].isDone = !infos.value[key].isDone;
}

watch(()=>infos,async function(oldInfos,newInfos){
    if(firstInfosChanged.value==true) firstInfosChanged = false
    else{
        saved.value = false
        console.log("<TickPage> watch info:"+newInfos.value[0].title)
        
        await setTodoList(newInfos.value)
        saved.value=true
        console.log("changed")
    }

 },{ deep: true })

 //createTodoList
 function onCreateTodoList(){
    console.log("<TickPage onCreateTodoList>")
    if(inputTitle.value!="" && inputTitle.value!=""){
        let leng = infos.value.length
        let temp = ref({})
        temp.value["todoId"] = leng
        temp.value["userId"] = "000001"
        temp.value["title"] = inputTitle.value
        temp.value["subtitle"] = inputSubtitle.value
        temp.value["isDone"] = false
        createTodoList({...temp.value})
        inputTitle.value = ""
        inputSubtitle.value = ""
        getUserInfo()
    }
 }

</script>

<template>
    <div class="bContainer">
        <h1>Lo Completer</h1>
        <input type="text" v-model="inputTitle">
        <input type="text" v-model="inputSubtitle">
        <button @click="onCreateTodoList">ADD</button>

        <h3 v-if="infos.length==0">Loading</h3>
        <h4 v-if="saved" v-show="infos.length!=0">Saved</h4>
        <h4 v-else>Saving...</h4>
        <TickComponents v-for="(item,index) in infos" :key="item.todoId" :isDone="item.isDone" :title="item.title" :subTitle="item.subtitle" @submit="(e)=>{updateList(index)}"></TickComponents>
        <hr>
        <TickComponentsIsDone v-for="(item,index) in infos" :key="item.todoId" :isDone="item.isDone" :title="item.title" :subTitle="item.subtitle" @submit="(e)=>{updateList(index)}"></TickComponentsIsDone>
    </div>
</template>

<style scoped>
.bContainer{
    position: absolute;
    /* top: 50%; */
    left: 50%;
    transform: translate(-50%,0%);
}
</style>