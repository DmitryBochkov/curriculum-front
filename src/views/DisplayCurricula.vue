<template>

  <v-row no-gutters class="display-curricula-page">
    <v-col
      lg="6"
      offset-lg="3"
      sm="8"
      offset-sm="2"
    >
      <div class="page-header">
        <h1>All Curricula</h1>
        <v-btn>Create new</v-btn>
      </div>

      <div class="curricula-list">
        <v-card
          class="mx-auto my-4"
          v-for="curriculum in curriculaData" :key="curriculum.id"
          >
          <v-card-title class="headline">
            <router-link :to="`/curricula/${curriculum.id}`">{{ curriculum.name }}</router-link>
          </v-card-title>
          <v-card-text>
            {{ curriculum.description }}
          </v-card-text>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DisplayCurricula',
  components: {
  },
  computed: {
    ...mapState([
      'curriculaData'
    ])
  }
}
</script>
