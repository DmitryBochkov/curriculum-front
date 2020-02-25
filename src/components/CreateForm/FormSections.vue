<template>
  <v-row>
    <v-col cols="12">
      <div class="curricula-list">
        <v-card
          class="mx-auto section-card"
          v-for="(section, k) in v.sections.$each.$iter" :key="k"
          >
          <v-card-title class="headline">Section {{ k + 1 }}</v-card-title>
          <v-card-text>
            <v-row no-gutters>
              <v-col cols="3">
                <v-subheader>Name *</v-subheader>
              </v-col>
              <v-col cols="9">
                <v-text-field
                  v-model="section.name.$model"
                  :error-messages="sectionNameErrors(parseInt(k))"
                  required
                  @input="section.name.$touch()"
                  @blur="section.name.$touch()"
                />
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="3">
                <v-subheader>Goal</v-subheader>
              </v-col>
              <v-col cols="9">
                <v-text-field
                  v-model="section.goal.$model"
                />
              </v-col>
            </v-row>

            <v-card class="mt-10">
              <v-card-text>
                <v-row no-gutters>
                  <v-col cols="12">
                    <v-text-field
                      placeholder="Enter Resource Name"
                      v-model="section.newResource.name.$model"
                    />
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="12">
                    <v-text-field
                      placeholder="Enter Resource Link"
                      v-model="section.newResource.link.$model"
                      :error-messages="sectionUrlErrors(parseInt(k), 'Resource')"
                      @input="section.newResource.link.$touch()"
                      @blur="section.newResource.link.$touch()"
                    />

                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="12">
                    <v-btn @click="addNewResource(k)">Add resource</v-btn>
                  </v-col>
                </v-row>
                <v-row no-gutters v-if="section.resources.$model.length">
                  <v-col cols="12">
                    <v-card
                      tile
                    >
                      <template v-for="(resource, l) in section.resources.$model">
                        <v-list-item :key="resource + l">
                          <v-list-item-content>
                            <v-list-item-title>
                              {{ resource.name }}
                            </v-list-item-title>
                          </v-list-item-content>
                          <v-list-item-action>
                            <v-icon @click="deleteItem('resources', k, l)">mdi-close</v-icon>
                          </v-list-item-action>
                        </v-list-item>
                        <v-divider
                          v-if="l + 1 < section.resources.length"
                          :key="l"
                        ></v-divider>
                      </template>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <v-card class="mt-10">
              <v-card-text>
                <v-row no-gutters>
                  <v-col cols="12">
                    <v-text-field
                      placeholder="Enter Project Name"
                      v-model="section.newProject.name.$model"
                    />
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="12">
                    <v-text-field
                      placeholder="Enter Project Link"
                      v-model="section.newProject.link.$model"
                      :error-messages="sectionUrlErrors(parseInt(k), 'Project')"
                      @input="section.newProject.link.$touch()"
                      @blur="section.newProject.link.$touch()"
                    />
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="12">
                    <v-btn @click="addNewProject(k)">Add project</v-btn>
                  </v-col>
                </v-row>

                <v-row no-gutters v-if="section.projects.$model.length">
                  <v-col cols="12">
                    <v-card
                      tile
                    >
                      <template v-for="(project, m) in section.projects.$model">
                        <v-list-item :key="project + m">
                          <v-list-item-content>
                            <v-list-item-title>
                              {{ project.name }}
                            </v-list-item-title>
                          </v-list-item-content>
                          <v-list-item-action>
                            <v-icon @click="deleteItem('projects', k, m)">mdi-close</v-icon>
                          </v-list-item-action>
                        </v-list-item>
                        <v-divider
                          v-if="m + 1 < section.projects.length"
                          :key="m"
                        ></v-divider>
                      </template>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    sections: Array,
    addNewResource: Function,
    addNewProject: Function,
    deleteItem: Function,
    sectionNameErrors: Function,
    sectionUrlErrors: Function,
    v: Object
  }
}
</script>
