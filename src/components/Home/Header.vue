<template>
  <v-sheet
      height="400"
      width="100%"
      color="#fafafa"
      class="overflow-hidden text-center"
      style="position: relative;"
    >
      <v-container class="fill-height" >
        <v-row
          align="center"
          justify="center"
          no-gutters
        >
          <v-col>
            <h1 class="display-3 mb-6">Curricula App</h1>
            <h3 class="display-1 mb-6">Create, share and track your learning curricula. <br>All for free!</h3>
            <v-btn
              light
              color="primary"
              large
            >
              Sign up
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
</template>

<script>
export default {
  name: 'HomeHeader'

}
</script>
