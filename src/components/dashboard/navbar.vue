<template>
	<nav class="navbar d-flex sid-style mt-0">
		<b-button
			@click="alert('dbkdbkb')"
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
				class="text-light"
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
		toggle_nav() {},
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
#menu2 {
	display: block;
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