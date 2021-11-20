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
    <ul v-if="names.length > 0">
      <li v-for="name in names">{{ name }}</li>
    </ul>
    <button @click="prev" v-bind:disabled="offset === 0">Previous</button>
    <button @click="next" v-bind:disabled="offset >= 50">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offset: 0,
      names: [, , , , , , , , , ,],
    };
  },
  methods: {
    prev() {
      this.offset -= 10;
      this.update();
    },

    next() {
      this.offset += 10;
      this.update();
    },

    async update() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${this.offset}`);
        if (!response.ok) return;
        const obj = await response.json();
        this.names = obj.results.map(a => a.name);
      } catch (error) {}
    },
  },
  created() {
    this.update();
  },
};
</script>
