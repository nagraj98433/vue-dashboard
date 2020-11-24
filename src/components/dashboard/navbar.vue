<template>
	<nav class="navbar d-flex">
		<div class="d-flex" style="flex-direction: column">
			<h6 class="mb-0 font-weight-bold">
				Hello, <span class="text-success">Nagraj</span>
			</h6>
			<small>
				Adminstration |
				<span class="text-success">rajkapool123@gmail.com</span>
			</small>
		</div>
		<div class="d-flex align-items-center">
			<b-button variant="link" class="text-dark">
				<fa icon="expand" />
			</b-button>
			<b-dropdown variant="link" class="text-dark">
				<template #button-content>
					<fa icon="bell" />
					<b-badge variant="danger">4</b-badge>
				</template>
				<div class="notification bg-dark">
					<div class="border-bottom border-secondary text-muted pb-2">
						<span
							>NOTIFICATIONS <span class="badge badge-danger">0 new</span></span
						>
					</div>
					<div class="text-left pl-2 text-muted mt-1">
						<span class="mr-3"><i class="fas fa-cog"></i></span
						><small>No Notification</small>
					</div>
				</div>
			</b-dropdown>
			<b-dropdown variant="link" class="text-dark">
				<template #button-content>
					<b-avatar variant="primary" text="N"></b-avatar>
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
	methods: {},
};
</script>
<style>
.notification {
	position: absolute;
	right: 0.25rem;
	top: 0.25rem;
}
.bg-img {
	background-image: url("~@/assets/img/dog.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	min-height: 52vh;
	border-radius: 2px;
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
.profile {
	position: absolute;
	width: 100px;
	top: 0px;
	left: 78%;
	border-radius: 5px;
}
</style>