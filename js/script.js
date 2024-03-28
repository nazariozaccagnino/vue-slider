import {slides} from './data.js'

const {createApp} = Vue

createApp({
    data(){
        return{
            slides: slides, /*proxy dell'array*/
        }
    },
    methods:{

    },
    mounted(){

    },
}).mount('#app')