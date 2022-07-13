<template>
<div class="flex pl-12 mt-10 justify-center bg-waves bg-no-repeat bg-center h-screen">
    <div class="flex-row justify-center">
        <h3 class="text-2xl font-bold font-fredoka text-blue-600">Hello! welcome to U-BMI.</h3>
        <p class="text-xl mt-5 font-bold ">Know Your BMI!</p>
        
        
        <div class="flex-row justify-center">
        <input class="mt-5 ring-2 mr-3 ring-blue-500  p-3 rounded-md" type="text" placeholder="Your Name" required v-model="name">
        <input class="mt-5 ring-2 mr-3 ring-blue-500  p-3 rounded-md" type="number" placeholder="Your age" required v-model="age">
        <input class="mt-5 ring-2 mr-3 ring-blue-500  p-3 rounded-md" type="number" placeholder="heigh in meters" required v-model="height">
        <input class="mt-5 ring-2 ring-blue-500  p-3 rounded-md" type="number" placeholder="weight in Kgs" required v-model="weight">
        
      
        </div>
        <div class="mt-28 md:mt-20 text-gray-900 text-xl font-bold font-fredoka" v-if="bmi">Hey <span class="text-yellow-300">{{name}}</span>, Your BMI is <span class="text-red-400">{{bmi.toFixed(2)}}</span> and you are <span class="text-red-600">{{status}}</span>
        
        </div>
        <p class="text-sm text-gray-700 font-talic mt-48">designed by jabir khalif</p>
    </div>
</div>
 
</template>

<script setup>

//imports
import {ref,computed } from 'vue'


const name = ref("")
const age = ref("")
const height = ref("")
const weight = ref(" ")


//computed
const bmi = computed( ()=> {
   return weight.value/ (height.value * height.value)
})
const status = computed( () => {
    if ( bmi.value > 25) return "overweight"
    else if(bmi.value < 18)  return "underweight"
    else return "normal weight"
})
















</script>