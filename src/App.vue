<template>
	<div id="app">
		<header>
			HEADER<br>Temp link : <router-link>home</router-link> - <router-link>gallery</router-link>
			<router-link to="/" exact>Home</router-link>
			<router-link to="/gallery">Gallery</router-link>
		</header>

		
		<main>
			<router-view></router-view>
		</main>
		
		<footer>Footer</footer>
	</div>
</template>

<script>
	export default {
		name: 'app',
	}
</script>

<style lang="scss">

</style>
