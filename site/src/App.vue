<template>
	<div id="app" class="w-100 h-100">
	<router-view />
	</div>
</template>

<style lang="scss">
#app {
	background: url("./assets/background.svg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	overflow: hidden;
}

html, body {
	padding: 0px;
	margin: 0px;
	width: 100%;
	height: 100%;
	overflow: hidden;
}

body {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

button { 
	outline:0; 
	border:0px;

	&:focus {outline:0 !important;}
}

h1, h2, h3, h4, h5, h6 {
	margin: 0px;
}




//////@at-root
$white: #FFFFFF;
$yellow:#FFBE2E;
$green:#28CA41;
$blue:#5BBBCF;
$purple:#8E2999;
$red:#FF5F57;
$dark:#262933;
$gray:#525252;
$lightGray:#D9D9D9;

.no-padding {padding:0;}
.no-margin {margin:0;}

.bg-white {background: $white;}
.bg-yellow {background: $yellow;}
.bg-green {background: $green;}
.bg-blue {background: $blue;}
.bg-purple {background: $purple;}
.bg-red {background: $red;}
.bg-dark {background: $dark !important;}
.bg-gray {background: $gray;}
.bg-lightGray {background: $lightGray;}

.white {color: $white;}
.yellow {color: $yellow;}
.green {color: $green;}
.blue {color: $blue;}
.purple {color: $purple;}
.red {color: $red;}
.dark {color: $dark;}
.gray {color: $gray;}

.glow-dark 		{box-shadow: 0 4px 8px 0 change-color($dark,	$alpha: .2), 		0 7px 20px 0 change-color($dark,	$alpha: .1) ;}


@mixin colorize($color) {
    background: $color;
    &:hover {
        background: $color - 30;
	}
	// box-shadow: 0 3px 6px 0 change-color($color, $alpha: 1);
}

.round-3 {border-radius: 3px;}
.round-5 {border-radius: 5px;}
.round-10 {border-radius: 10px;}
.round-15 {border-radius: 15px}

.button {
	@extend .round-10 ;
	outline:0; 
	border:0px;

	&:focus {outline:0 !important;}
}

button {
	@extend .button ;
}

.button-white {@extend .bg-white, .button ; @include colorize($white); color:$dark}
.button-red {@extend .bg-red, .button ; @include colorize($red); color:$dark}
.button-green {@extend .bg-green, .button ; @include colorize($green); color:$dark}
.button-yellow {@extend .bg-yellow, .button ; @include colorize($yellow); color:$dark}


</style>
