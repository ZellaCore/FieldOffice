<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/team">Teams</g-link>
        <g-link class="nav__link" to="/employees">Employees</g-link>
        <g-link class="nav__link" to="/vblog-html/blog-post-one">Vblogs</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>


query {
  metaData {
    siteName
  }
}
</static-query>


<style>
@import url('../../node_modules/tailwindcss/dist/tailwind.min.css');
@import url('../../node_modules/github-markdown-css/github-markdown.css');

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}
</style>
