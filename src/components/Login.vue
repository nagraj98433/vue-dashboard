<template>
	<div>
		<input type="text" placeholder="user name" v-model="username" />
		<button @click="login()">Login</button>
	</div>
</template>

<script>
export default {
	name: "HelloWorld",
	data() {
		return {
			username: "",
		};
	},
	methods: {
		login() {
			if (this.username) {
				console.log("calling api");
				// this.$router - navigate
				// this.$route - path
				// this.$router.push("/");
				this.$router.replace({
					path: "/",
					query: { username: this.username },
				});
			} else {
				alert("Please enter user name");
			}
		},
	},
};
</script>