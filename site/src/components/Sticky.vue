<script>
export default {
	name: "Sticky",
	props: {},
	data() {
		return {
			// fullScreen: false
			position: {x: 60, y: 60},
			// visible: true
		};
	},

	computed: {
		visible() {
			// return this.$store.state[this.stateName].open;
		},
		classObject(){
			return {
				// "fullscreen": this.fullScreen,
			}
		}
	},

	methods: {
		toggleFullscreen() {
			this.fullScreen = !this.fullScreen;
			this.setPosition(0, 0);
		},
		close() {
			// this.$store.commit("close", this.stateName);
			console.log("Close");
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
		initPosition() {
			this.$el.style.right = 0 + "px";
			this.$el.style.top = 0 + "px";
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
			elmnt.childNodes.item("note-header").onmousedown = onMouseDown;

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
		},

		myEventHandler() {
			var {x, y} = this.getPosition();
			this.setPosition(x, y);
			console.log("sticky  event");
		}
	},

	created() {
		// document.addEventListener("resize", this.myEventHandler);
		document.body.onresize = this.myEventHandler;
		console.log("yay");
	},
	destroyed() {
		// document.removeEventListener("resize", this.myEventHandler);
	},

	mounted() {
		this.dragElement(this.$el);
	},

};

</script>

<template>
	<div id="note" class="glow-dark" :class="classObject" vb-show="visible">
		<div id="note-header">
			<div id="note-header-buttons">
				<div id="close-button" class="button-redd note-header-button" @click="close" >x</div>
			</div>

			<h6 class="title "> Notes </h6>
		</div>
		<div id="note-body" class="w-100">
			<slot></slot>
		</div>
	</div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	#note {
		display:flex;
		flex-direction: column;	
		height: 300px;
		width: 300px;
		// border-radius: 10px;
		position: absolute;
		top:10px;
		overflow: hidden;
		&.fullscreen {
			width: 100%;
			height: calc(100% - 65px);
			position:fixed;
			top: 0px;
			left: 0px;
		}
	}

	#note-header {
		height: 32px;
		width: 100%;
		background: #FFEF6A;
		// border-top-right-radius: 10px;
		// border-top-left-radius: 10px;
		display:flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		color: #262933;
	}
	#note-body {
		background: #FDF49C;
		// border-bottom-right-radius: 10px;
		// border-bottom-left-radius: 10px;
		height: calc(100% - 32px);
	}
	
	#note-header-buttons {
		position: absolute;
		left: 6px;
		display:flex;

	}

	#close-button {
		color:gray;
		&:hover {
			color:brown;
			cursor: pointer;
		}
	}

	.note-header-button {
		position: relative;
		width: 20px;
		height: 20px;
		// border-radius: 10px;
		text-align: center;
		padding:0px;
		margin-right:5px;
	}

	.note-header-button p {
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
