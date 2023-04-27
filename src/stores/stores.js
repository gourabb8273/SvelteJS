//creating store

import { writable, readable, derived } from "svelte/store";

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

export const count = writable(0);

const start = new Date();

export const elapsedTime = derived(time, ($time) => {
  return Math.round(($time - start) / 1000);
});
