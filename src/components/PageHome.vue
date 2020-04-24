<template>
	<div id="homepage">
		<h2>{{titlePage}}</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio labore iste ea aperiam dolorem aut ratione. Unde reiciendis quidem eaque accusamus esse vitae facilis blanditiis nostrum voluptatem velit, qui quisquam.</p>
	</div>
</template>

<script>


	export default {
		name: 'app',
		data () {
			return {
				titlePage : "Albums"
			}
		}
	}
</script>

<style scoped>
img {
	border:4px solid #fff;
	width:100px;
	height:100px;
}
.grid {
	display: grid;
	grid-template-columns: repeat( auto-fit, minmax(270px, 1fr) );
	grid-gap: 10px;
}
p {
	max-width:600px;
	margin: 40px auto;
	text-align: justify;
}

</style>