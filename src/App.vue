<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
		<div class="container-fluid">
			<a class="navbar-brand" href=""><img alt="SOYUZ logo" src="./assets/images/logo.png"></a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0 marginMenu">
				<li class="nav-item">
					<router-link to="/" class="nav-link active text-white" aria-current="page">Home</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/about" class="nav-link text-white disabled">About</router-link>
				</li>
				<li class="nav-item dropdown">
					<router-link to="" class="nav-link dropdown-toggle text-white disabled" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects</router-link>
					<ul class="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
						<li><router-link to="" class="dropdown-item text-white" href="./proj1.html">Project 1</router-link></li>
					</ul>
				</li>
				<li class="nav-item dropdown">
					<router-link to="/Blog" class="nav-link dropdown-toggle text-white" href="blog.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
						Blog
					</router-link>
						<ul class="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
							<li><router-link to="/Blog" class="dropdown-item text-white" >Blog Home</router-link></li>
							<li><router-link to="/shop" class="dropdown-item text-white" >Single Post</router-link></li>
						</ul>
				</li>
				<li class="nav-item">
				<router-link to="/shop" class="nav-link text-white">Shop</router-link>
				</li>
			</ul>
			<form class="d-flex">
				<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
				<button class="btn btn-secondary btn-secondary-outline-success" type="submit">Search</button>
			</form>
			</div>
		</div>
	</nav>
  <router-view/>
</template>

<style lang="css">
@import "./assets/scss/custom.css";
/* Adaptative_VUE\adaptatative\src\assets\scss\custom.css */

</style>

