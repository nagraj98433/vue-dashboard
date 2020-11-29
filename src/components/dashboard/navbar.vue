<template>
	<nav class="navbar d-flex sid-style mt-0">
		<b-button
			@click="toggle_nav()"
			id="nav-menu"
			class="py-2 px-2 badge badge-success border-0"
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
			<b-button
				variant="primary"
				class="text-light expand"
				id="expand"
				@click="fullScreen()"
			>
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
		return { isFullscreen: false };
	},
	methods: {
		toggle_nav() {
			var sideBar = document.getElementById("colps-sidebar");
			sideBar.style.display = "block";
			var navmenu = document.getElementById("nav-menu");
			navmenu.style.display = "none";
			var contWrapper = document.getElementById("content-wrapper");
			contWrapper.style.transition = "ease .5s";
			if (
				contWrapper.style.paddingLeft == "0px" ||
				contWrapper.style.paddingLeft == "5px"
			) {
				contWrapper.style.paddingLeft = "280px";
			} else {
				contWrapper.style.paddingLeft = "5px";
			}
		},
		fullScreen() {
			var elem = document.getElementById("content-wrapper");
			var expicon = document.getElementById("expand");

			this.isFullscreen = !this.isFullscreen;

			if (this.isFullscreen) {
				elem.requestFullscreen();
				elem.style.backgroundColor = "#eaeae9";
				expicon.style.backgroundColor = "black";
			} else {
				document.exitFullscreen();
				elem.style.backgroundColor = "#eaeae9";
				expicon.style.backgroundColor = "#007bff";
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
	border-radius: 0.5rem;
	background-image: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 0.52),
			rgba(0, 0, 0, 0.73)
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
.dropdown-menu {
	left: -73px;
}
#nav-menu {
	display: none;
}
@media screen and (min-width: 320px) and (max-width: 575.99px) {
	.bg-img {
		background-repeat: no-repeat;
		background-size: cover;
		min-height: 50vh;
		border-radius: 0.5rem;
		background-image: linear-gradient(
				to bottom,
				rgba(255, 255, 255, 0.52),
				rgba(0, 0, 0, 0.73)
			),
			url("~@/assets/img/dog.jpg");
		background-position: center right;
	}
	.b-avatar {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		vertical-align: middle;
		flex-shrink: 0;
		width: 25px;
		height: 25px;
		font-size: inherit;
		font-weight: 400;
		line-height: 1;
		max-width: 100%;
		max-height: auto;
		text-align: center;
		overflow: visible;
		position: relative;
		transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
			box-shadow 0.15s ease-in-out;
	}
	.expand {
		display: inline-block;
		font-weight: 400;
		color: #212529;
		text-align: center;
		vertical-align: middle;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		background-color: transparent;
		border: 1px solid transparent;
		padding: 2px 8px;
		font-size: 15px;
		line-height: 1.5;
		border-radius: 0.25rem;
		transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
			border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	}
	.btn-primary {
		color: #fff;
		background-color: #007bff;
		border-color: #007bff;
	}
}
.sid-style {
	background-color: #ffffff;
	border-radius: 0.5rem;
}
</style>