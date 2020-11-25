<template>
	<div class="container">
		<div class="overflow">
			<legend>Edit Permission</legend>
			<div>
				<form action="">
					<label for="">Permission ID</label>
					<input
						type="text"
						name=""
						v-model="PI"
						placeholder=""
						class="form-control"
					/>
					<label for="">Permission Name</label>
					<input
						type="text"
						name=""
						v-model="PN"
						placeholder=""
						class="form-control"
					/>
					<label for="">Permission Discription</label>
					<input
						type="text"
						name=""
						v-model="PD"
						placeholder=""
						class="form-control"
					/>
					<button type="button" class="btn btn-primary mt-2 px-5">Edit</button>
				</form>
			</div>
			<div class="rounded mt-3">
				<label for="#">Permission Management</label>
				<div class="d-flex justify-content-between">
					<span class="select">
						<select name="entries" id="#" class="mx-2">
							<option value="10">10</option>
							<option value="25">25</option>
							<option value="all">ALL</option>
						</select>
					</span>
					<input
						type="search"
						name="search"
						value=""
						placeholder="Search Permission"
						class="border-top-0 border-left-0 border-right-0 hover-effect"
					/>
				</div>
				<div class="mt-3 border-bottom rounded d-flex flex-wrap overflow-auto">
					<table class="table table-striped text-center">
						<th>Permission ID</th>
						<th>Permission Name</th>
						<th>Permission Discription</th>
						<tr title="click for edit" @click="edit(this)" id="edit-tr">
							<td>2</td>
							<td>assign_administrator_privileges</td>
							<td>
								It gives access to Level B to the user.This assigns
								Administrator priviliges to any user that is assigned this
								permission.
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "editpermision",
	data() {
		return {
			PI: "",
			PN: "",
			PD: "",
			array: [],
		};
	},
	methods: {
		edit() {
			var a = document.getElementById("edit-tr").childNodes;
			var b = a[0].innerHTML;
			var c = a[1].innerHTML;
			var d = a[2].innerHTML;
			this.PI = b;
			this.PN = c;
			this.PD = d;
			this.array.push(b, c, d);
			console.log(this.array);
		},
	},
};
</script>

<style>
.select::before {
	content: "Show";
}
.select::after {
	content: "Entries";
}
.hover-effect:hover {
	border-bottom: 2px solid rgb(230, 51, 81);
}
.hover-effect:focus {
	outline: 0;
}
#edit-tr {
	cursor: pointer;
}
</style>