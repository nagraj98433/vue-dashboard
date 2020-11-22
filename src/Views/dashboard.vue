<template>
	<div class="container-fluid content-wrapper">
		<Sidebar />
		<div class="row pr-2 pl-2 bg-color">
			<div class="col-10">
				<div class="row">
					<div class="col-12 top-section">
						<div class="row pt-2">
							<div class="col-12">
								<p class="text-secondary mb-0">
									<i class="fas fa-search pr-2"></i>Search
								</p>
							</div>
						</div>
						<div class="row pt-4">
							<div class="col-12">
								<h5 class="mb-0 font-weight-bolder">Dashboard</h5>
								<span class="text-secondary font-weight-normal"
									>Good to see you again, James</span
								>
								<span class="font-weight-normal float-right"
									>Customize <i class="fas fa-cog text-muted"></i
								></span>
							</div>
						</div>
					</div>
				</div>
				<!-- <div class="row">
					<div class="col-12 summery-section shadow">summery-section</div>
				</div> -->
				<div class="row mt-2">
					<div class="col mr-3 workflow-section shadow">
						<div class="row pt-2">
							<div class="col">
								<p>Workflows</p>
							</div>
							<div class="col text-right">
								<span
									class="border text-right rounded-pill mb-0 shadow-sm"
									style="
										font-size: 14px;
										font-family: sans-serif;
										padding: 2px 8px;
									"
									>See Active Workflows
									<small><i class="fas fa-chevron-right"></i></small
								></span>
								<div class="row mt-3">
									<div class="col-12 text-left"><h2 class="mb-0">8</h2></div>
								</div>
								<div class="row">
									<div class="col-12 text-left">
										<p class="mb-2 text-muted" style="font-size: small">
											Draft Workflows
										</p>
									</div>
								</div>

								<div class="row mb-2">
									<div class="col-12 text-left">
										<span
											class="text-muted mr-2"
											style="
												background-color: #80808029;
												padding: 1px 5px;
												border-radius: 15px;
											"
											>5</span
										>
										<p class="mb-0 text-muted d-inline">
											Onboarding
											<i
												class="fas fa-chevron-right text-muted"
												style="margin-left: 7px; font-size: 9px"
											></i>
										</p>
									</div>
								</div>
								<div class="row">
									<div class="col-12 text-left">
										<span
											class="text-muted mr-2"
											style="
												background-color: #80808029;
												padding: 1px 5px;
												border-radius: 15px;
											"
											>3</span
										>
										<p class="mb-0 text-muted d-inline">
											Vendor Risk Assesment
											<i
												class="fas fa-chevron-right text-muted"
												style="margin-left: 7px; font-size: 9px"
											></i>
										</p>
									</div>
								</div>
								<div class="row">
									<div
										class="col-12 text-left pt-5 text-primary font-weight-bold"
									>
										<p>See all</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col mytask-section shadow pt-2">
						<div class="row">
							<div class="col col-12">
								<span class="" style="font-weight: 600; font-size: small"
									>My Tasks</span
								>
								<span
									class="float-right border shadow-sm rounded-pill"
									style="padding: 2px 10px; font-size: 11px"
									>See All
									<i
										class="fas fa-chevron-right text-muted"
										style="margin-left: 7px; font-size: 9px"
									></i>
								</span>
							</div>
						</div>
						<div class="row mt-3">
							<div class="col col-2">
								<div class="set-size charts-container">
									<div class="pie-wrapper progress-75 style-2">
										<span class="label">75<span class="smaller">%</span></span>
										<div class="pie">
											<div class="left-side half-circle"></div>
											<div class="right-side half-circle"></div>
										</div>
										<div class="shadow"></div>
									</div>
								</div>
							</div>
							<div class="col col pt-3">
								<p class="mb-1" style="font-weight: 600; font-size: small">
									Onboarding Salsabila Hamton
									<i
										class="fas fa-chevron-right text-muted"
										style="margin-left: 7px; font-size: 9px"
									></i>
								</p>
								<p class="mb-0">
									<input type="checkbox" class="" /><span
										class="text-muted ml-2"
										style="font-size: small"
										>Provision access for Basecamps</span
									>
								</p>
								<input type="checkbox" />
								<p class="text-muted d-inline ml-2" style="font-size: small">
									Provision access for Zeplin
								</p>
							</div>
						</div>
						<div class="row mt-3">
							<div class="col col-2">
								<div class="set-size charts-container">
									<div class="pie-wrapper progress-75 style-2">
										<span class="label">75<span class="smaller">%</span></span>
										<div class="pie">
											<div class="left-side half-circle"></div>
											<div class="right-side half-circle"></div>
										</div>
										<div class="shadow"></div>
									</div>
								</div>
							</div>
							<div class="col col pt-3">
								<p class="mb-1" style="font-weight: 600; font-size: small">
									Vendor Renewal
									<i
										class="fas fa-chevron-right text-muted"
										style="margin-left: 7px; font-size: 9px"
									></i>
								</p>
								<p class="mb-0">
									<input type="checkbox" class="" /><span
										class="text-muted ml-2"
										style="font-size: small"
										>Provision access for Basecamps</span
									>
								</p>
								<input type="checkbox" />
								<p class="text-muted d-inline ml-2" style="font-size: small">
									Provision access for Zeplin
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Sidebar from "../components/dashboard/sidebar";
export default {
	name: "Dashboard",
	components: {
		Sidebar,
	},
};
</script>
<style>
.dashbord {
	height: 100vh;
	/* background-color: blanchedalmond; */
}
.bg-color {
	background-color: #efefef;
}
.top-section {
	height: 20vh;
	background-color: #efefef;
}
/* .summery-section {
	height: 45vh;
	border-radius: 5px;
	background-color: white;
} */
.workflow-section {
	height: 33vh;
	border-radius: 5px;
	background-color: white;
	height: 45vh;
}

.mytask-section {
	height: 45vh;
	border-radius: 5px;
	background-color: white;
}
img {
	width: 60%;
	border-radius: 0.6rem !important;
}
small {
	font-family: sans-serif;
	color: gray;
}
.dashbord-style {
	background-color: #0000ff1a;
	border-radius: 5px;
}
/* circled progress bar  */
.set-size {
	font-size: 4em;
}
.charts-container:after {
	clear: both;
	content: "";
	display: table;
}
.pie-wrapper {
	height: 1em;
	width: 1em;
	float: left;
	margin: 15px -5px;
	position: relative;
}
.pie-wrapper:nth-child(3n + 1) {
	clear: both;
}
.pie-wrapper .pie {
	height: 100%;
	width: 100%;
	clip: rect(0, 1em, 1em, 0.5em);
	left: 0;
	position: absolute;
	top: 0;
}
.pie-wrapper .pie .half-circle {
	height: 100%;
	width: 100%;
	border: 0.1em solid #3498db;
	border-radius: 50%;
	clip: rect(0, 0.5em, 1em, 0);
	left: 0;
	position: absolute;
	top: 0;
}
.pie-wrapper .label {
	background: #34495e;
	border-radius: 50%;
	bottom: 0.4em;
	color: #ecf0f1;
	cursor: default;
	display: block;
	font-size: 0.25em;
	left: 0.4em;
	line-height: 2.6em;
	position: absolute;
	right: 0.4em;
	text-align: center;
	top: 0.4em;
}
.pie-wrapper .label .smaller {
	color: #bdc3c7;
	font-size: 0.45em;
	padding-bottom: 20px;
	vertical-align: super;
}
.pie-wrapper .shadow {
	height: 100%;
	width: 100%;
	border: 0.1em solid #bdc3c7;
	border-radius: 50%;
}
.pie-wrapper.style-2 .label {
	background: none;
	color: #7f8c8d;
}
.pie-wrapper.style-2 .label .smaller {
	color: #bdc3c7;
}

.pie-wrapper.progress-75 .pie {
	clip: rect(auto, auto, auto, auto);
}
.pie-wrapper.progress-75 .pie .right-side {
	transform: rotate(180deg);
}
.pie-wrapper.progress-75 .pie .half-circle {
	border-color: #14a7e2;
}
.pie-wrapper.progress-75 .pie .left-side {
	transform: rotate(270deg);
}
</style>