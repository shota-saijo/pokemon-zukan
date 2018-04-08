<template>
  <v-app dark>
    <v-toolbar color="red" dense fixed clipped-left app>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">ポケモン図鑑</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-text-field
          placeholder="ポケモンの名前"
          single-line
          append-icon="search"
          :append-icon-cb="() => {}"
          color="white"
          hide-details
        ></v-text-field>
      </v-layout>
    </v-toolbar>
    <v-content>
      <v-container fill-height grid-list-md>
        <slot></slot>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'BaseLayout'
}
</script>
