import {slides} from './data.js'

const {createApp} = Vue

createApp({
    data(){
        return{
            slides: slides, //proxy dell'array
            activeIndexSlide: 0,//indice della slide attiva
        }
    },
    methods:{
        nextSlide(){
            if(this.activeIndexSlide < this.slides.length -1){
            this.activeIndexSlide++
            }else{
            this.activeIndexSlide = 0;
        }
        },
        prevSlide(){
            if(this.activeIndexSlide > 0){
                this.activeIndexSlide--
            }else{
                this.activeIndexSlide = this.slides.length -1;
            }
        },
        currentSlide(){            
                this.activeIndexSlide = 0
                console.log(event.target);
    }
},
    mounted(){
        // setInterval(this.nextSlide, 3000)
        // this.nextSlide
    }
}).mount('#app')