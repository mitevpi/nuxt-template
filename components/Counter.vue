<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ count }}</h1>
    <button class="button--green" @click="increment">
      Increment
    </button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    msg: String
  },
  data: () => ({
    count: 0
  }),
  computed: {
    storeCount() {
      return this.$store.state.counter;
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment');
      this.count += 1;
    }
  }
};
</script>

<style scoped>

</style>
