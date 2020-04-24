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

		<main>
			<div class="sliders">
				<slider title="À propos" @click.native="isSliderActive=!isSliderActive" :class="{active: isSliderActive}"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni repellat asperiores tenetur dignissimos minus voluptas odio quam totam libero eveniet itaque quibusdam qui tempora, cum quod repellendus quas. Saepe, expedita.</p></slider>
			</div>

			<transition name="fade" mode="out-in">
				<router-view :currentGallery="currentGallery" @loadGallery="displayGallery($event)"></router-view>
			</transition>
		</main>

		<footer>Footer</footer>
	</div>
</template>

<script>
	import Slider from './components/HeaderSlider.vue';

	export default {
		name: 'app',
		data () {
			return {
				title : 'Ramboutan v2.0',
				currentGallery : '',
				isLinkHomeVisible : false,
				isSliderActive: false
			}
		},
		components:{'slider':Slider},
		methods : {
			displayGallery (event){
				// event is an albumName
				this.currentGallery = event;
				this.isLinkHomeVisible = true;
			},
			hideHomeLink (){
				this.currentGallery = '';
				this.isLinkHomeVisible = false;
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

.slider {

}

.linkHome, 
h1 {
	position: absolute;
	top:50%;
	transform: translateY(-50%);
	margin:0; padding:0;
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
	color: #609;
}

</style>
