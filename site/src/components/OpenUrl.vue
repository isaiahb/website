<script>

export default {
	name: "Open",
	props: {
		url: {
			required: true,
			type: String,
		}
	},
	data() {
		return {
			downPosition: null
		}
	},
	methods: {
		getParentPosition(){
			var parent = this.$el.parentElement;
			console.log(parent);
			return {x: parent.offsetLeft, y: parent.offsetTop};
		},
		isSamePosition(position) {
			console.log("compare " + JSON.stringify(this.downPosition) + " vs " + JSON.stringify(position));
			if (position.x != this.downPosition.x) return false;
			if (position.y != this.downPosition.y) return false;
			return true;
		},
		mouseDown() {
			this.downPosition = this.getParentPosition();
			console.log("mouse down");
		},
		clicked() {
			console.log("clicked");
			if(this.isSamePosition(this.getParentPosition()))
				this.open();
		},
		open() {
          window.open(this.url, "_blank");    
		}
	}
};

</script>

<template>
	<div id="open-url" @click="clicked" @mousedown="mouseDown">
	</div>
</template>

<style scoped lang="scss">
	#open-url {
		width: 100%;
		height: 100%;
		position: absolute;
		top:0px;
		left:0px;
	}
</style>
