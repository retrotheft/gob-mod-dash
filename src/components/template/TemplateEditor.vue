<template>
	<div id="template-editor">
		<form>
			<div class="form-input">
				<label for="title">Title</label>
				<input
					id="title"
					name="title"
					type="text"
					:value="template.title"
					@input="setProperty($event)"
				/>
			</div>
			<div class="form-input">
				<label for="body">Body</label>
				<textarea
					id="body"
					name="body"
					rows="30"
					:value="template.body"
					@input="setProperty($event)"
				/>
			</div>
		</form>
		<div>Template saves automatically</div>
		<ul id="macros">
			<li>%num = round number</li>
			<li>%theme = round theme</li>
      <li>%begin = round begin date</li>
      <li>%end = round end date</li>
      <li>%vcut = round voting cutoff date</li>
      <li>%bwts = worldtimeserver link for round begin date</li>
      <li>%ewts = worldtimeserver link for round end date</li>
      <li>%vwts = worldtimeserver link for round voting cutoff date</li>
		</ul>
    <p>Note: Macros will only update when the template is previewed in the Round view.</p>
	</div>
</template>

<script>
export default {
	name: "TemplateEditor",
	props: {
		template: {
			type: Object,
			required: true,
		},
	},
	inject: ["setProperty"],
};
</script>

<style scoped>
div#template-editor {
  padding: 15px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

label {
	text-transform: uppercase;
	font-size: 0.9rem;
	font-weight: bold;
	text-align: left;
}

input {
	background-color: black;
	color: white;
	flex-grow: 1;
}

textarea {
	background-color: black;
	color: white;
	margin: 5px;
	flex-grow: 1;
}

#macros {
	font-size: 0.8rem;
}

.form-input {
	width: 100%;
	display: flex;
	flex-direction: column;
}
</style>