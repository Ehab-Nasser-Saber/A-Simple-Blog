<template>
  <header id="page-header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 m-auto text-center">
          <h1>Read Our Blog</h1>
          <p>Join Batman Fans From Around The World</p>
          <base-button link to="/auth" v-if="!isLoggedIn">
            Login To Add A Post</base-button
          >
          <base-button v-if="isLoggedIn" link to="/addpost">
            <fa icon="plus" /> Add Post
          </base-button>
        </div>
      </div>
    </div>
  </header>
  <div class="container-fluid" id="posting">
    <div class="row">
      <div class="col-md-6 m-auto text-center">
        <h1>Why So Serious ?</h1>
        <p>Have A Good Time</p>
      </div>
    </div>
  </div>
  <div class="container-fluid" id="filler">
    <div class="row">
      <div class="col-md-6 m-auto text-center">
        <h1>Post Anonymously</h1>
        <p>Discuss Comics</p>
      </div>
    </div>
  </div>
  <footer id="main-footer" class="text-center p-4">
    <div class="container">
      <div class="row">
        <div class="col">
          <p>Copyright &copy; <span>2022</span> Bats</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<style scoped>
#page-header {
  height: 340px;
  background: url('https://wallpaperaccess.com/full/396534.jpg');
  background-position: 0 -220px;
  background-attachment: fixed;
  color: rgb(42, 54, 226);
  border-bottom: rgba(255, 255, 255, 0.541) 2px solid;
  padding-top: 50px;
}
#posting {
  height: 345px;
  background: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c613b915-14df-499b-9167-261a938bddc2/d39oacm-e6bc4b92-a38d-4fc3-9106-b6d55cefd5b7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2MTNiOTE1LTE0ZGYtNDk5Yi05MTY3LTI2MWE5MzhiZGRjMlwvZDM5b2FjbS1lNmJjNGI5Mi1hMzhkLTRmYzMtOTEwNi1iNmQ1NWNlZmQ1YjcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.uCqGjQudP3yD63CUwByq74aiHMMZ-XWT95qjJR2WviY');
  background-attachment: fixed;
  color: rgb(158, 42, 226);
  border-bottom: rgba(255, 255, 255, 0.541) 2px solid;
  padding-top: 50px;
}
#filler {
  height: 200px;
  background: url('https://images.unsplash.com/photo-1597496610078-e85092480e1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3QlMjBibHVlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80');
  border-bottom: rgba(255, 255, 255, 0.541) 2px solid;
  color: rgb(218, 32, 32);
  padding-top: 30px;
}
#main-footer {
  background: rgb(65, 64, 64);
  color: #fff;
  position: relative;
}
</style>
