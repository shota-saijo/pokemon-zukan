<template>
  <v-card-text>
    <v-tabs left v-model="tab" hide-slider>
      <v-tabs-slider></v-tabs-slider>
      <v-tab>基本情報</v-tab>
      <v-tab>種族値</v-tab>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <div><v-chip label color="primary" text-color="white">ぜんこくNo. {{ `00${pokemon.id}`.slice(-3) }}</v-chip></div>
          <div><v-chip label v-if="text" color="primary" text-color="white" @click="toggleVersion">{{ $t(`versions.${text.version}`) }}</v-chip></div>
          <blockquote v-if="text" class="ml-3" v-html="text.text"></blockquote>
          <v-chip label color="primary" text-color="white">重さ: {{ weight }}</v-chip>
          <v-chip label color="primary" text-color="white">高さ: {{ height }}</v-chip>
        </v-tab-item>
        <v-tab-item>
          <div><v-chip label color="black" text-color="white">HP: {{ status.hp }}</v-chip></div>
          <div><v-chip label color="red" text-color="white">こうげき: {{ status.attack }}</v-chip></div>
          <div><v-chip label color="yellow" text-color="white">ぼうぎょ: {{ status.defense }}</v-chip></div>
          <div><v-chip label color="blue" text-color="white">とくこう: {{ status.specialattack }}</v-chip></div>
          <div><v-chip label color="green" text-color="white">とくぼう: {{ status.specialdefense }}</v-chip></div>
          <div><v-chip label color="pink" text-color="white">すばやさ: {{ status.speed }}</v-chip></div>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-card-text>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    pokemon: { type: Object, required: true },
    species: { type: Object, required: true }
  },
  data: () => ({
    tab: null,
    version: 0
  }),
  computed: {
    status () {
      return this.pokemon.stats
        .map(stat => ({
          [stat.stat.name.replace('-', '')]: stat.base_stat
        }))
        .reduce((prev, elem) => {
          return Object.assign(prev, elem)
        }, {})
    },
    weight () {
      return `${this.pokemon.weight / 10}kg`
    },
    height () {
      return `0.${this.pokemon.height}m`
    },
    texts () {
      return this.species.flavor_text_entries
        .filter(t => t.language.name === 'ja')
        .map(t => ({
          version: t.version.name,
          text: t.flavor_text.replace(/。/g, '。<br>')
        }))
    },
    text () {
      return this.texts[this.version]
    },
    genera () {
      return this.species.genera
        .filter(g => g.language.name === 'ja')
        .map(g => g.genus)
    }
  },
  methods: {
    toggleVersion () {
      const next = this.version + 1
      if (next >= 4) {
        this.version = next % this.texts.length
      } else {
        this.version = next
      }
    }
  }
}
</script>
