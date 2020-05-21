<template>
  <v-row no-gutters class="display-curriculum-page">
    <v-col
      lg="6"
      offset-lg="3"
      sm="8"
      offset-sm="2"
    >

     <v-row>
       <v-col>
         <h1
           class="editable-text"
           v-if="isEditField !== 'name'"
          >
           {{ curriculum.name }}
           <v-icon
             color="gray lighten-1"
             @click="toggleEdit('name')"
            >mdi-pencil-box-outline</v-icon>
         </h1>
         <v-text-field v-else v-model="curriculum.name">
           <template v-slot:append-outer>
             <v-btn outlined small color="primary" class="mr-1" @click="saveEdit('name')">Save</v-btn>
             <v-btn outlined small @click="cancelEdit">Cancel</v-btn>
           </template>

         </v-text-field>

         <p class="editable-text" v-if="isEditField !== 'description'">
           {{ curriculum.description }}
           <v-icon color="gray lighten-1" @click="toggleEdit('description')">mdi-pencil-box-outline</v-icon>
         </p>
         <v-text-field v-else v-model="curriculum.description">
           <template v-slot:append-outer>
             <v-btn outlined small color="primary" class="mr-1" @click="saveEdit('description')">Save</v-btn>
             <v-btn outlined small @click="cancelEdit">Cancel</v-btn>
           </template>

         </v-text-field>
       </v-col>
     </v-row>

     <v-row>
       <v-col>
         <v-expansion-panels multiple>

           <v-expansion-panel v-for="(section, index) in curriculum.sections" :key="Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + index">
             <v-expansion-panel-header>Section {{ parseInt(index) + 1 }} - {{ section.name }}</v-expansion-panel-header>
             <v-expansion-panel-content>
               <v-list>
                 <v-subheader>
                   Resources
                   <v-icon
                     color="success lighten-1"
                     class="ml-1"
                    >mdi-plus-box-outline</v-icon>
                 </v-subheader>
                 <v-list-item-group
                   multiple
                 >
                   <v-list-item v-for="(resource, i) in section.resources" :key="Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)">
                     <template>
                       <v-list-item-action>
                         <v-checkbox
                           color="primary"
                           v-model="resource.isCompleted"
                           @change="toggleComplete('resources', index, i)"
                         ></v-checkbox>
                       </v-list-item-action>

                       <v-list-item-content>
                         <v-list-item-title class="editable-text">
                           <router-link to="/">{{ resource.name }}</router-link>
                           <v-icon
                             color="gray lighten-1"
                             class="ml-1"
                             @click="toggleEdit('name')"
                            >mdi-pencil-box-outline</v-icon>
                         </v-list-item-title>
                       </v-list-item-content>
                     </template>
                   </v-list-item>
                 </v-list-item-group>
               </v-list>

               <v-list>
                 <v-subheader>
                   Projects
                   <v-icon
                     color="success lighten-1"
                     class="ml-1"
                    >mdi-plus-box-outline</v-icon>
                 </v-subheader>
                 <v-list-item-group
                   multiple
                 >
                   <v-list-item v-for="(project, j) in section.projects" :key="Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)">
                     <template>
                       <v-checkbox
                       color="primary"
                       v-model="project.isCompleted"
                       @change="toggleComplete('projects', index, j)"
                       ></v-checkbox>

                       <v-list-item-content>
                         <v-list-item-title class="editable-text">
                           <router-link to="/">{{ project.name }}</router-link>
                           <v-icon
                             color="gray lighten-1"
                             class="ml-1"
                             @click="toggleEdit('name')"
                            >mdi-pencil-box-outline</v-icon>
                         </v-list-item-title>
                       </v-list-item-content>
                     </template>
                   </v-list-item>
                 </v-list-item-group>
               </v-list>
             </v-expansion-panel-content>
           </v-expansion-panel>

         </v-expansion-panels>
       </v-col>
     </v-row>

    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'DisplayCurriculum',
  data () {
    return {
      curriculaId: this.$route.params.id,
      curriculum: {},
      isEditField: ''
    }
  },
  computed: {
    ...mapState([
      'curricula'
    ])
  },
  methods: {
    ...mapActions({
      patchType: 'patchType',
      patchCurriculum: 'patchCurriculum'
    }),
    toggleComplete (type, sectionIndex, typeIndex) {
      // console.log(this.curriculum.sections[sectionIndex][type][typeIndex]);
      const section = this.curriculum.sections[sectionIndex]
      const payload = {
        curriculum: this.curriculum,
        type,
        sectionId: section._id,
        item: section[type][typeIndex]
      }
      this.patchType(payload)
    },
    toggleEdit (field) {
      this.isEditField = field
    },
    cancelEdit () {
      this.isEditField = ''
    },
    saveEdit (field) {
      const { _id } = this.curriculum
      const body = {
        [field]: this.curriculum[field]
      }
      const payload = {
        curriculumId: _id,
        body: body
      }
      this.patchCurriculum(payload)
      this.isEditField = ''
    }
  },
  mounted () {
    this.curriculum = this.curricula.find(c => c._id == this.$route.params.id)
    // console.log(this.curriculum);
  }

}
</script>

<style scoped>
</style>
