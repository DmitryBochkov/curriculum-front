<template>
  <v-toolbar color="info">
    <v-toolbar-title>Curricula App</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn to="/" text>
        Home
      </v-btn>
      <v-btn to="/curricula" text exact>
        View All
      </v-btn>
      <v-btn to="/curricula/create" text exact>
        Create
      </v-btn>
      <v-btn to="/" exact color="secondary" class="black--text">
        Log in
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'TopNav'
}
</script>

<style lang="sass" scoped>
  .v-toolbar
    flex: 0
</style>
