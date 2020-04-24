<template>
	<div class="photo" :data-class="isThisPhotoNew(photo.date)?'New':''">

		<div class="preview" :style="{ background: `url('./assets/${photo.filename}') no-repeat center / cover` }">
		</div>
		<div class="title">{{photo.name}}</div>
		<div class="cover" v-if="photo.isAlbumCover">Album Cover</div>

	</div>
</template>

<script>
	export default {
		data (){
			return {
				askedForDetails : false
			}
		},
		props: ['photo'],
		methods: {
			isThisPhotoNew: function(date){
				date = date.toString();
				let y = date.slice(0,4);
				let m = date.slice(4,6);
				let d = date.slice(6,8);
				let today = new Date();
				let photoDay = new Date(`${y},${m},${d}`);
				let timeDiff = today.getTime() - photoDay.getTime();
				let dayDiff = parseInt((timeDiff / (1000 * 3600 * 24)).toFixed(0));
				// console.log(today.getDate() + ' ' + today.getMonth() + ' ' + today.getFullYear());
				return (dayDiff < 31);
			}
		}
	}
</script>

<style scoped>
.photo {
	border:1px solid #000;
	padding:10px 10px 0 10px;
	background: #fff;
	position: relative;
	justify-self: center;
	overflow: hidden;
}
.preview {
	height:200px;
	width:200px;
}
.title {
	line-height:4em;
}
.cover {
	position: absolute;
	top:0px;
	left:50%;
	transform: translateX(-50%);
	min-width:40px;
	background: #f00;
	padding:0 8px;
	color:#fff;
	font-weight:bold;
	font-size:0.8em;
	line-height:20px;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	box-shadow: 0 0 8px rgba(0,0,0,0.4), 0 0 2px rgba(0,0,0,0.4);
}

.photo[data-class="New"]:before {
	content: attr(data-class);
	position: absolute;
	font-size: 1.1rem;
	top: 0.6em;
	left: -1.3em;
	padding: 0em 1.5em;
	transform: rotate(315deg);
	background-color:gold;
	border: 1px solid #000;
	box-shadow: 0 3px 3px rgba(0,0,0,0.2);
}




</style>