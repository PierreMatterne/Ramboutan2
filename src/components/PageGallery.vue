<template>
	
	<div id="gallery">

		<h2>{{titlePage}} : {{currentGallery}}</h2>

		<transition name="fade">
			<div class="grid" v-if="isThumbsDisplayed">

				<photothumb @click.native.stop="detailThisPhoto(photo)" :photo="photo" v-for="(photo, key) in listPhotosForThisAlbum" :key="key"></photothumb>

			</div>
		</transition>


	<transition name="fade">
		<modalphoto v-if="detailPhoto" @closeModale="closeModale()" :photo="openendPhoto"></modalphoto>
	</transition>

</div>

</template>

<script>
	import {listPhotos} from '../data.js';
	import PhotoThumb from './PhotoThumb.vue';
	import PhotoModal from './PhotoModal.vue';

	export default {
		name: 'app',
		data () {
			return {
				titlePage : 'Gallery',
				listPhotos,
				detailPhoto: false
			}
		},
		components: {'photothumb':PhotoThumb, 'modalphoto':PhotoModal},
		props:['currentGallery','isThumbsDisplayed'],
		methods : {
			closeModale(){
				this.detailPhoto = false;
			},
			detailThisPhoto(photo){
				this.detailPhoto = true;
				this.openendPhoto = photo;
			}
		},
		computed: {
			listPhotosForThisAlbum: function(){
				return this.listPhotos.filter(photo => photo.inAlbum === this.currentGallery);
			}
		}
	}
</script>

<style scoped>
.grid {
	display: grid;
	grid-template-columns: repeat( auto-fit, minmax(240px, 1fr) );
	grid-gap: 10px;
}
</style>