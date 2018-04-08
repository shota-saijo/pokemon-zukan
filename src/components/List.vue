<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-spacer></v-spacer>
      <v-btn :disabled="!result.previous" @click="previous">前へ</v-btn>
      <v-btn :disabled="!result.next" @click="next">次へ</v-btn>
    </v-flex>
    <template v-if="!loading">
      <v-flex v-for="pokemon in pokemons" :key="pokemon.url">
        <card :name="pokemon.name"></card>
      </v-flex>
    </template>
    <v-flex v-else justify-center>
      <v-progress-circular indeterminate :size="100" :width="7" color="primary"></v-progress-circular>
    </v-flex>
  </v-layout>
</template>

<script>
import CardVue from './Card.vue'
import { Pokedex } from 'pokeapi-js-wrapper'

const pokedex = new Pokedex({
  protocol: 'https',
  hostName: 'pokeapi.co',
  versionPath: '/api/v2/',
  cache: true,
  timeout: 5 * 1000
})

export default {
  name: 'List',
  components: {
    'card': CardVue
  },
  data: () => ({
    loading: true,
    interval: {
      limit: 100,
      offset: 0
    },
    result: {},
    pokemons: []
  }),
  methods: {
    async getPokemons () {
      this.loading = true
      const response = await pokedex.getPokemonsList(this.interval)
      this.result = response
      this.pokemons = response.results
    },
    async previous () {
      this.interval.offset = this.interval.offset - 100
      await this.getPokemons()
      this.loading = false
    },
    async next () {
      this.interval.offset = this.interval.offset + 100
      await this.getPokemons()
      this.loading = false
    }
  },
  async created () {
    await this.getPokemons()
    this.loading = false
  }
}
</script>
