<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Nuxt Template
      </h1>
      <h2 class="subtitle">
        Nuxt.js Application Template
      </h2>
      <nuxt-link to="/about">About</nuxt-link>
      <counter msg="Counter" class="spacer"></counter>
    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue';
import Counter from '../components/Counter.vue';

export default {
  components: {
    Logo,
    Counter
  },
  transition: 'fade'
};
</script>

<style scoped></style>
