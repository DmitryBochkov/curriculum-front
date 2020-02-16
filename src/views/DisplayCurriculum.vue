<template>
  <v-row no-gutters class="upsert-curriculum-page">
    <v-col
      lg="6"
      offset-lg="3"
      sm="8"
      offset-sm="2"
    >

     <v-row>
       <v-col>
         <h1>{{ curriculum.name }}</h1>
         <p>{{ curriculum.description }}</p>
       </v-col>
     </v-row>

     <v-row>
       <v-col>
         <v-expansion-panels multiple>

           <v-expansion-panel v-for="(section, index) in curriculum.sections" :key="Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)">
             <v-expansion-panel-header>Section {{ index + 1 }} - {{ section.name }}</v-expansion-panel-header>
             <v-expansion-panel-content>
               <v-list>
                 <v-subheader>Resources</v-subheader>
                 <v-list-item-group
                   multiple
                 >
                   <v-list-item v-for="(resource, i) in section.resources" :key="Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)">
                     <template v-slot:default="{ active, toggle }">
                       <v-list-item-action>
                         <v-checkbox
                           v-model="active"
                           color="primary"
                           @click="toggle"
                         ></v-checkbox>
                       </v-list-item-action>

                       <v-list-item-content>
                         <v-list-item-title>{{ resource.name }}</v-list-item-title>
                       </v-list-item-content>
                     </template>
                   </v-list-item>
                 </v-list-item-group>
               </v-list>

               <v-list>
                 <v-subheader>Porojects</v-subheader>
                 <v-list-item-group
                   multiple
                 >
                   <v-list-item v-for="(project, j) in section.projects" :key="Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)">
                     <template v-slot:default="{ active, toggle }">
                       <v-list-item-action>
                         <v-checkbox
                           v-model="active"
                           color="primary"
                           @click="toggle"
                         ></v-checkbox>
                       </v-list-item-action>

                       <v-list-item-content>
                         <v-list-item-title>{{ project.name }}</v-list-item-title>
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
import { mapState } from 'vuex'
export default {
  name: 'DisplayCurriculum',
  data () {
    return {
      curriculaId: this.$route.params.id,
      curriculum: {}
    }
  },
  computed: {
    ...mapState([
      'curricula'
    ])
  },
  mounted () {
    this.curriculum = this.curricula.find(c => c._id == this.$route.params.id)
    console.log(this.curriculum);
  }

}
</script>

<style scoped>
</style>
