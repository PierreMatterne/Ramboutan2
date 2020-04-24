<template>
	<div id="homepage">
		<h2>{{titlePage}}</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio labore iste ea aperiam dolorem aut ratione. Unde reiciendis quidem eaque accusamus esse vitae facilis blanditiis nostrum voluptatem velit, qui quisquam.</p>

		<div class="albumsgrid">
			<div v-for="photo in listPhotosAlbums" :key='photo.id' @click="goToGallery(photo.inAlbum)">
				<thumbnail :photo="photo"></thumbnail>
			</div>
		</div>

	</div>
</template>

<script>
	import {listPhotos} from '../data.js';
	import Thumbnail from './AlbumThumbnail.vue';

	export default {
		name: 'app',
		data () {
			return {
				listPhotos,
				titlePage : "Albums"
			}
		},
		components: {'thumbnail': Thumbnail},
		computed : {
			listPhotosAlbums : function (){
				return this.listPhotos.filter(photo => photo.isAlbumCover);
			}
		},
		methods : {
			goToGallery: function (albumName){
				this.$emit('loadGallery', albumName);
				this.$router.push({path: '/gallery'});
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
.albumsgrid {
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