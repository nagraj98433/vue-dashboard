<template>
	<nav class="navbar d-flex sid-style mt-0 px-2 py-0">
		<div class="navbar_2 w-100">
			<b-button @click="toggle_nav()" id="nav-menu" class="py-2 px-2"
				><fa icon="bars"
			/></b-button>
			<div class="d-flex flex-grow-1 ml-3 flex-row name">
				<h6 class="mb-0 font-weight-bold pt-2">
					Hello, <span class="text-success">John</span>
					<marquee scrollamount="4" v-if="$mq === 'mobile'">
						<small class="text-success d-block"
							><span class="text-dark">Adminstration |</span>
							john@yahoo.com</small
						>
					</marquee>
					<small class="text-success d-block" v-else
						><span class="text-dark">Adminstration |</span>
						john@yahoo.com</small
					>
				</h6>
				<!-- <small>
				<marquee scollamount="4">
					<span class="text-success">Adminstration | John@yahoo.com</span>
				</marquee>
			</small> -->
			</div>
			<div class="d-flex align-items-center">
				<b-button
					variant="btn btn-link"
					class="expand"
					id="expand"
					@click="fullScreen()"
				>
					<fa icon="expand" />
				</b-button>
				<b-dropdown variant="link" class="text-success">
					<template #button-content>
						<fa icon="bell" class="text-primary" />
						<b-badge variant="danger">0</b-badge>
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
				<b-dropdown variant="link" class="pb-2">
					<template #button-content>
						<b-avatar variant="primary" text="J"></b-avatar>
					</template>
					<b-dropdown-item href="#">An item</b-dropdown-item>
					<b-dropdown-item href="#">Another item</b-dropdown-item>
				</b-dropdown>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: "navbar",
	data() {
		return { isFullscreen: false, isShow: false };
	},
	methods: {
		toggle_nav() {
			var sideBar = document.getElementsByClassName("res-sidebar");
			sideBar[0].style.display = "block";
			var cont_wrapper = document.getElementById("content-wrapper");
			cont_wrapper.style.paddingLeft = "280px";
			cont_wrapper.style.transition = "ease .5s";
			var nav_menu = document.getElementById("nav-menu");
			nav_menu.style.display = "none";
		},
		fullScreen() {
			var elem = document.getElementById("content-wrapper");
			var expicon = document.getElementById("expand");

			this.isFullscreen = !this.isFullscreen;

			if (this.isFullscreen) {
				elem.requestFullscreen();
				elem.style.backgroundColor = "#eaeae9";
				expicon.style.backgroundColor = "black";
				expicon.style.color = "white";
			} else {
				document.exitFullscreen();
				elem.style.backgroundColor = "#eaeae9";
				expicon.style.backgroundColor = "transparent";
				expicon.style.color = "blue";
				expicon.style.outline = "none";
			}
		},
	},
};
</script>
<style>
#nav-menu {
	display: none;
}
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
/* #nav-menu {
	display: none;
} */
@media screen and (min-width: 320px) and (max-width: 576px) {
	#nav-menu {
		display: block;
	}
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
		width: 20px;
		height: 20px;
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
		color: #007bff;
		text-align: center;
		vertical-align: middle;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		background-color: transparent;
		border: 0px solid transparent;
		padding: 0px 6px;
		font-size: 15px;
		line-height: 1.5;
		border-radius: 0.25rem;
		transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
			border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	}
	.btn {
		display: inline-block;
		font-weight: 400;
		color: #007bff;
		text-align: center;
		vertical-align: middle;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		background-color: transparent;
		border: 0px solid transparent;
		padding: 0px 6px;
		font-size: 15px;
		line-height: 1.5;
		border-radius: 0.25rem;
		transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
			border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	}
	.name {
		margin-left: 0px !important;
	}
	.navbar_2 {
		display: flex;
		justify-content: space-between;
	}
}
.sid-style {
	background-color: #ffffff;
	border-radius: 0.5rem;
}
@media screen and (min-width: 576px) and (max-width: 767.99px) {
	.navbar_2 {
		display: flex;
		justify-content: space-around;
		width: 100%;
	}
	.btn-secondary {
		color: #272424;
		background-color: transparent;
		border-color: transparent;
	}
	.btn-secondary:hover {
		color: #272424;
		background-color: transparent;
		border-color: transparent;
	}
	.btn-secondary:active {
		color: #272424 !important;
		background-color: transparent !important;
		border-color: transparent !important;
	}
}
@media screen and (min-width: 768px) and (max-width: 991.99px) {
	.navbar_2 {
		display: flex;
		justify-content: space-around;
		width: 100%;
	}
	.btn-secondary {
		color: #272424;
		background-color: transparent;
		border-color: transparent;
	}
	.btn-secondary:hover {
		color: #272424;
		background-color: transparent;
		border-color: transparent;
	}
	.btn-secondary:active {
		color: #272424 !important;
		background-color: transparent !important;
		border-color: transparent !important;
	}
}
@media screen and (min-width: 992px) and (max-width: 1199.99px) {
	.navbar_2 {
		display: flex;
		justify-content: space-around;
		width: 100%;
	}
	.btn-secondary {
		color: #272424;
		background-color: transparent;
		border-color: transparent;
	}
	.btn-secondary:hover {
		color: #272424;
		background-color: transparent;
		border-color: transparent;
	}
	.btn-secondary:active {
		color: #272424 !important;
		background-color: transparent !important;
		border-color: transparent !important;
	}
}
@media screen and (min-width: 1200px) and (max-width: 1440px) {
	.navbar_2 {
		display: flex;
		justify-content: space-around;
		width: 100%;
	}
	.btn-secondary {
		color: #272424;
		background-color: transparent;
		border-color: transparent;
	}
	.btn-secondary:hover {
		color: #272424;
		background-color: transparent;
		border-color: transparent;
	}
	.btn-secondary:active {
		color: #272424 !important;
		background-color: transparent !important;
		border-color: transparent !important;
	}
}
.btn .badge {
	position: relative;
	top: -12px;
	left: -4px;
}
.dropdown-toggle::after {
	display: inline-block;
	margin-left: 0.255em;
	vertical-align: 0.255em;
	content: "";
	border-top: 0.3em solid;
	border-right: 0.3em solid transparent;
	border-bottom: 0;
	border-left: 0.3em solid transparent;
	display: none;
}
</style>