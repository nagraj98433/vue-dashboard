<template>
	<div class="container">
		<div class="row">
			<div
				class="col-12 bg-danger bg-img text-center pt-5 text-warning position-relative"
			>
				<div class="profile bg-dark py-2" id="toggle">
					<p class="mb-0 text-muted">
						<span class="mr-1"><i class="fas fa-user-alt"></i></span> My Profile
					</p>
					<p class="mb-0 text-left pl-1 text-muted">
						<span class="mr-2"><i class="fas fa-sign-out-alt"></i></span>Logout
					</p>
				</div>
				<div>
					<p style="font-size: 28px; font-weight: 600">
						American Pet Products Association.
					</p>
					<p style="font-size: 14px">
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
				<div>
					<span style="font-size: 35px"
						><i class="fas fa-search text-warning"></i
					></span>
					<p style="font-size: 18px" class="mb-1 mt-3">GUIDE</p>
					<p>Guide for your assistance</p>
				</div>
			</div>
			<div class="col sec-right rounded text-center font-size py-4">
				<div>
					<span style="font-size: 35px"
						><i class="fas fa-question-circle text-warning"></i
					></span>
					<p style="font-size: 20px" class="mb-1 mt-3">FAQ</p>
					<p>Most Frequent Questions</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "showcase",
};
</script>