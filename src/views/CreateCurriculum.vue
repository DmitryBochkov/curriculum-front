<template>
  <v-row no-gutters class="upsert-curriculum-page">
    <v-col
      lg="6"
      offset-lg="3"
      sm="8"
      offset-sm="2"
    >
      

      <MainForm />

    </v-col>

  </v-row>
</template>

<script>
import MainForm from '@/components/CreateForm/MainForm'

// const urlPattern = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b/gi

export default {
  name: 'CreateCurriculum',

  components: {
    MainForm
  },

}
</script>

<style scoped>
</style>
