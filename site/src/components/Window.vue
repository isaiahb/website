<script>
export default {
	name: "HelloWorld",
	props: {
		title: {
			type: String,
			required: false,
			default: "Isaiah - Ballah —- Personal Site"
		},
		position: {
			type: Object,
			required: false,
			default: {x: 60, y:60}
		},
		stateName: {
			type: String,
			required: true,
		}
	},

	data() {
		return {
			closeButton: "",
			minimizeButton: "",
			expandButton: "",
			fullScreen: false
		};
	},

	computed: {
		visible() {
			return this.$store.state[this.stateName].open;
		},
		classObject(){
			return {
				"fullscreen": this.fullScreen,
			}
		}
	},

	methods: {
		toggleFullscreen() {
			this.fullScreen = !this.fullScreen;
			this.setPosition(0, 0);
		},
		close() {
			this.$store.commit("close", this.stateName);
		},
		setPosition(x, y) {
			// if (this.fullScreen) return;
			if (this.fullScreen) {
				x = 0;
				y = 0;
			}

			var parentWidth = this.$el.parentElement.offsetWidth;
			var parentHeight = this.$el.parentElement.offsetHeight;
			var width = this.$el.offsetWidth;
			var height = this.$el.offsetHeight;
			
			x = x >= 0 ? x : 1;
			y = y >= 0 ? y : 1;
			x = x <= parentWidth - width ? x : parentWidth - width - 1;
			y = y <= parentHeight - height ? y : parentHeight - height - 1;

			this.$el.style.left = x + "px";
			this.$el.style.top = y + "px";
		},
		getPosition() {
			return {x: this.$el.offsetLeft, y: this.$el.offsetTop};
		},
		canDrag() {
			if (this.closeButton || this.minimizeButton || this.expandButton)
				return false;
			return true;
		},
		
		
		dragElement(elmnt) {
			var setPosition = this.setPosition;
			var canDrag = this.canDrag;
			var {x, y} = this.position;
			setPosition(x, y);

			var offsetX = 0, offsetY  = 0;
			elmnt.childNodes.item("window-header").onmousedown = onMouseDown;

			function onMouseDown(e) {
				if(!canDrag()) return;
				e = e || window.event;
				e.preventDefault();

				// get the mouse cursor position at startup:
				var top = elmnt.offsetTop;// - 50;
				var left = elmnt.offsetLeft;

				offsetY = top - e.pageY;
				offsetX = left - e.pageX;
				
				// call a function whenever the cursor moves:
				document.onmousemove = onMouseMove;
				document.onmouseup = closeDragElement;
			}

			function onMouseMove(e) {
				e = e || window.event;
				e.preventDefault();

				var x = (e.pageX + offsetX);
				var y = (e.pageY + offsetY);// - 50);
				setPosition(x, y);
			}

			function closeDragElement() {
				// stop moving when mouse button is released:
				document.onmouseup = null;
				document.onmousemove = null;
			}
		}
	},


	mounted() {
		this.dragElement(this.$el);
	},

};

</script>

<template>
	<div id="window" class="glow-dark" :class="classObject" v-show="visible">
		<div id="window-header">
			<div id="window-header-buttons">
				<button id="close-button" class="button-red window-header-button" @click="close" @mouseover="closeButton = 'x'" @mouseleave="closeButton = ''" ><p>{{closeButton}}</p></button>
				<button id="minimize-button" class="button-yellow window-header-button" @click="close" @mouseover="minimizeButton = '-'" @mouseleave="minimizeButton = ''"><p> {{minimizeButton}} </p></button>
				<button id="expand-button" class="button-green window-header-button" @click="toggleFullscreen" @mouseover="expandButton = '+'" @mouseleave="expandButton = ''"><p> {{expandButton}} </p></button>
			</div>

			<h6 class="title ">{{title}}</h6>
		</div>
		<div id="window-body" class="w-100 h-100 mxs-auto">
			<slot></slot>
		</div>
	</div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	#window {
		display:flex;
		flex-direction: column;	
		height: 300px;
		width: 500px;
		border-radius: 10px;
		position: absolute;
		top:10px;
		&.fullscreen {
			width: 100%;
			height: calc(100% - 65px);
			position:fixed;
			top: 0px;
			left: 0px;
		}
	}

	#window-header {
		height:  32px;
		width: 100%;
		background: #D9D9D9;
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
		display:flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		color: #262933;
	}
	#window-body {
		background: white;
		border-bottom-right-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	
	#window-header-buttons {
		position: absolute;
		left: 6px;
		display:flex;

	}

	#close-button {
		color:brown;
	}
	#minimize-button {
		color: #AC6B09;
	}
	#expand-button {
		color:#2A6218;
	}

	.window-header-button {
		position: relative;
		width: 20px;
		height: 20px;
		border-radius: 10px;
		text-align: center;
		padding:0px;
		margin-right:5px;
	}

	.window-header-button p {
		margin: 0px;
		width:100%;
		height:100%;
		text-align: center;
		text-justify: center;
		font-size: 16px;
		line-height: 20px;
		padding-left: 1px;
	}

</style>
