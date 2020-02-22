<template>
  <v-app>
    <TopNav />

    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-snackbar
      v-model="snackbar.show"
      :right="true"
      :top="true"
      :timeout="5000"
      :color="snackbar.variant"
      >
        {{ snackbar.message }}
        <v-btn
        color="pink"
        snackbar
        @click="updateSnackbar({ show: false })"
        >
        Close
      </v-btn>
    </v-snackbar>

  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import TopNav from '@/components/TopNav'

export default {
  name: 'App',

  components: {
    TopNav
  },

  computed: {
    ...mapState(['snackbar']),
  },
  methods: {
    ...mapMutations(['updateSnackbar']),
  },
}
</script>
