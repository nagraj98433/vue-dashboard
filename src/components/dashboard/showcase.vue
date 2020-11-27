<template>
	<div class="container-fluid mt-2">
		<div class="row">
			<div class="col-12 bg-img pt-5 text-light position-relative rounded">
				<div class="profile bg-dark py-2" id="toggle">
					<p class="mb-0 text-muted">
						<span class="mr-1"><i class="fas fa-user-alt"></i></span> My Profile
					</p>
					<p class="mb-0 text-left pl-1 text-muted">
						<span class="mr-2"><i class="fas fa-sign-out-alt"></i></span>Logout
					</p>
				</div>
				<div class="align-bottm">
					<p style="font-size: 28px; font-weight: 600">
						American Pet Products Association.
					</p>
					<p style="font-size: 14px" class="mb-0">
						Please select a section on the left panel to start
					</p>
					<span style="font-size: 35px"
						><i class="fas fa-chevron-circle-left"></i
					></span>
				</div>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col sec-left mr-4 rounded text-center font-size py-4">
				<router-link class="logo text-dark text-style" to="#"
					><div>
						<span style="font-size: 35px" class="text-warning box"
							><fa icon="search" class="change"
						/></span>
						<p style="font-size: 18px" class="mb-1 mt-3 text-light">GUIDE</p>
						<p class="text-light">Guide for your assistance</p>
					</div>
				</router-link>
			</div>
			<div class="col sec-right rounded text-center font-size py-4">
				<router-link class="logo text-dark text-style" to="#">
					<div>
						<span style="font-size: 35px" class="text-warning box"
							><fa icon="question" class="change" />
						</span>
						<p style="font-size: 20px" class="mb-1 mt-3 text-light">FAQ</p>
						<p class="text-light">Most Frequent Questions</p>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "showcase",
};
</script>

<style>
.text-style:hover {
	text-decoration: none;
}
/* .sec-left:hover {
	background-color: #0093e9;
	background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
}
.sec-right:hover {
	background-color: #0093e9;
	background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
} */
.sec-left {
	transition: all 1s;
}
.change {
	transition: all 1s;
}
.sec-left:hover .change {
	color: red;
	transform: scale(0.5);
}

.sec-right:hover .change {
	color: red;
	transform: scale(0.5);
}
@media screen and (min-width: 320px) and (max-width: 767.99px) {
	.sec-left,
	.sec-right {
		min-width: 100%;
	}
	.sec-left {
		margin-bottom: 10px;
	}
}
.sec-left {
	background-image: linear-gradient(160deg, #0093e9, #80d0c7);
	color: white;
}
.sec-right {
	background-image: linear-gradient(160deg, #f44336, #9c27b0);
	color: white;
}
.align-bottm {
	padding-top: 170px;
}
</style>