<template>
	<div class="settings">
		<div class="modale">
			
			<h2>{{photo.name}}</h2>
			
			<div class="cadrePhoto">
				<img :src="'./assets/' + photo.filename" :alt="photo.name">
				<transition name="fade">
					<infophoto :photo="photo" v-if="displayDetails"></infophoto>
				</transition>
			</div>

			<div class="buttons">
				<softbutton @click.native="displayDetails = !displayDetails">Infos</softbutton>
				<softbutton @click.native="closeModale()">Fermer</softbutton>
			</div>

		</div>
	</div>
</template>

<script>
	import Button from './SoftButton.vue';
	import PhotoInfo from './PhotoInfo.vue';
	export default {
		data(){
			return {
				displayDetails : false
			}
		},
		methods: {
			closeModale(){
				this.$emit('closeModale');
			}
		},
		props: ['photo'],
		components: {
			'softbutton' : Button,
			'infophoto' : PhotoInfo
		}
	}
</script>

<style scoped>
.settings {
	width:100%;
	height:100%;
	/*top:0;*/
	left:0;
	right:0;
	bottom:0;
	background: rgba(0,0,0,0.5);
	position: absolute;
	z-index:200;
	pointer-events:none;
}
.modale {
	position: absolute;
	top:50%;
	left:50%;
	transform: translate(-50%, -50%);
	border-radius: 12px;
	background: #fcfcfc;
	box-shadow: 0 0 30px rgba(0,0,0,0.3);
	border:1px solid rgba(0,0,0,0.5);
	padding:12px 12px 60px 12px;
	min-height:300px;
	min-width:400px;
	max-width:90vw;
	max-height:90vh;
	pointer-events: auto;
}

.cadrePhoto {
	position: relative;
}

img {
	max-width:90vw;
	max-height:70vh;
}

.buttons {
	position: absolute;
	bottom:20px;
	left:50%;
	transform:translateX(-50%);
}
</style>