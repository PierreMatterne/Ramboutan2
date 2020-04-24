<template>
	<div class="details">
		<i class="fas fa-info-circle"></i>

		<div>
			Filename: {{photo.filename}}<br>
			Weight: {{photo.weight}} Kb<br>
			Date: {{photo.date|displayDate}}<br>
			Dimensions : {{photo.width}} x {{photo.height}}
		</div>
	</div>
</template>

<script>
	export default {
		props : ['photo'],
		filters : {
			displayDate (date){
				date = date.toString();
				let y = date.slice(0,4);
				let listMonth=['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
				let m = listMonth[parseInt(date.slice(4,6))-1];
				let d = date.slice(6,8); 
				return `${d} ${m} ${y}`;
			}
		}
	}
</script>

<style scoped>
.details {
	position: absolute;
	bottom:18px;
	left: 10px;
	right:10px;
	background: rgba(0,0,0,0.75);
	border-radius:18px;
	color: #fff;
	padding:10px 20px;
}

.fa-info-circle {
	color: #fc0;
	position: absolute;
	top:50%;
	left:10px;
	transform: translateY(-50%);
	font-size:3em;
}
</style>