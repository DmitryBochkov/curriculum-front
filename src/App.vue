<template>
  <v-app>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/curriculum/upsert">Create</router-link>
    </div>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  })
}
</script>
