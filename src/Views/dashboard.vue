<template>
	<div class="container-fluid content-wrapper menu pr-2" id="content-wrapper">
		<sidebar />
		<div class="container-fluid px-0 pt-1">
			<navbar />
			<router-view />
			<Footer />
		</div>
	</div>
</template>
<script>
import Sidebar from "../components/dashboard/sidebar.vue";
import Navbar from "../components/dashboard/navbar.vue";
import Footer from "../components/dashboard/footer.vue";

export default {
	name: "Dashboard",
	components: {
		Sidebar,
		Navbar,
		Footer,
	},
	methods: {},
};
</script>
<style>
.content-wrapper {
	background-color: #4a49301c;
}
</style>