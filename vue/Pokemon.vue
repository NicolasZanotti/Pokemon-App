<style>
.pokemon ul {
  min-height: calc(1rem * 10);
}
.pokemon li {
  height: 1rem;
}
</style>

<template>
  <div class="pokemon">
    <h1>List of Pokémon</h1>
    <ul></ul>
    <button @click="prev" v-bind:disabled="offset === 0">Previous</button>
    <button @click="next" v-bind:disabled="offset === 30">Next</button>
    <div>{{ offset }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offset: 0
    };
  },
  methods: {
    prev() {
      this.offset -= 10;
    },

    next() {
      this.offset += 10;
    },
  },
};
</script>
