<template>
	<div class="container-fluid content-wrapper">
		<sidebar />
		<div class="container">
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
};
</script>
<style>
</style>