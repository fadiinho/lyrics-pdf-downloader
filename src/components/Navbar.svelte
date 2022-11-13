<script type="ts">
  import { Navbar, NavLi, NavUl, NavHamburger, DarkMode } from 'flowbite-svelte';
</script>

<Navbar let:hidden let:toggle>
	<DarkMode btnClass="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 z-50"/>
  <NavHamburger on:click={toggle}/>
  <NavUl {hidden}>
		<NavLi href="/" active={true}>Home</NavLi>
	</NavUl>
</Navbar>
