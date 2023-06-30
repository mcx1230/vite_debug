<template>
	<div id="app">
		<nav>
			<span @click="redirect('/home/')">Home</span> |
			<span @click="redirect('/about/')">About</span>
		</nav>
		<router-view />
	</div>
</template>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	nav {
		padding: 30px;
	}

	nav a,
	span {
		font-weight: bold;
		color: #2c3e50;
		cursor: pointer;
	}


	nav a.router-link-exact-active {
		color: #42b983;
	}
</style>

<script setup>
	const redirect = (path) => {
		location.href = path
	}
</script>
