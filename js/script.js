import {slides} from './data.js'

const {createApp} = Vue

createApp({
    data(){
        return{
            slides: slides, //proxy dell'array*
            activeIndexSlide: 0,//indice della slide attiva
        }
    },
    methods:{

    },
    mounted(){

    },
}).mount('#app')