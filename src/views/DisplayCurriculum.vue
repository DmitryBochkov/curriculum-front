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
         <h1>Display Curriculum</h1>
         <p>Description. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       </v-col>
     </v-row>

     <v-row>
       <v-col>
         <v-expansion-panels multiple>

           <v-expansion-panel>
             <v-expansion-panel-header>Section 1</v-expansion-panel-header>
             <v-expansion-panel-content>
               <v-list>
                 <v-subheader>Resources</v-subheader>
                 <v-list-item-group
                   v-model="settings"
                   multiple
                 >
                   <v-list-item>
                     <template v-slot:default="{ active, toggle }">
                       <v-list-item-action>
                         <v-checkbox
                           v-model="active"
                           color="primary"
                           @click="toggle"
                         ></v-checkbox>
                       </v-list-item-action>

                       <v-list-item-content>
                         <v-list-item-title>Notifications</v-list-item-title>
                         <v-list-item-subtitle>Allow notifications</v-list-item-subtitle>
                       </v-list-item-content>
                     </template>
                   </v-list-item>

                   <v-list-item>
                     <template v-slot:default="{ active, toggle }">
                       <v-list-item-action>
                         <v-checkbox
                           v-model="active"
                           color="primary"
                           @click="toggle"
                         ></v-checkbox>
                       </v-list-item-action>

                       <v-list-item-content>
                         <v-list-item-title>Sound</v-list-item-title>
                       </v-list-item-content>
                     </template>
                   </v-list-item>

                   <v-list-item>
                     <template v-slot:default="{ active, toggle }">
                       <v-list-item-action>
                         <v-checkbox
                           v-model="active"
                           color="primary"
                           @click="toggle"
                         ></v-checkbox>
                       </v-list-item-action>

                       <v-list-item-content>
                         <v-list-item-title>Video sounds</v-list-item-title>
                         <v-list-item-subtitle>Hangouts video call</v-list-item-subtitle>
                       </v-list-item-content>
                     </template>
                   </v-list-item>

                   <v-list-item>
                     <template v-slot:default="{ active, toggle }">
                       <v-list-item-action>
                         <v-checkbox
                           v-model="active"
                           color="primary"
                           @click="toggle"
                         ></v-checkbox>
                       </v-list-item-action>

                       <v-list-item-content>
                         <v-list-item-title>Invites</v-list-item-title>
                         <v-list-item-subtitle>Notify when receiving invites</v-list-item-subtitle>
                       </v-list-item-content>
                     </template>
                   </v-list-item>
                 </v-list-item-group>
               </v-list>

               <v-list>
                 <v-subheader>Porojects</v-subheader>
                 <v-list-item-group
                   v-model="settings"
                   multiple
                 >
                   <v-list-item>
                     <template v-slot:default="{ active, toggle }">
                       <v-list-item-action>
                         <v-checkbox
                           v-model="active"
                           color="primary"
                           @click="toggle"
                         ></v-checkbox>
                       </v-list-item-action>

                       <v-list-item-content>
                         <v-list-item-title>Notifications</v-list-item-title>
                         <v-list-item-subtitle>Allow notifications</v-list-item-subtitle>
                       </v-list-item-content>
                     </template>
                   </v-list-item>

                   <v-list-item>
                     <template v-slot:default="{ active, toggle }">
                       <v-list-item-action>
                         <v-checkbox
                           v-model="active"
                           color="primary"
                           @click="toggle"
                         ></v-checkbox>
                       </v-list-item-action>

                       <v-list-item-content>
                         <v-list-item-title>Sound</v-list-item-title>
                       </v-list-item-content>
                     </template>
                   </v-list-item>

                   <v-list-item>
                     <template v-slot:default="{ active, toggle }">
                       <v-list-item-action>
                         <v-checkbox
                           v-model="active"
                           color="primary"
                           @click="toggle"
                         ></v-checkbox>
                       </v-list-item-action>

                       <v-list-item-content>
                         <v-list-item-title>Video sounds</v-list-item-title>
                         <v-list-item-subtitle>Hangouts video call</v-list-item-subtitle>
                       </v-list-item-content>
                     </template>
                   </v-list-item>

                   <v-list-item>
                     <template v-slot:default="{ active, toggle }">
                       <v-list-item-action>
                         <v-checkbox
                           v-model="active"
                           color="primary"
                           @click="toggle"
                         ></v-checkbox>
                       </v-list-item-action>

                       <v-list-item-content>
                         <v-list-item-title>Invites</v-list-item-title>
                         <v-list-item-subtitle>Notify when receiving invites</v-list-item-subtitle>
                       </v-list-item-content>
                     </template>
                   </v-list-item>
                 </v-list-item-group>
               </v-list>
             </v-expansion-panel-content>
           </v-expansion-panel>

           <v-expansion-panel>
             <v-expansion-panel-header>Section  2</v-expansion-panel-header>
             <v-expansion-panel-content>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             </v-expansion-panel-content>
           </v-expansion-panel>

           <v-expansion-panel>
             <v-expansion-panel-header>Section 3</v-expansion-panel-header>
             <v-expansion-panel-content>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             </v-expansion-panel-content>
           </v-expansion-panel>

         </v-expansion-panels>
       </v-col>
     </v-row>

    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'DisplayCurriculum'

}
</script>

<style scoped>
</style>
