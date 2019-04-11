<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    
    <h1>Hello,{{name}}</h1>
   
    <p>
      Vrstan Field Office. <br>Is designed for you to GoMobile&reg; with your administrative work even while out in the field or on site.<br> Here you can load all your Projects, Tasks, Workers etc.. and head on out the Site or Field Office. 
    </p>
    <h3 class="bg-yellow pl-5 p-2 mt-2 mb-2 max-w-sm rounded-full hover:shadow">VrstanFO&reg;<span class="ml-20"> OnSite Connectivity...</span></h3>

   
    <ul>
      <li v-for="post in $page.posts.edges" :key="post.id">
        <g-link :to="post.node.path">
          {{ post.node.title }}
        </g-link>
      </li>
    </ul>

    <p class="home-links">
      
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost(sortBy: "titel" order: ASC){
    edges{
      node{
        id
        title
    		path
    
      }
    }
   
  }
}

</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!',
    },
  data() {

    return {name: 'Ian Moncrieffe'}
  }
 
 }
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
