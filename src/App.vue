<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="jumbotron">
          <div class="container">
            <span class="display-4 h1">Vue.js Blog Tutorial #1</span>
            <p class="lead">Simple example how to connect to the server, paginate results, create single page app...</p>
          </div>
        </div>
      </div>

      <div class="col-sm-12">
        <paginate
          name="blogs"
          :list="posts"
          :per="10"
          tag="div"
        >
          <section   v-bind:key="blog" v-for="blog in paginated('blogs')">
            <h2>{{ blog.title }}</h2>
            <hr>
          </section>
        </paginate>

        <paginate-links
          for="blogs"
          :async="true"
          :show-step-links="true"
          :step-links="{
            next: 'Next',
            prev: 'Previous'
          }"
          :classes="{
            'ul': 'pagination',
            'ul > li': 'page-item',
            'ul > li > a': 'page-link',
          }"  
        >
        </paginate-links>
      </div>

      
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        posts: [],
        paginate: ['blogs']
      }
    },
    created() {
      this.$http.get("http://jsonplaceholder.typicode.com/posts")
        .then(response => response.json(), error => console.log(error))
        .then(json => this.posts = json, error => console.log(error));
    }
  }
</script>

<style>
.container {
  max-width: 700px;
}
h1:first-letter, h2:first-letter {
  text-transform:uppercase;
}
</style>