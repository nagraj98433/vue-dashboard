<template>
	<div>
		<p>home page</p>
		<router-link to="/login" v-if="username === ''">login</router-link>
		<div v-else>
			<h1>Welcome {{ username }}</h1>
			<button @click="logout">logout</button>
		</div>
	</div>
</template>
<script>
export default {
	name: "Home",
	data() {
		return {
			username: "",
		};
	},
	methods: {
		logout() {
			this.username = "";
			this.$router.replace({ path: "/", query: {} });
		},
	},
	mounted() {
		if (this.$route.query && this.$route.query.username) {
			this.username = this.$route.query.username;
		}
	},
};
</script>