<template>
  <v-card v-if="!loading">
    <v-card-title primary-title>
      <h3>{{ pokemonSpecies.names.find(name => name.language.name === 'ja').name }}</h3>
      <v-spacer></v-spacer>
      <v-chip v-for="pokeType in pokemon.types" :key="pokeType.slot" :color="$t(`type-colors.${pokeType.type.name}`)" text-color="white">{{ $t(`types.${pokeType.type.name}`) }}</v-chip>
    </v-card-title>
    <v-card-media @click="show = !show" :src="pokemon.sprites.front_default" contain height="200px"></v-card-media>
    <v-slide-y-transition>
      <detail v-if="show" :pokemon="pokemon" :species="pokemonSpecies"></detail>
    </v-slide-y-transition>
  </v-card>
  <v-card v-else>
    <v-card-text>
      <v-progress-circular indeterminate :size="100" :width="7" color="primary"></v-progress-circular>
    </v-card-text>
  </v-card>
</template>

<script>
import localforage from 'localforage'
import DetailVue from './Detail.vue'

const BASE_URL = 'https://pokeapi.co/api/v2'

const storage = localforage.createInstance()

export default {
  name: 'Card',
  components: {
    'detail': DetailVue
  },
  props: {
    name: { type: String, required: true }
  },
  data: () => ({
    loading: true,
    show: false,
    pokemon: null,
    pokemonSpecies: null
  }),
  methods: {
    async getPokemonFromApi () {
      const res = await this.$http.get(`${BASE_URL}/pokemon/${this.name}/`)
      this.pokemon = res.data
      storage.setItem(`pokemon.${this.name}`, res.data)
    },
    async getPokemonSpeciesFromApi () {
      const res = await this.$http.get(`${BASE_URL}/pokemon-species/${this.name}/`)
      this.pokemonSpecies = res.data
      storage.setItem(`pokemon.species.${this.name}`, res.data)
    },
    async getPokemonFromStorage () {
      const res = await storage.getItem(`pokemon.${this.name}`)
      this.pokemon = res
    },
    async getPokemonSpeciesFromStorage () {
      const res = await storage.getItem(`pokemon.species.${this.name}`)
      this.pokemonSpecies = res
    }
  },
  async created () {
    await this.getPokemonFromStorage()
    await this.getPokemonSpeciesFromStorage()
    if (!this.pokemon) {
      await this.getPokemonFromApi()
    }
    if (!this.pokemonSpecies) {
      await this.getPokemonSpeciesFromApi()
    }
    this.loading = false
  }
}
</script>
