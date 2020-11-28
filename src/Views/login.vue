<template>
	<div class="container-fluid bg-img-pets font-style px-0">
		<div class="d-flex align-items-center" style="min-height: 100vh">
			<div
				class="main-div login-bg mx-auto d-flex flex-column align-items-center"
			>
				<div class="top-logo py-0 px-2"></div>
				<div class="mt-3 login_btn">
					<button type="button" class="rounded-pill" @click="login()">
						LOGIN
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "login",
	methods: {
		login() {
			this.$router.replace({ path: "/dashboard" });
		},
	},
};
</script>
<style>
.main-div {
	min-height: 181px;
}
.login-bg {
	border-radius: 15px;
	background-color: rgba(255, 255, 255, 0.8);
	padding: 15px 25px;
}
.login_btn button {
	padding: 7px 150px;
	background: linear-gradient(45deg, #8e24aa, #ff6e40) !important;
	border: none;
	outline: none;
	color: white;
	transition: ease 0.5s;
}
.login_btn button:hover {
	transform: scale(0.9);
}
.top-logo {
	background-image: url("~@/assets/img/logo.png");
	height: 147px;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: contain;
	/* width: 100%; */
}
.bg-img-pets {
	background-image: url("~@/assets/img/login-dogs.jpg");
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: 100%;
	background-position: center center;
}
/* .bg-img-pets {
	height: 100vh;
} */

.align_btm {
	text-align: center;
	position: absolute;
	width: 100%;
	/* bottom: 35px; */
	bottom: 0px;
	height: 100px;
}

.btn-login {
	background-color: #f76415;
	padding: 5px 50px;
}
.font-style {
	font-family: roboto sans-serif;
}

@media screen and (min-width: 320px) and (max-width: 575.99px) {
	.bg-img-pets {
		background-size: cover;
	}
	.top-logo {
		width: 220px;
		height: 95px;
		background-position: center bottom;
	}
	.login_btn button {
		padding: 5px 45px;
	}
	.login-bg {
		padding: 0px 0px;
	}
	.main-div {
		width: 245px;
	}
	.main-div {
		min-height: 149px;
	}
}

@media screen and (min-width: 576px) and (max-width: 767.99px) {
	.bg-img-pets {
		background-size: cover;
	}
	.top-logo {
		width: 70%;
	}
}

@media screen and (min-width: 768px) and (max-width: 991.99px) {
	.bg-img-pets {
		background-size: cover;
	}
	.top-logo {
		width: 100%;
	}
}

@media screen and (min-width: 992px) and (max-width: 1199.99px) {
	.bg-img-pets {
		background-size: cover;
	}
	.top-logo {
		width: 100%;
	}
	.align_btm {
		padding-top: 32px;
	}
}

@media screen and (min-width: 1200px) and (max-width: 1440px) {
	.bg-img-pets {
		background-size: cover;
	}
	.top-logo {
		width: 100%;
	}
}

@media screen and (min-width: 1441px) and (max-width: 2560px) {
	.bg-img-pets {
		background-size: cover;
	}
	.top-logo {
		width: 100%;
	}
	.btn-login {
		padding: 20px 100px;
	}
}
.btn-login:hover {
	transform: scale(0.95);
	background: black;
}
.btn-login {
	transition: ease-in-out 0.2s;
}
</style>