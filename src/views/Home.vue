<template>

  <v-row no-gutters class="home-page">
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
          class="mx-auto"
          >
          <v-card-title class="headline">Curriculum 01</v-card-title>
          <v-card-text>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, asperiores!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, asperiores!</p>
          </v-card-text>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'home',
  components: {
  }
}
</script>
