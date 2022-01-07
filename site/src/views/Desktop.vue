<script>
import Window from "@/components/Window";
import Icon from "@/components/Icon";
import Dock from "@/components/Dock";
import Terminal from "@/components/windows/Terminal";
import Contact from "@/components/windows/Contact";
import Portfolio from "@/components/windows/Portfolio";
import OpenUrl from "@/components/OpenUrl";
import OpenWindow from "@/components/OpenWindow";
import Sticky from "@/components/Sticky";
import TopBar from "@/components/TopBar";

export default {
	name: "Desktop",
	components: {
		Window,
		Icon,
		Dock,
		Terminal,
		Contact,
		OpenUrl,
		OpenWindow,
		Portfolio,
		Sticky,
		TopBar
	}
};

</script>

<template>
	<div id="desktop" class="w-100 h-100">

		<div id="drag-box" class="w-100 hs-100">

			<Icon icon="folder" name="Portfolio" stateName="portfolio"><OpenWindow  window="portfolio"/></Icon>
			<Icon icon="contact" name="Contact Me" stateName="contact"><OpenWindow window="contact"/></Icon>
			<Icon icon="terminal" name="About Me" stateName="terminal"><OpenWindow window="terminal"/></Icon>
			<Icon icon="github" name="Github" stateName="github"><OpenUrl url="https://github.com/isaiahb"/></Icon>
			<Icon icon="linkedin" name="LinkedIn" stateName="linkedIn"><OpenUrl url="https://www.linkedin.com/in/isaiah-ballah/"/></Icon>

			<Contact></Contact>
			<Terminal/>
			<Portfolio/>	

			<Sticky>
				<div class="w-100 h-100" style="padding: 30px">
					<!-- <br/> -->
					<h5>Hello World</h5>
					<br/>
					<p>Welcome to my website! It is a work in progress</p>
					<div class="mx-auto">
						<p class="text-leftss mx-auto">Click any of the app icons on the desktop, or in the bottom dock to navigate the website!</p>
					</div>
				</div>
			</Sticky>
	
		</div>  <!-- End of Drag Box -->

		<TopBar/>
		<Dock></Dock>

	</div>
</template>

<style scoped lang="scss">
	#desktop {
		display:flex;
		#drag-box {
			position: relative;
			top:25px;
			height:calc(100% - 25px - 70px);
		}
	}
	// .ali
</style>
