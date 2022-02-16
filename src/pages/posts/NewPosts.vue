<template>
  <base-button link to="/auth" v-if="!isLoggedIn">
    Login To Add A Post</base-button
  >
  <base-button v-if="isLoggedIn" link to="/addpost">
    <fa icon="plus" /> Add Post
  </base-button>
  <section id="blog" class="py-3">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card-columns">
            <bat-post
              v-for="result in results"
              :key="result.id"
              :name="result.name"
              :post="result.post"
            ></bat-post>
            <div class="card p-3 text-right mb-2">
              <blockquote class="card-bodyquote">
                <p>
                  “It's Not Who I Am Underneath, But What I Do That Defines Me.”
                </p>
                <footer class="blockquote-footer">
                  <small> Batman </small>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BatPost from '../../components/BatPost.vue';
export default {
  components: {
    BatPost,
  },
  data() {
    return {
      results: [],
      isLoading: false,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    loadPosts() {
      this.isLoading = true;
      fetch('https://gotham-blog-default-rtdb.firebaseio.com/posts.json')
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          const results = [];
          for (const id in data) {
            results.unshift({
              id: id,
              name: data[id].name,
              post: data[id].post,
            });
          }
          this.results = results;
        });
    },
  },
  // Loads The Posts Once The Component Is Mounted
  mounted() {
    this.loadPosts();
  },
};
</script>

<style  scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-left: 0px;
  opacity: 0.75;
}
</style>
