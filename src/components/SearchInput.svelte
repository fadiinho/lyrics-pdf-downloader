<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let btnClass: string =
		'text-white m-2 right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
	
  export let inputClass: string =
		'block p-4 pl-6 m-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
	
	let value: string;
	const dispatcher = createEventDispatcher();
	const dispatchClick = () => {
    dispatcher('click', value)
	}

	const handleKeyPress = (event: KeyboardEvent) => {
	  if (event.code === 'Enter') dispatcher('click', value);
	}
</script>

<div class="flex">
  <input on:keypress={handleKeyPress} bind:value class={inputClass} type="search" placeholder={"Pesquisar a música..."}>
  <button class={btnClass} on:click={dispatchClick}>
    <svg
	    class="w-5 h-5 text-gray-500 dark:text-gray-400"
	    fill="none"
	    stroke="white"
	    viewBox="0 0 24 24"
	    xmlns="http://www.w3.org/2000/svg"
	    ><path
		    stroke-linecap="round"
		    stroke-linejoin="round"
		    stroke-width="2"
		    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
	    /></svg
    >
  </button>
</div>
