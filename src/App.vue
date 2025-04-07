<script setup lang="ts">
import Todos from './components/Todos.vue'
</script>

<template>
 <main class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
	<div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
		<h1 class="text-4xl md:text-6xl tracking-tight leading-none font-extrabold text-blue-500 break-keep">The Home Farm</h1>
		<p class="mt-4 mb-6 text-lg sm:mb-12">Home of the Young Family Clans.</p>		
	</div>
	<div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
		<img src="./assets/home-farm-2.jpg" alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
	</div>
</main>    

</template>

