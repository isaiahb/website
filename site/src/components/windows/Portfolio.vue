<script>
import Window from "@/components/Window";
export default {
	name: "Portfolio",
	components: {
		Window,
	},
	computed: {
		position(){
			var {x, y} = {x: 60, y: 60};// = this.$store.state.portfolio;
			console.log(x, y);
			return {x, y};
		}
	}
};

</script>

<template>
	<Window :position="position" stateName="portfolio" title="Portfolio">	
		<div id="portfolio">
			<div id="header"></div>
			<div id="side-bar">
			</div>
			<div id="portfolio-body">
				<div id="title">
				</div>
			</div>
		</div>
	</Window>

</template>

<style scoped lang="scss">
#portfolio #portfolio-body #title {
	width: 100%;
	height: 10px;
	// background
}

#header {
	background: #D9D9D9;
	height: 20px;
}
#terminal {
	padding: 30px;
}
#terminal h5, h1, h2, h3, h4, h6 {
	text-align: left;
}
</style>
