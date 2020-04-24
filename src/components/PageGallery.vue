<template>
	<div id="gallery">
		<h2>{{titlePage}}</h2>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data () {
			return {
				titlePage : 'Gallery',
			}
		},
	}
</script>

<style scoped>
.grid {
	display: grid;
	grid-template-columns: repeat( auto-fit, minmax(240px, 1fr) );
	grid-gap: 10px;
}
</style>