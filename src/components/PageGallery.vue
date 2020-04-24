<template>
	<div id="gallery">
		<h2>{{titlePage}} : {{currentGallery}}</h2>

		<div class="grid">

			<photo :photo="photo" v-for="(photo, key) in listPhotosForThisAlbum" :key="key">test
			</photo>

		</div>

	</div>
</template>

<script>
	import {listPhotos} from '../data.js';
	import PhotoThumb from './PhotoThumb.vue';

	export default {
		name: 'app',
		data () {
			return {
				titlePage : 'Gallery',
				listPhotos
			}
		},
		components: {'photo':PhotoThumb},
		props:['currentGallery'],
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