<template>
	<div class="res-sidebar" id="res-sidebar bg-info">
		<b-sidebar v-model="visible" width="260px" no-header white shadow>
			<div class="container side-border px-0">
				<span class="d-flex justify-content-between bg-colr py-3">
					<router-link class="logo" to="/">
						<img src="~@/assets/img/logo.png" alt="appa-logo" />
					</router-link>
					<span class="d-flex align-items-center pr-2">
						<b-button @click="togglena1()" class="border-0"
							><fa icon="bars"
						/></b-button>
					</span>
				</span>
				<b-list-group style="background-color: #ffffff">
					<div class="d-flex align-items-center list-header">
						<span>LEVEL A (SUPERADMIN)</span>
					</div>
					<b-list-group-item
						v-b-toggle.collapse-1
						class="d-flex align-items-center justify-content-between rounded border-bottom"
						@click.stop
					>
						<span>
							<span class="list-icon">
								<fa icon="gavel" />
							</span>
							<span>Level A</span>
						</span>
						<span>
							<fa icon="caret-down" />
						</span>
					</b-list-group-item>
					<b-collapse id="collapse-1" class="mt-2" visible>
						<b-list-group flush>
							<b-list-group-item
								v-for="(link, index) in links"
								:key="'l_' + index"
								:to="'/dashboard/' + link.path"
								@click.stop
							>
								<span class="list-icon"><fa :icon="link.icon" /></span>
								<span> {{ link.name }}</span>
							</b-list-group-item>
						</b-list-group>
					</b-collapse>
				</b-list-group>

				<b-list-group flush>
					<div class="d-flex align-items-center list-header mt-3">
						<span>LEVEL B (ADMINS)</span>
					</div>
					<b-list-group-item
						v-b-toggle.collapse-2
						class="d-flex align-items-center justify-content-between"
						@click.stop
					>
						<span>
							<span class="list-icon text-muted">
								<fa icon="gavel" />
							</span>
							<span>Level B</span>
						</span>
						<span>
							<fa icon="caret-down" />
						</span>
					</b-list-group-item>
					<b-collapse id="collapse-2" class="mt-2">
						<b-list-group flush>
							<b-list-group-item
								v-for="(link, index) in links"
								:key="'l_' + index"
								:to="'/dashboard/' + link.path"
								@click.stop
							>
								<span class="list-icon"><fa :icon="link.icon" /></span>
								<span> {{ link.name }}</span>
							</b-list-group-item>
						</b-list-group>
					</b-collapse>
				</b-list-group>

				<b-list-group flush>
					<div class="d-flex align-items-center list-header mt-3">
						<span>LEVEL C (END USERS)</span>
					</div>
					<b-list-group-item
						v-b-toggle.collapse-3
						class="d-flex align-items-center justify-content-between"
						@click.stop
					>
						<span>
							<span class="list-icon text-muted">
								<fa icon="gavel" />
							</span>
							<span>MEETINGS AND EVENTS</span>
						</span>
						<span>
							<fa icon="caret-down" />
						</span>
					</b-list-group-item>
					<b-collapse id="collapse-3" class="mt-2">
						<b-list-group flush>
							<b-list-group-item
								v-for="(link, index) in links"
								:key="'l_' + index"
								:to="'/dashboard/' + link.path"
								@click.stop
							>
								<span class="list-icon"><fa :icon="link.icon" /></span>
								<span> {{ link.name }}</span>
							</b-list-group-item>
						</b-list-group>
					</b-collapse>
				</b-list-group>
			</div>
		</b-sidebar>
	</div>
</template>
<script>
export default {
	name: "sidebar",
	props: {
		title: String,
	},
	components: {},
	data() {
		return {
			visible: true,
			links: [
				{
					icon: "user-lock",
					name: "P1",
					path: "edit-permission",
				},
				{
					icon: "user-lock",
					name: "P1",
					path: "edit-permission",
				},
				{
					icon: "user-lock",
					name: "P1",
					path: "edit-permission",
				},
			],
		};
	},
	methods: {
		togglena1() {
			var el3 = document.getElementById("res-sidebar");
			var el5 = document.getElementById("menu2");
			el3.style.display = "none";
			var el4 = document.getElementsByClassName("content-wrapper");
			el4[0].style.transition = "ease .5s all";
			if (el4[0].style.paddingLeft == "280px") {
				el4[0].style.paddingLeft = "0px";
				el5.style.display = "none";
			} else {
				el4[0].style.paddingLeft = "0px";
				el5.style.display = "block";
			}
			if (el5.style.display == "none") {
				el5.style.display = "block";
			} else {
				el5.style.display = "block";
			}
		},
	},
};
</script>
<style  lang="scss" scoped>
.container {
	background-color: white;
	height: 100vh;
	overflow-y: auto;
	.logo img {
		height: 4rem;
		padding: 1rem;
		margin: 0 auto;
		display: block;
	}
	.list-group {
		.list-header {
			font-size: 0.85rem;
			color: #aaa;
			padding: 0 1.25rem;
		}
		.list-group-item {
			border-radius: 0;
			border: none;
			&:hover,
			&:active,
			&:focus {
				border: none !important;
				outline: none !important;
			}
		}
	}
}
.res-sidebar {
	display: block;
}
.b-sidebar > .b-sidebar-body {
	flex-grow: 1;
	height: 100%;
	overflow-y: auto;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 6px 0px rgba(0, 0, 0, 0.19) !important;
}

@media screen and (max-width: 576px) and (min-width: 320px) {
	.res-sidebar {
		display: none;
	}
}
.bg-colr {
	background-color: #f3f2e1;
}
.side-border {
	border-right: 1.5px solid #483c3c61;
}
.btn-secondary {
	color: #1630ea;
	background-color: transparent;
}
</style>