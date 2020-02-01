<template>
  <v-row no-gutters class="upsert-curriculum-page">
    <v-col
      lg="6"
      offset-lg="3"
      sm="8"
      offset-sm="2"
    >
      <div class="page-header">
        <h1>Create Curriculum</h1>
        <v-btn @click="saveCurriculum">Save</v-btn>
      </div>

      <v-form class="upsert-form">
        <v-row>
          <v-col cols="3">
            <v-subheader>Name</v-subheader>
          </v-col>
          <v-col cols="9">
            <v-text-field v-model="formData.name" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-subheader>Goal</v-subheader>
          </v-col>
          <v-col cols="9">
            <v-text-field v-model="formData.goal" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-label>Description</v-label>
            <v-textarea
              solo
              name="description"
              v-model="formData.description"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="curricula-list">
              <v-card
                class="mx-auto"
                v-for="(section, k) in sections" :key="k"
                >
                <v-card-title class="headline">Section {{ k + 1 }}</v-card-title>
                <v-card-text>
                  <v-row no-gutters>
                    <v-col cols="3">
                      <v-subheader>Name</v-subheader>
                    </v-col>
                    <v-col cols="9">
                      <v-text-field />
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="3">
                      <v-subheader>Goal</v-subheader>
                    </v-col>
                    <v-col cols="9">
                      <v-text-field />
                    </v-col>
                  </v-row>

                  <v-card class="mt-10">
                    <v-card-text>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <v-text-field placeholder="Enter Resource Link" />
                        </v-col>
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <p>List of resources</p>
                          <p>List of resources</p>
                          <p>List of resources</p>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>

                  <v-card class="mt-10">
                    <v-card-text>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <v-text-field placeholder="Enter Project Link" />
                        </v-col>
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <p>List of Projects</p>
                          <p>List of Projects</p>
                          <p>List of Projects</p>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-card-text>
              </v-card>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-btn @click="addSection">Add Section</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CreateCurriculum',
  data() {
    return {
      formData: {
        name: '',
        description: '',
        goal: '',
      },
      sections: [{
        name: '',
        goal: '',
        resourses: [],
        projects: [],
      }]
    }
  },
  methods: {
    ...mapActions(['postCurriculum']),
    saveCurriculum() {
      this.postCurriculum(this.formData)
    },
    addSection() {
      this.sections.push({
        name: '',
        goal: '',
        resourses: [],
        projects: [],
      })
    },
  },
}
</script>

<style scoped>
</style>
