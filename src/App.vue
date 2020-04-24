<template>
	<div id="app">
		<header>
			<h1><a href="./">{{title}}</a></h1>
			<router-link to="/" exact v-if="isLinkHomeVisible" @click.native="hideHomeLink()">
				<span class="faico">
					<i class="fas fa-home"></i>
				</span>
			</router-link>
		</header>

		<main>
			<transition name="fade" mode="out-in">
				<router-view :currentGallery="currentGallery" @loadGallery="displayGallery($event)"></router-view>
			</transition>
		</main>

		<footer>Footer</footer>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data () {
			return {
				title : 'Ramboutan v2.0',
				currentGallery : '',
				isLinkHomeVisible : false
			}
		},
		methods : {
			displayGallery (event){
				// event is an albumName
				this.currentGallery = event;
				console.log(`Must show ${event} gallery`);
				this.isLinkHomeVisible = true;
			},
			hideHomeLink (){
				this.currentGallery = '';
				this.mustIshow = false;
				console.log("hide : " + this.mustIshow);
			},
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
</style>
