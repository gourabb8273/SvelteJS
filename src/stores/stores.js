//creating store

import { writable, readable, derived } from "svelte/store";

//creating readable store
export const time = readable(new Date(), (set) => {
  //update the time
  const interval = setInterval(() => {
    //update date in every second
    set(new Date());
  }, 1000);

  return function () {
    clearInterval(interval);
  };
});

//creating writable store
export const count = writable(0);

//creating derived store
const start = new Date();

export const elapsedTime = derived(time, ($time) => {
  return Math.round(($time - start) / 1000);
});

//creating custom store
function createCount() {
  const { subscribe, set, update } = writable(0); //it return an object with 3 method
  return {
    subscribe,
    increment: (size = 1) => update((n) => n + size),
    decrement: (size = 1) => update((n) => n - size),
    reset: () => set(0),
  }
}

export const customCount = createCount();
