 <template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
		<h1>Home Page</h1>
		<h3 class="text-right mr-5">
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/services">Services</router-link>
			<router-link to="/contact">Contact</router-link>
			<router-link to="/login">Login</router-link>
			<router-link to="/dashbord">Dashbord</router-link>
		</h3>
		<div class="container">
			<form action="">
				<input
					type="text"
					name=""
					placeholder="Username"
					v-model="username"
					class="form-control mb-3"
				/>
				<input
					type="text"
					name=""
					placeholder="Username"
					v-model="username"
					class="form-control"
				/>
			</form>
		</div>
	</div>
</template>
<script>
export default {
	data: function () {
		return {
			msg: "welcome nagraj",
			username: "",
			email: "",
		};
	},
	methods: {
		fun() {
			console.log("btn is clicked");
		},
	},
};
</script>

<style>
</style>