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

    <section  v-bind:key="blog" v-for="blog in posts">
      <h2>{{ blog.title }}</h2>
      <hr>
    </section>
    

   
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
