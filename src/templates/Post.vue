<template>
    <TeamLayout>
        <div class="markdown-body">
            <h1>{{ $page.post.title }}</h1>
        <div v-html="$page.post.content"></div>
         </div>
    </TeamLayout>
</template>

<page-query>
query Post($path: String!) {
   
  post: post(path: $path){
    id
    title
    content
 }
}
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.post.title
        }
    }
}
</script>

