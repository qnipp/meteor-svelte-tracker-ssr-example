<script>
  import { Tracker } from "meteor/tracker";
  import { onMount, onDestroy } from "svelte";
  import Persons from "/lib/Persons.js";

  let person;
  let age = 0;

  onMount(() => {
    const computation = Tracker.autorun(() => {
      person = Persons.findOne();
    });

    const interval = setInterval(() => {
      age += 1;
    }, 1000);

    return () => {
      clearInterval(interval);
      computation.stop();
    };
  });
</script>

<style>
  h1 {
    font: 24px sans-serif;
  }
</style>

{#if person}
  <h1>Hello, {person.name}!</h1>
  You have aged {age} seconds since you have opened this page. 👵
  <button on:click={() => (age = 0)}>Reset age</button>
{:else}
  <h1>Waiting for onMount</h1>
{/if}
