<script>
import Window from "@/components/Window";
export default {
	name: "Terminal",
	components: {
		Window,
	},
	computed: {
		position(){
			var {x, y} = {x:60, y:60};//this.$store.state.terminal;
			console.log(x, y);
			return {x, y};
		}
	}
};

</script>

<template>
	<Window :position="position" stateName="terminal" title="Isaiah - Ballah —- About Me">	
		<div id="terminal">
			<br>
			<h5>Hi, I'm</h5>
			<h3>Isaiah Ballah</h3>
			<br>
			<h5>I'm a Software Developer &</h5>
			<h5>3rd Year Computer Engineering Student</h5>
			<h5>at The University of Western Ontario</h5>
		</div>
	</Window>

</template>

<style scoped lang="scss">
#terminal {
	padding: 30px;
}
#terminal h5, h1, h2, h3, h4, h6 {
	text-align: left;
}
</style>
