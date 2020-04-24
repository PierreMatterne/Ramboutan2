<template>
	<button><slot></slot></button>
</template>

<script>
</script>

<style scoped>

button {
	padding:6px 12px;
	outline: none;
	cursor: pointer;
	border-radius:4px;
	min-width:100px;
	font-size:0.9rem;
	outline: none;
	cursor: pointer;
	background: #fff;
	color:rgba(0,0,0,0.8);
	border:1px solid rgba(0,0,0,0.2);
	box-shadow: 0 0 32px 0 rgba(0,0,0,0.1);
	transition: box-shadow 0.3s ease-in-out;
}

button:hover {
	box-shadow: 0 0 4px 0 rgba(0,0,0,0.1);
}

</style>