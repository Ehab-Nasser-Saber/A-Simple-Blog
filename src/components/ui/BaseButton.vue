<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #270041;
  border: 1px solid #270041;
  color: rgb(248, 248, 248);
  cursor: pointer;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #a7c71b;
  border-color: #a7c71b;
}

.flat {
  background-color: transparent;
  color: #f6eeff;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #270041;
  color: #e6fdff;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #a7c71b;
}
</style>