<template>
	<nav class="navbar d-flex sid-style">
		<b-button
			@click="togglenav()"
			class="py-2 px-2 badge badge-success border-0"
			id="menu2"
			><fa icon="bars"
		/></b-button>
		<div class="d-flex flex-grow-1 ml-3" style="flex-direction: column">
			<h6 class="mb-0 font-weight-bold">
				Hello, <span class="text-success">John</span>
			</h6>
			<small>
				Adminstration |
				<span class="text-success">John@yahoo.com</span>
			</small>
		</div>
		<div class="d-flex align-items-center">
			<b-button variant="primary" class="text-light" @click="fullScreen()">
				<fa icon="expand" />
			</b-button>
			<b-dropdown variant="link" class="text-success">
				<template #button-content>
					<fa icon="bell" class="text-primary" />
					<b-badge variant="danger">4</b-badge>
				</template>
				<!-- <div class="bg-dark">
					<div class="border-bottom border-secondary text-muted pb-2">
						<span
							>NOTIFICATIONS <span class="badge badge-danger">0 new</span></span
						>
					</div>
					<div class="text-left pl-2 text-muted mt-1">
						<span class="mr-3"><i class="fas fa-cog"></i></span
						><small>No Notification</small>
					</div>
				</div> -->
			</b-dropdown>
			<b-dropdown variant="link">
				<template #button-content>
					<b-avatar variant="primary" text="J" class=""></b-avatar>
				</template>
				<b-dropdown-item href="#">An item</b-dropdown-item>
				<b-dropdown-item href="#">Another item</b-dropdown-item>
			</b-dropdown>
		</div>
	</nav>
</template>

<script>
export default {
	name: "navbar",
	data() {
		return {};
	},
	methods: {
		togglenav() {
			var el = document.getElementById("res-sidebar");

			var el_2 = document.getElementById("content-wrapper");
			var el_3 = document.getElementById("menu2");
			el_2.style.transition = "all .5s ease";

			if (el.style.display == "none") {
				el.style.display = "block";
			} else {
				// el.style.display = "block";
			}

			if (el_2.style.paddingLeft == "0px") {
				el_2.style.paddingLeft = "280px";
				el_3.style.display = "none";
				el.style.display = "block";
			} else {
				el_2.style.paddingLeft = "280px";
			}
		},
		fullScreen() {
			var elem = document.getElementById("content-wrapper");
			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if (elem.webkitRequestFullscreen) {
				/* Safari */
				elem.webkitRequestFullscreen();
			} else if (elem.msRequestFullscreen) {
				/* IE11 */
				elem.msRequestFullscreen();
			}
		},
	},
};
</script>
<style>
.notification {
	position: absolute;
	right: 0.25rem;
	top: 0.25rem;
}
.bg-img {
	/* background-image: url("~@/assets/img/dog.jpg"); */
	background-repeat: no-repeat;
	background-size: cover;
	min-height: 50vh;
	border-radius: 2px;
	background-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.73),
			rgba(255, 255, 255, 0.52)
		),
		url("~@/assets/img/dog.jpg");
}
.font-size {
	font-size: 15xp;
	background-color: #f5f0f0;
	font-weight: 600;
}
.badge-top {
	position: absolute;
	top: -4px;
	right: 5px;
}
.notification {
	width: 176px;
	position: absolute;
	top: 0px;
	left: 61%;
	border-radius: 5px;
	padding: 10px 0px;
}
#toggle1,
#toggle {
	display: none;
}
.dropdown-menu {
	left: -73px;
}
#menu2 {
	display: none;
}
@media screen and (min-width: 320px) and (max-width: 575.99px) {
	#menu2 {
		display: block;
	}
}
.sid-style {
	background-color: #ffffff;
	border-radius: 0.5rem;
}
</style>