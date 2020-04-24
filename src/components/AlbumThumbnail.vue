<template>
	<div class="thumb">

		<div class="img" :style="{ background: `url('./assets/${photo.filename}') no-repeat center / cover` }">
		</div>

		<div class="legend">
			{{photo.inAlbum}}
		</div>

	</div>
</template>

<script>
	export default {
		props: ['photo']
	}
</script>

<style scoped>
.thumb {
	display: inline-block;
	border:1px solid #999;
	box-shadow:1px 2px 20px 0px rgba(0,0,0,0.1);
	cursor: pointer;
	padding:10px 10px 0 10px;
	background: #fff;
	transform: scale(0.97);
	justify-self:center;
	transition: transform 0.2s ease-in-out;
}
.thumb:hover {
	transform: scale(1.0);
}
.img {
	width:260px;
	height:140px;
}
.legend {
	
	font-size:0.9rem;
	line-height:2rem;
}
</style>