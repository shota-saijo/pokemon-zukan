<template>
  <v-card v-if="!loading">
    <v-card-title primary-title>
      <h3>{{ pokemonSpecies.names.find(name => name.language.name === 'ja').name }}</h3>
      <v-spacer></v-spacer>
      <v-chip v-for="pokeType in pokemon.types" :key="pokeType.slot" :color="$t(`type-colors.${pokeType.type.name}`)" text-color="white">{{ $t(`types.${pokeType.type.name}`) }}</v-chip>
    </v-card-title>
    <v-card-media :src="pokemon.sprites.front_default" contain height="200px"></v-card-media>
  </v-card>
  <v-card v-else>
    <v-card-text>
      <v-progress-circular indeterminate :size="100" :width="7" color="primary"></v-progress-circular>
    </v-card-text>
  </v-card>
</template>

<script>
import { Pokedex } from 'pokeapi-js-wrapper'

const pokedex = new Pokedex({
  protocol: 'https',
  hostName: 'pokeapi.co',
  versionPath: '/api/v2/',
  cache: true,
  timeout: 5 * 1000
})

export default {
  name: 'Card',
  props: {
    name: { type: String, required: true }
  },
  data: () => ({
    loading: true,
    pokemon: {},
    pokemonSpecies: {}
  }),
  methods: {
    async getPokemon () {
      const res = await pokedex.getPokemonByName(this.name)
      this.pokemon = res.data
    },
    async getPokemonSpecies () {
      const res = await pokedex.getPokemonSpeciesByName(this.name)
      this.pokemonSpecies = res.data
    }
  },
  async created () {
    await this.getPokemon()
    await this.getPokemonSpecies()
    this.loading = false
  }
}
</script>
