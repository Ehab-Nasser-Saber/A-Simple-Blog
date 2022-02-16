<template>
  <div class="card p-3 text-right mb-2">
    <blockquote class="card-bodyquote">
      <p>
        {{ post }}
      </p>
      <footer class="blockquote-footer">
        <small>
          {{ name }}
        </small>
      </footer>
    </blockquote>
  </div>
</template>

<script>
export default {
  props: ['name', 'post'],
};
</script>

<style>
</style>