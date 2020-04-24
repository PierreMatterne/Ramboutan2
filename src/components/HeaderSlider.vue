<template>
	<div class="slider" :class="{active:isActive}" @click="isActive = !isActive">
		<div class="title">{{title}}</div>
		<div class="content"><h2>{{title}}</h2><slot></slot></div>
	</div>
</template>

<script>
	export default {
		data (){
			return {
				isActive: false
			}
		},
		props:['title']
	}
</script>

<style scoped>
.slider {
	background: #d3d3d3;
	transform: translateY(-100%) translateY(24px);
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.0);
	transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
	z-index:300;
	border: 1px solid #d0d0d0;
	border-bottom: 1px solid #b0b0b0;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	cursor:pointer;
}
.slider.active {
	transform: translateY(0) translateY(0);
}

.slider:hover {
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.title {
	position: absolute;
	bottom:0;
	left:50%;
	transform: translateX(-50%);
	font-size:0.8em;
}
.content {
	padding:10px 10px 40px;
	font-size: 0.9rem;
}
</style>