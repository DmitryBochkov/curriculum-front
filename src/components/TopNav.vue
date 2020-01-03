<template>
  <v-toolbar>
    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn to="/" text>
        Home
      </v-btn>
      <v-btn to="/curriculum/upsert" text>
        Create
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
