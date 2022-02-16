<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-0">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/home"
        >Gotham City Blog</router-link
      >
      <button
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item active px-2">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item px-2">
            <router-link class="nav-link" to="/posts">Posts</router-link>
          </li>
          <li class="nav-item px-2" v-if="isLoggedIn">
            <router-link class="nav-link" to="/home" @click="logout"
              >Logout</router-link
            >
          </li>
          <li class="nav-item px-2" v-else>
            <router-link class="nav-link" to="/auth">Login/SignUp</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/home');
    },
  },
};
</script>
<style scoped>
.navbar {
  border-bottom: rgba(255, 255, 255, 0.541) 2px solid;
}
.navbar .nav-link {
  font-size: 14px;
  text-transform: uppercase;
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}

.navbar .nav-item.active {
  border-left: #444 3px solid;
}
</style>
