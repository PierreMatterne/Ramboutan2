<template>
	<div id="gallery">
		<h2>{{titlePage}} : {{currentGallery}}</h2>

		<div class="grid">
			<photo @click.native="detailThisPhoto(photo)" :photo="photo" v-for="(photo, key) in listPhotosForThisAlbum" :key="key">test
			</photo>
		</div>

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
		components: {'photo':PhotoThumb, 'modalphoto':PhotoModal},
		props:['currentGallery'],
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