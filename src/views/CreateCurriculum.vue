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
            <v-text-field v-model="name" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-subheader>Goal</v-subheader>
          </v-col>
          <v-col cols="9">
            <v-text-field v-model="goal" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-label>Description</v-label>
            <v-textarea
              solo
              name="description"
              v-model="description"
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
                      <v-text-field
                        v-model="section.name"
                      />
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="3">
                      <v-subheader>Goal</v-subheader>
                    </v-col>
                    <v-col cols="9">
                      <v-text-field
                        v-model="section.goal"
                      />
                    </v-col>
                  </v-row>

                  <v-card class="mt-10">
                    <v-card-text>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <v-text-field
                            placeholder="Enter Resource Link"
                            v-model="section.newResource"
                            @keyup.enter="adNewResource(k)"
                          />
                        </v-col>
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <p v-for="(resource, l) in section.resources" :key="resource + l">{{ resource }}</p>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>

                  <v-card class="mt-10">
                    <v-card-text>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <v-text-field
                            placeholder="Enter Project Link"
                            v-model="section.newProject"
                            @keyup.enter="adNewProject(k)"
                          />
                        </v-col>
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <p v-for="(project, m) in section.projects" :key="project + m">{{ project }}</p>
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
      name: '',
      description: '',
      goal: '',
      sections: [{
        name: '',
        goal: '',
        resources: [],
        projects: [],
      }]
    }
  },
  methods: {
    ...mapActions(['postCurriculum']),
    saveCurriculum() {
      const sections = this.sections.map(s => {
        delete s.newResource
        delete s.newProject
        return s
      })
      const curriculum = {
        name: this.name,
        description: this.description,
        goal: this.goal,
        sections: sections,
      }
      this.postCurriculum(curriculum)
    },
    addSection() {
      this.sections.push({
        name: '',
        goal: '',
        resources: [],
        newResource: '',
        projects: [],
        newProject: '',
      })
    },
    adNewResource(index) {
      this.sections[index].resources.push(this.sections[index].newResource)
      this.sections[index].newResource = ''
    },
    adNewProject(index) {
      this.sections[index].projects.push(this.sections[index].newProject)
      this.sections[index].newProject = ''
    }
  },
}
</script>

<style scoped>
</style>
