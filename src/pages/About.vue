<template>
  <Layout>
    <h1>VrstanFO&reg </h1>
    <table>
      <thead>
        <tr>
          <th>Author</th>
           <th>Avatar</th>
            <th>Email</th>
        </tr>
      </thead>
      <tbody>

      
      <tr v-for="(item, index) in $page.allFaker.edges" :key="index">
         <td class="pl-5 ml-10 mr-5">
          
           <img class="rounded-full" width="50px" v-bind:src="item.node.avatar"/>
        </td>
        <td class="pl-5 ml-10" >
          <p>
          {{ item.node.author}}
          </p>

        </td>
        
         <td class="pl-5 ml-10" >
           <p>
          {{ item.node.email }} 
           </p>
        </td>
         
      </tr>
      </tbody>
    </table>



 

  </Layout>
</template>
<page-query>
{
  allFaker(perPage: 5) {
    edges{
      node{
        author
        email
        avatar
      }
    }
  }
}
</page-query>


<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>
