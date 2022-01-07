<script>
import Icon from "@/components/Icon";
import OpenUrl from "@/components/OpenUrl";
import OpenWindow from "@/components/OpenWindow";

export default {
	name: "Dock",
	props: {},
	data() {
		return {};
	},
	methods: {},
	components: {
		Icon,
		OpenUrl,
		OpenWindow,
	}

};

</script>

<template>
	<div id="dock" class="mx-auto">
		<Icon icon="folder"		name="Portfolio"	stateName="portfolio"	:docked="true">		<OpenWindow  window="portfolio"/> </Icon>
		<Icon icon="contact"	name="Contact Me"	stateName="contact"		:docked="true">		<OpenWindow window="contact"/> </Icon>
		<Icon icon="terminal"	name="About Me"		stateName="terminal"	:docked="true">		<OpenWindow window="terminal"/> </Icon>
		<Icon icon="github"		name="Github"		stateName="github"		:docked="true">		<OpenUrl url="https://github.com/isaiahb"/> </Icon>
		<Icon icon="linkedin"	name="LinkedIn"		stateName="linkedIn"	:docked="true">		<OpenUrl url="https://www.linkedin.com/in/isaiah-ballah/"/> </Icon>
	</div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	
	#dock {
		position: fixed;
		width: 80%;
		height: 70px;
		background: rgba(109, 109, 109, 0.8);
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;

		bottom: 0px;
		left: 10%;

		display:flex;
		justify-content: center;
	}


</style>
