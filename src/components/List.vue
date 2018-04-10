<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-spacer></v-spacer>
      <v-btn :disabled="page === 1" @click="previous">前へ</v-btn>
      <v-btn :disabled="pageCount === page" @click="next">次へ</v-btn>
    </v-flex>
    <v-flex v-for="pokemon in displayPokemons" :key="pokemon.no">
      <card :name="pokemon.name"></card>
    </v-flex>
  </v-layout>
</template>

<script>
import CardVue from './Card.vue'
import pokemons from '@/assets/pokemons.json'

export default {
  name: 'List',
  components: {
    'card': CardVue
  },
  data: () => ({
    displayPerPage: 10,
    page: 1
  }),
  computed: {
    start () {
      return (this.page - 1) * this.displayPerPage
    },
    end () {
      return this.page * this.displayPerPage
    },
    displayPokemons () {
      return pokemons.list.filter((p, i) => this.start <= i && i < this.end)
    },
    count () {
      return pokemons.list.length
    },
    pageCount () {
      return Math.ceil(this.count / this.displayPerPage)
    }
  },
  methods: {
    previous () {
      this.page = this.page - 1
    },
    next () {
      this.page = this.page + 1
    }
  }
}
</script>
