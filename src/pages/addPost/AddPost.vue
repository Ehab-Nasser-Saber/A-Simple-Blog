<template>
  <!-- ACTIONS -->
  <section id="actions" class="py-4 mb-4">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <router-link to="/posts" class="btn btn-primary btn-block">
            <fa icon="arrow-left" /> Back To Posts
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- DETAILS -->
  <section id="details">
    <div class="container opacity-75">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-header">
              <h4>Create Post</h4>
            </div>
            <div class="card-body">
              <form @submit.prevent="submitPost">
                <div class="form-group">
                  <label for="title">NickName</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    v-model.trim="enteredName"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="body">Enter Post</label>
                  <textarea
                    name="post"
                    class="form-control"
                    v-model="enteredPost"
                  ></textarea>
                </div>
                <p v-if="invalidInput">
                  One or more input fields are invalid. Please check your
                  provided data.
                </p>
                <div>
                  <base-button class="mt-2">Submit</base-button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      enteredPost: [],
      invalidInput: false,
    };
  },
  methods: {
     async submitPost() {
      if (this.enteredName === '' || !this.enteredPost) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

       await fetch('https://gotham-blog-default-rtdb.firebaseio.com/posts.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.enteredName,
          post: this.enteredPost,
        }),
      });

      this.enteredName = '';
      this.enteredPost = [];
      this.reRoute()
    },
    reRoute(){
      this.$router.push('/posts')
    }
  },
  
};
</script>

<style scoped>
</style>