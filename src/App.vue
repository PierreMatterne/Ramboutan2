<template>
	<div id="app">
		<header>
			<h1><a href="./">{{title}}</a></h1>
			<transition name="fade" mode="out-in">
				<router-link class="linkHome" to="/" exact v-if="isLinkHomeVisible" @click.native="hideHomeLink()">
					<span class="faico">
						<i class="fas fa-home"></i>
					</span>
				</router-link>
			</transition>
		</header>

		<main @click.stop="checkClick($event)">
			<div class="sliders">
				<slider title="À propos"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni repellat asperiores tenetur dignissimos minus voluptas odio quam totam libero eveniet itaque quibusdam qui tempora, cum quod repellendus quas. Saepe, expedita.</p></slider>

				<slider title="Galleries">
					<p>Where to go? 
						<ul class="listAlbums">
							<li v-for="album in listPhotosAlbums" @click="displayGallery(album.inAlbum)">
								{{album.inAlbum}}
							</li>
						</ul>
					</p>
				</slider>

				<div></div>

				<slider title="Contact">
					<p>Et ici sont disponibles mes coordonnées.</p>
				</slider>
			</div> 

			<transition name="fade" mode="out-in">
				<router-view :currentGallery="currentGallery" :isThumbsDisplayed="isThumbsDisplayed" @loadGallery="displayGallery($event)"></router-view>
			</transition>
		</main>

		<footer>Footer</footer>
	</div>
</template>

<script>
	import Slider from './components/HeaderSlider.vue';
	import {listPhotos} from './data.js';

	export default {
		name: 'app',
		data () {
			return {
				listPhotos,
				title : 'Ramboutan v2.0',
				currentGallery : '',
				isLinkHomeVisible : false,
				isThumbsDisplayed : true
			}
		},
		components:{'slider':Slider},
		methods : {
			displayGallery : function(event){
				// event is an albumName

				this.isLinkHomeVisible = true;
				// this.currentGallery = event;
				if(this.$route.path != "/gallery"){
					this.$router.push({path: '/gallery'});
				}
				let vm = this;
				this.isThumbsDisplayed = false;
				setTimeout(
					function(){

						vm.isThumbsDisplayed = true;
					}, 300);
				this.currentGallery = event;
			},

			hideHomeLink : function(){
				this.currentGallery = '';
				this.isLinkHomeVisible = false;
			},

			checkClick : function(event){
				// check if there is a parent slider.
				// if not : user clicked elsewhere => close the slider.
				if (!event.target.closest('.slider')){
					console.log("Je ferme les sliders");
					// comment ?
				}
			}
		},
		computed : {
			listPhotosAlbums : function (){
				return this.listPhotos.filter(photo => photo.isAlbumCover);
			}
		},
		created (){
			if(this.$route.path === "/gallery" && this.currentGallery === ''){
				this.$router.push({path: '/'});
			}

		}
	}
</script>

<style lang="scss">
// TRANSITION STYLE
.fade-enter { opacity: 0; }
.fade-enter-active { transition: opacity 0.3s ease-in-out; }
.fade-leave {}
.fade-leave-active {
	transition: opacity 0.3s ease-in-out;
	opacity: 0;
}

.sliders {
	width: 90%;
	position: absolute;
	top: 0;
	left: 5%;
	right: 5%;
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(4, 1fr);
	align-items: start;
	justify-content: end; 
}

.linkHome, 
h1 {
	position: absolute;
	top:50%;
	transform: translateY(-50%);
	margin:0; padding:0;
}

a {
	text-decoration: none;
	color: #c00;
}

h1 {
	left: 50%;
	transform: translate(-50%,-50%);
}

.linkHome {
	left: 20px;
}

span.faico {
	display: inline-block;
	z-index:40;
	font-size: 40px;
	color: #c00;
}

.listAlbums {
	list-style: none;
	padding:0;
	margin:20px;
}

li {
	line-height:1.5rem;
	color:#c00;
	cursor: pointer;
}

</style>
