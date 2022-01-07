<script>

export default {
	name: "TopBar",
	props: {},
	data() {
		return {};
	},
	components: {},
	methods: {
		toggleInfo() {
			this.$store.commit("toggle", "sticky");
		}
	},

};

</script>

<template>
	<div id="top-bar" class="mx-auto">
		<!-- <div class="w-100s"></div> -->
		<div class="item"> Tue 11:09 PM </div>
		<div class="item">Isaiah Ballah</div>
		<a id="info" class="item" @click="toggleInfo"><b>Help</b></a>
	</div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	
	#top-bar {
		color:black;
		#info {
			&:hover {
				cursor:pointer;
			}
		}
		.item {
			margin-left: 10px;
			margin-right: 10px;
		}
		position: fixed;
		width: 100%;
		height: 25px;
		background: rgba(255, 255, 255, 0.664);

		top: 0px;
		left: 0px;

		display:flex;
		justify-content: flex-end;
		align-items: center;
	}


</style>
