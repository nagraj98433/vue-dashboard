<template>
	<div class="container-fluid bg-img-pets font-style">
		<div class="row">
			<div class="col-12 bg-white-gradient">
				<div class="col ml-auto mr-auto top-logo img-fluid"></div>
			</div>
		</div>
		<div class="row align_btm">
			<div class="col pt-2">
				<button type="button" class="btn btn-login text-light" @click="login()">
					LOGIN
				</button>
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
.bg-img-pets {
	background-image: url("~@/assets/img/pet_dogs.jpeg");
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: 100%;
	background-position: center center;
}
.bg-img-pets {
	height: 100vh;
}
.top-logo {
	background-image: url("~@/assets/img/logo.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: 65%;
	height: 140px;
}
.bg-white-gradient {
	/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,ffffff+100&1+0,0+100;White+to+Transparent */
	background: -moz-linear-gradient(
		top,
		rgba(255, 255, 255, 1) 0%,
		rgba(255, 255, 255, 0) 100%
	); /* FF3.6-15 */
	background: -webkit-linear-gradient(
		top,
		rgba(255, 255, 255, 1) 0%,
		rgba(255, 255, 255, 0) 100%
	); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(
		to bottom,
		rgba(255, 255, 255, 1) 0%,
		rgba(255, 255, 255, 0) 100%
	); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 ); /* IE6-9 */
}
.align_btm {
	text-align: center;
	position: absolute;
	width: 100%;
	/* bottom: 35px; */
	bottom: 0px;
	height: 100px;
	background: -moz-linear-gradient(
		top,
		rgba(0, 0, 0, 0) 0%,
		rgba(0, 0, 0, 0.65) 100%
	); /* FF3.6-15 */
	background: -webkit-linear-gradient(
		top,
		rgba(0, 0, 0, 0) 0%,
		rgba(0, 0, 0, 0.65) 100%
	); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(
		to bottom,
		rgba(0, 0, 0, 0) 0%,
		rgba(0, 0, 0, 0.65) 100%
	); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );
}

.btn-login {
	background-color: #f76415;
	padding: 5px 50px;
}
.font-style {
	font-family: montserrat;
}
@media screen and (min-width: 320px) and (max-width: 575.99px) {
	.bg-img-pets {
		background-size: cover;
	}
	.top-logo {
		width: 80%;
	}
	.btn-login {
		padding: 5px 35px;
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
		width: 50%;
	}
}

@media screen and (min-width: 992px) and (max-width: 1199.99px) {
	.bg-img-pets {
		background-size: cover;
	}
	.top-logo {
		width: 35%;
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
		width: 35%;
	}
}

@media screen and (min-width: 1441px) and (max-width: 2560px) {
	.bg-img-pets {
		background-size: cover;
	}
	.top-logo {
		width: 20%;
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