<script>
import Window from "@/components/Window";
var url = "./assets/foldericon.svg";
import projects from "../../models/projects";

export default {
	name: "Portfolio",
	components: {
		Window,
	},
	computed: {
		position(){
			var {x, y} = {x: 60, y: 60};// = this.$store.state.portfolio;
			console.log(x, y);
			return {x, y};
		},
		img() {
			return "assets/projects/" + this.selected.icon + ".svg";
		}
	},
	data() {
		return {
			title: "All Projects",
			folderIcon: "'" + url + "'",
			projects,
			selected: {},
			clicks: 0
		}
	},
	mounted() {
		this.select(projects[0]);
	},
	methods: {
		select(project) {
			this.selected = project;
		},
		select2(project) {
			if(this.selected == project) {
				this.clicks++ 
			}
			else {
				this.select(project);
				this.clicks = 1;
			}

          if(this.clicks === 1) {
            var self = this
            this.timer = setTimeout(function() {
			//   self.result.push(event.type);  -- Single click
              self.clicks = 0
            }, .25);
          } else{
             clearTimeout(this.timer);  
            //  this.result.push('dblclick'); -- Double click
             this.clicks = 0;
          }   
		}
	},

};

</script>

<template>
	<Window :position="position" stateName="portfolio" title="Portfolio">	
		<div id="portfolio" class="w-100 h-100">
			<div id="side-bar">
				<h6 class="title">Favourites</h6>
				<div id="sidebar-div">
					<div class="w-100 sidebar-child">
						<div v-bind:style="{ 'background': 'url(' + folderIcon + ')' }" class="iconlivin"></div> 
						<p>All Projects</p>
					</div>
				</div>
			</div>

			<div id="portfolio-body" class="w-100">
				<div id="title" class="w-100"><h6 class="title">{{title}}</h6></div>
				<div class="w-100 h-100 flex">
					<div id="project-list"> 
						<div id="project" v-for="project in projects" :key="project"  @click="select(project)" :class="{ active: project == selected }">{{project.name}}</div>
					</div>
					<div id="project-info"> 
						<img id="project-icon"  :src="img"/>
						{{selected.hint}}
					</div>
					<!-- {{selected.info}} -->
				</div>
			</div>
		</div>
	</Window>

</template>

<style scoped lang="scss">
$borderColor: #A7A6A7;
#project {
	padding-left: 10px;
	text-align: left;
	&:hover {
		background: #DCDCDC;
		color:black;
	}
	&.active {
		background: #0063E1;
		color:white;
	}
}
#project-list {
	width: 140px;
	border-right: 1px solid $borderColor;
	min-width: 140px;
}
#project-icon {
	width:100px;
	height:100px;
}
#project-info {
	padding:10px;
	display:flex;
	flex-direction: column;
	align-items: center;
}
.flex {
	display:flex;
}
.sidebar-child {
	width: 100%;
	display: flex;
	padding:5px;
	padding-left: 10px;	
	background:#DCDCDC;
	p {
		padding-left: 5px;
		// padding-bottom: 0;
		margin-bottom: 0px;
	}
}

.iconlivin {
	width: 20px;
	height: 20px;
	background-position: center !important;
	background-repeat: no-repeat !important;
	background-size: contain !important;
}

#portfolio {
	display:flex;
	.title {
		color: #747473;
		font-weight: 600;
		justify-content: left;
		text-align: left;
		padding:5px;
	}

	#side-bar {
		background: rgba(235, 235, 235, 0.747);
		width: 185px;
		height: 100%;
		border: 1px solid $borderColor;
		border-bottom: none;
		border-left: none;
		#sidebar-div {

		}
	}
	#portfolio-body {
		border: 1px solid $borderColor;
		border-left: none;
		border-right: none;
		border-bottom: none;
		#title {
			width: 100%;
			background: #F1EFF0;
			border-bottom: 1px solid $borderColor;
		}
	}
}


</style>