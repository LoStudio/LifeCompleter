// import firebase from 'firebase'
// import {ref,onUnmounted } from 'vue'
import { initializeApp } from "firebase/app";
import {getFirestore ,collection,query,where,onSnapshot,addDoc,getDocs,doc,setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAIklx2JpKjIrtYgmQYxQDlePrYvJNpX7Y",
    authDomain: "lifecompleter-b979e.firebaseapp.com",
    projectId: "lifecompleter-b979e",
    storageBucket: "lifecompleter-b979e.appspot.com",
    messagingSenderId: "66703901971",
    appId: "1:66703901971:web:0b3932c30ae405b6cf86e6",
    measurementId: "G-Q3FCWKWYCH"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// const db = firebaseApp.firestore()
const userCollection = collection(db,'users')
const todoListCollection = collection(db,'todoList')

// export const createUser = user =>{
//     return addDoc(userCollection,user)
// }

export const getUser = () =>{
    const q=query(userCollection,where("email","==","13123"),where("id","==","1"))
    return onSnapshot(q, (querySnapshot) => {
        const cities = [];
        querySnapshot.forEach((doc) => {
            cities.push(doc.data().id);
        });
        console.log("Current cities in CA: ", cities.join(", "));
      });
}

export const createTodoList = todo =>{
    return addDoc(todoListCollection,todo)
}

export async function getTodoList(){
    const q=query(todoListCollection,where("userId","==","000001"))
    
    // onSnapshot(q, (querySnapshot) => {
    //     const cities = [];
    //     querySnapshot.forEach((doc) => {
    //         // cities.push(doc.data().subtitle);
    //         console.log(doc.id)
    //         let tempData = doc.data()
    //         tempData['docId'] = doc.id
    //         console.log(tempData)
    //         tmpList.push(tempData)
    //     });
    //     console.log("TodoList: ", cities.join(", "));
    //     // return cities
    // });
    // let tmpList=[]
    const citySnapshot = await getDocs(todoListCollection,q);
    const cityList = citySnapshot.docs.map(doc => {let temp = doc.data();temp["docId"]=doc.id;return temp});
    return cityList
    
}

async function setOneTodoList(docId,data){
    const docRef = doc(db, "todoList", docId);
    // delete data["docId"]
    await setDoc(docRef,data);
}

export async function setTodoList(datas){

    // const frankDocRef = doc(db, "users", "frank");
    // await setDoc(frankDocRef, {
    //     name: "Frank",
    //     favorites: { food: "Pizza", color: "Blue", subject: "recess" },
    //     age: 12
    // });
    // await setDoc(doc(todoListCollection),{"test":1});
    // datas.forEach((data)=>{
    //     console.log("Info:"+data.docId)
        
    // })

    for(const data of datas){
        console.log(data)
        await setOneTodoList(data.docId,data)
    }
}

// Tip: perfetional ways -> https://stackoverflow.com/questions/69819831/firebase-collection-is-not-a-function
// https://modularfirebase.web.app/common-use-cases/firestore/
// https://www.youtube.com/watch?v=Htt8AKeF1Kw