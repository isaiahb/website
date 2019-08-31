<script>
import Window from "@/components/Window";
export default {
	name: "Contact",
	components: {
		Window,
	},
	computed: {
		position(){
			var {x, y} = {x:60, y:60};//this.$store.state.terminal;
			return {x, y};
		},

		visible() {
			return this.$store.state.contact.open;
		}
	}
};

</script>

<template>
	<Window :position="position" title="Contact Me" stateName="contact">	
		<div id="contact" class="w-100 ">
			<div id="contact-header"><h5>Contact Me</h5></div>
			<div id="contact-body" class="w-100 h-100">
				<div id="message-to"> To: Isaiah Ballah</div>
				<input placeholder="Subject"/>
				<textarea id="message" placeholder="message"/>
				<button id="send" class="button-red">send</button>
			</div>

		</div>
	</Window>

</template>

<style scoped lang="scss">
#send {
	margin-top:5px;
	// height: 20px;
	color:white;
}
#message-to {
	text-align: left;
	align-content: left;
	border-bottom: 1px solid rgba(0,0,0,.2);
}
#message {
	margin-top: 10px;
	border-width:0px;
	border:none;
	height: 110px;
	resize: none;
}
input {
	border-width:0px;
	border:none;
	border-bottom: 1px solid rgba(0,0,0,.2);

	&:focus {
		outline:none!important;
	}
}
textarea {
	&:focus {
		outline:none!important;
	}
}
#contact {
	display:flex;
	flex-direction: column;
}
#contact-body {
	padding:20px;
	display:flex;
	flex-direction: column;
}
#contact-header {
	padding: 3px;
	background: #404040;
	color: white;
	padding-left: 20px;
}

h5, h1, h2, h3, h4, h6 {
	text-align: left;
	margin: 0;
}
</style>
