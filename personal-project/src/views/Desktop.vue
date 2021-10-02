<script>
// import Window from "@/components/Window";
import Icon from "@/components/Icon";
import Dock from "@/components/Dock";
import Terminal from "@/components/windows/Terminal";
import Contact from "@/components/windows/Contact";
import Portfolio from "@/components/windows/Portfolio";
import OpenUrl from "@/components/OpenUrl";
import OpenWindow from "@/components/OpenWindow";
import Sticky from "@/components/Sticky";

export default {
	name: "Desktop",
	components: {
		// Window,
		Icon,
		Dock,
		Terminal,
		Contact,
		OpenUrl,
		OpenWindow,
		Portfolio,
		Sticky
	}
};

</script>

<template>
	<div id="desktop">
		<Dock></Dock>


		<Icon icon="folder" name="Portfolio" stateName="portfolio">
			<OpenWindow  window="portfolio"/>
		</Icon>
		<Icon icon="contact" name="Contact Me" stateName="contact">
			<OpenWindow window="contact"/>
		</Icon>
		<Icon icon="terminal" name="About Me" stateName="terminal">
			<OpenWindow window="terminal"/>
		</Icon>

		<Icon icon="github" name="Github" stateName="github">
			<OpenUrl url="https://github.com/isaiahb"/>
		</Icon>
		<Icon icon="linkedin" name="LinkedIn" stateName="linkedIn">
			<OpenUrl url="https://www.linkedin.com/in/isaiah-ballah/"/>
		</Icon>

		<Sticky>
			<br/>
			<h5>Hello World</h5>
			<p>Welcome to my personal site</p>
			
		</Sticky>

		<Contact></Contact>
		<Terminal/>
		<Portfolio/>
	</div>
</template>

<style scoped lang="scss">
	#desktop {
		width: 100vw;
		height: 100vh;
	}
</style>
