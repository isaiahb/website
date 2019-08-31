<script>
</script>


<template>
	<div id="landing-page" class="w-100 h-100">
		<div id="black" class="w-100 h-100"></div>

		<div class="bg-text">
			<div id="profile-pic"></div>
			<h1 id="name">Welcome Visitor</h1>
			<router-link to="desktop" id="landing-page-button" class="button-white">Login</router-link>
		</div>

	</div>
</template>


<style scoped lang="scss">
#name {
	padding:15px;
}
#black {
	background: rgba(0, 0, 0, 0.8);
}


/* Position text in the middle of the page/image */
.bg-text {
	color: white;
	font-weight: bold;

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
	padding: 20px;
	display:flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	align-items: center;
}

#profile-pic {
	width: 100px;
	height: 100px;
	border-radius: 50px;
	background: white;
}

#landing-page-button{
	padding: 2px  30px;
}
</style>
