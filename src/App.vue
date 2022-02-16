<template>
  <the-header></the-header>
  <the-navigation></the-navigation>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheNavigation from './components/layout/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
    TheHeader,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}
body,
html {
  height: 100vh;
  background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e7e840eb-efcf-431e-84e6-7830b7c0edea/d6tktk7-907636db-a27c-41ec-8468-575df32b2b04.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U3ZTg0MGViLWVmY2YtNDMxZS04NGU2LTc4MzBiN2MwZWRlYVwvZDZ0a3RrNy05MDc2MzZkYi1hMjdjLTQxZWMtODQ2OC01NzVkZjMyYjJiMDQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I3smDJu_pXlVG7qSImAqLGcJEMk_HZC2mOanHG-WkZc');
  background-size: cover, contain;
  background-repeat: repeat;
}
</style>