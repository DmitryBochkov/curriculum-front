<template>
  <v-form class="upsert-form" ref="curriculum-form">
    <v-row>
      <v-col cols="3">
        <v-subheader>Name *</v-subheader>
      </v-col>
      <v-col cols="9">
        <v-text-field
          v-model="name"
          :rules="nameRules"
        />
        <!-- <validation-provider rules="required" v-slot="{ errors }">
          <v-text-field v-model="name" />
          <span class="error-text">{{ errors[0] }}</span>
        </validation-provider> -->
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
            class="mx-auto section-card"
            v-for="(section, k) in sections" :key="k"
            >
            <v-card-title class="headline">Section {{ k + 1 }}</v-card-title>
            <v-card-text>
              <v-row no-gutters>
                <v-col cols="3">
                  <v-subheader>Name *</v-subheader>
                </v-col>
                <v-col cols="9">
                  <v-text-field
                    v-model="section.name"
                    :rules="nameRules"
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
                        placeholder="Enter Resource Name"
                        v-model="section.newResource.name"
                        :rules="nameRules"
                      />
                      <!-- <validation-provider rules="required" v-slot="{ errors }">
                        <v-text-field
                        placeholder="Enter Resource Name"
                        v-model="section.newResource.name"
                        />
                        <span class="error-text">{{ errors[0] }}</span>
                      </validation-provider> -->
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="12">
                      <v-text-field
                        placeholder="Enter Resource Link"
                        v-model="section.newResource.link"
                        :rules="urlRules"
                      />
                      <!-- <ValidationProvider
                        :rules="{ regex: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b/i }"
                        v-slot="{ errors }">
                        <v-text-field
                        placeholder="Enter Resource Link"
                        v-model="section.newResource.link"
                        />
                        <span class="error-text">{{ errors[0] }}</span>
                      </ValidationProvider> -->

                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="12">
                      <v-btn @click="adNewResource(k)">Add resource</v-btn>
                    </v-col>
                  </v-row>
                  <v-row no-gutters v-if="section.resources.length">
                    <v-col cols="12">
                      <v-card
                        tile
                      >
                        <template v-for="(resource, l) in section.resources">
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
                        v-model="section.newProject.name"
                        :rules="nameRules"
                      />
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="12">
                      <v-text-field
                        placeholder="Enter Project Link"
                        v-model="section.newProject.link"
                        :rules="urlRules"
                      />
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="12">
                      <v-btn @click="adNewProject(k)">Add project</v-btn>
                    </v-col>
                  </v-row>

                  <v-row no-gutters v-if="section.projects.length">
                    <v-col cols="12">
                      <v-card
                        tile
                      >
                        <template v-for="(project, m) in section.projects">
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

    <v-row>
      <v-col cols="12">
        <v-btn @click="addSection">Add Section</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  props: ['name', 'goal', 'description', 'nameRules', 'urlRules', 'sections', 'addSection', 'addNewProject', 'addNewResource', 'deleteItem'],
}
</script>