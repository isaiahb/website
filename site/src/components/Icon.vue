<script>
var myUrl = "./assets/folder.svg";
var url = "./assets/";

export default {
	name: "Icon",
	props: {
		name: {
			type:String,
			required: false,
			default: "Personal Projects"
		},
		docked: {
			type: Boolean,
			required: false,
			default: false
		},
		icon: {
			type: String,
			required: true,
		}, 
		stateName: {
			type: String,
			required: true
		}
	},

	data() {
		return {
			image: "'" + url + this.icon + ".svg'"
		};
	},
	computed: {
		classObject(){
			return {
				"docked": this.docked,
			}
		},
		opened() {
			return this.$store.state[this.stateName].open;
		}
	},

	methods: {
		setPosition(x, y) {
			var parentWidth = this.$el.parentElement.offsetWidth;
			var parentHeight = this.$el.parentElement.offsetHeight;
			var width = this.$el.offsetWidth;
			var height = this.$el.offsetHeight;
			// console.log("x " + x + ", y " +  y)
			// console.log("width " + width + ", height" +  height)
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
			// if (this.closeButton || this.minimizeButton || this.expandButton)
			// 	return false;
			return true;
		},
		
		
		dragElement(elmnt) {
			var setPosition = this.setPosition;
			var canDrag = this.canDrag;
			var {x, y} = this.$store.state[this.stateName];
			setPosition(x, y);
			var offsetX = 0, offsetY  = 0;
			elmnt.onmousedown = onMouseDown;
			// elmnt.childNodes.item("window-header").onmousedown = onMouseDown;

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
		if (!this.docked)
			this.dragElement(this.$el);
	},

};

</script>

<template>
	<div id="icon" :class="classObject">
		<div id="icon-bg" class="mx-auto">
			<div id="icon-image" class="mx-auto" v-bind:style="{ 'background-image': 'url(' + image + ')' }"></div>
		</div>
		<div id="dot" class="mx-auto" v-if="docked & opened"></div>

		<!-- <div id="icon-text-bg" v-if="!docked"> -->
		<div id="icon-text-bg">
			<h5 id="icon-text" class="mx-auto my-auto">{{name}}</h5>
		</div>

		<slot></slot>
	</div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	#dot {
		width: 6px;
		height: 6px;
		background: black;
		border-radius: 3px;
	}
	#icon {
		position: absolute;
		width: 100px;
		height: 120px;

		#icon-bg {
			width: 100px;
			height: 100px;
			border-radius: 5px;

			display:flex;
			align-items: center;

				#icon-image {
					width: 80px;
					height: 80px;
					
					background-position: center;
					background-repeat: no-repeat;
					background-size: contain;
				}
		}

		#icon-text-bg {
			margin-top: 3px;
			padding:5px;
			border-radius: 5px;

			display:flex;
			align-items: center;
		}

		&:hover {
			cursor: pointer;

			#icon-bg {
				background: rgba(0,0,0, 0.4);
				border: 2px solid rgba(122, 122, 122, 0.6);
			}

			#icon-text-bg {
				background: rgba(21, 137, 214, 0.9);
			}
		}

		&.docked {
			position: relative;
			width: 80px;
			height: 80px;

			#icon-bg {
				width: 60px;
				height: 60px;
				#icon-image {
					width: 50px;
					height: 50px;
				}
			}

			&:hover {
				#icon-text-bg {
					position:absolute;
					top: -60px;
					background: rgba(0, 0, 0, 0.5);
					width: auto;
				}
			}
		}
	}


	#icon h5 {
		color: white;
		cursor: pointer;
	}
	

</style>
