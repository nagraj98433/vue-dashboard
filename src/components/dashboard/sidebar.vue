<template>
	<div class="res-sidebar" id="res-sidebar bg-info">
		<b-sidebar
			v-model="visible"
			width="270px"
			no-header
			white
			shadow
			id="colps-sidebar"
			ref="colps"
		>
			<div class="container side-border px-0">
				<span class="d-flex justify-content-between bg-colr">
					<router-link class="logo" to="/">
						<img src="~@/assets/img/logo.png" alt="appa-logo" />
					</router-link>
					<span class="d-flex align-items-center pr-0">
						<b-button @click="togglesid()" class="border-0 m-1 px-0 py-0"
							><fa icon="bars"
						/></b-button>
					</span>
				</span>
				<b-list-group style="background-color: #ffffff" class="pt-2">
					<div class="d-flex align-items-center list-header">
						<span>LEVEL A (SUPERADMIN)</span>
					</div>
					<b-list-group-item
						v-b-toggle.collapse-1
						class="d-flex align-items-center justify-content-between rounded border-top"
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
						<b-list-group>
							<b-list-group-item
								class="border"
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

				<b-list-group>
					<div class="d-flex align-items-center list-header mt-3">
						<span>LEVEL B (ADMINS)</span>
					</div>
					<b-list-group-item
						v-b-toggle.collapse-2
						class="d-flex align-items-center justify-content-between rounded border-bottom"
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
						<b-list-group>
							<b-list-group-item
								class="border-bottom"
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

				<b-list-group>
					<div class="d-flex align-items-center list-header mt-3">
						<span>LEVEL C (END USERS)</span>
					</div>
					<b-list-group-item
						v-b-toggle.collapse-3
						class="d-flex align-items-center justify-content-between rounded border-bottom"
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
								class="border-bottom"
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
		togglesid() {
			var sideBar = document.getElementsByClassName("res-sidebar");
			sideBar[0].style.display = "none";
			var cont_wrapper = document.getElementById("content-wrapper");
			cont_wrapper.style.paddingLeft = "5px";
			cont_wrapper.style.transition = "ease .5s";
			var nav_menu = document.getElementById("nav-menu");
			nav_menu.style.display = "block";
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

@media screen and (max-width: 575.99px) and (min-width: 320px) {
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
.container .logo img {
	height: 90px;
	padding: 9px 1px 4px 5px;
	margin: 4px 5px;
	display: block;
}
.side-border {
	border-right: 1.5px solid #483c3c61;
	overflow: hidden;
}
</style>