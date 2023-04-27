//creating store

import { writable, readable } from "svelte/store";

export const time = readable(new Date(), set =>{
    //update the time
    const interval = setInterval(()=>{
        //update date in every second
        set(new Date())
    }, 1000)

    return function (){
        clearInterval(interval)
    }
})

export const count = writable(0);