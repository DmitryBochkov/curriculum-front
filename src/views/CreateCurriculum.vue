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

      <MainForm
        :name="name"
        :goal="goal"
        :description="description"
        :nameRules="nameRules"
        :urlRules="urlRules"
        :sections="sections"
        :addSection="addSection"
        :addNewResource="addNewResource"
        :addNewProject="addNewProject"
        :deleteItem="deleteItem"
      />


    </v-col>

    <v-snackbar
      v-model="snackbar"
      :right="true"
      :top="true"
      :timeout="5000"
      >
        {{ snackbarText }}
        <v-btn
        color="pink"
        snackbar
        @click="snackbar = false"
        >
        Close
      </v-btn>
    </v-snackbar>

  </v-row>
</template>

<script>
import { mapActions } from 'vuex'
import MainForm from '@/components/CreateForm/MainForm'

const urlPattern = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b/gi

export default {
  name: 'CreateCurriculum',
  data() {
    return {
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
      ],
      urlRules: [
        v => {
          return (v.length < 1 || urlPattern.test(v)) || 'Must be valid URL'
        },
      ],
      description: '',
      goal: '',
      sections: [{
        name: '',
        goal: '',
        resources: [],
        projects: [],
        newResource: {
          link: '',
          name: '',
        },
        newProject: {
          link: '',
          name: '',
        },
      }],
      snackbar: false,
      snackbarText: '',
    }
  },
  components: {
    MainForm,
  },
  methods: {
    ...mapActions(['postCurriculum']),
    async saveCurriculum() {
      if (this.$refs['curriculum-form'].validate()) {
        const sections = this.sections.map(s => {
          let updatedSection = {...s}
          delete updatedSection.newResource
          delete updatedSection.newProject
          return updatedSection
        })
        const curriculum = {
          name: this.name,
          description: this.description,
          goal: this.goal,
          sections: sections,
        }
        const savedCurriculumId = await this.postCurriculum(curriculum)
        this.$router.push({ name: 'curriculum', params: { id: savedCurriculumId } })
      }
    },
    addSection() {
      this.sections.push({
        name: '',
        goal: '',
        resources: [],
        newResource: {
          link: '',
          name: '',
        },
        projects: [],
        newProject: {
          link: '',
          name: '',
        },
      })
    },
    addNewResource(index) {
      let item = {
        name: this.sections[index].newResource.name,
        link: this.sections[index].newResource.link
      }
      const nameCheck = item.name.length
      const urlCheck = item.link.length < 1 || urlPattern.test(item.link)

      if (nameCheck && urlCheck) {
        this.sections[index].resources.push(item)
        this.sections[index].newResource.name = ''
        this.sections[index].newResource.link = ''
      } else {
        const nameCheckMsg = nameCheck ? '' : 'Name cannot be blank.'
        const urlCheckMsg = urlCheck ? '' : ' URL must be valid.'
        this.snackbarText = `${nameCheckMsg}${urlCheckMsg}`
        this.snackbar = true
      }
    },
    addNewProject(index) {
      let item = {
        name: this.sections[index].newProject.name,
        link: this.sections[index].newProject.link
      }
      const nameCheck = item.name.length
      const urlCheck = item.link.length < 1 || urlPattern.test(item.link)
      if (nameCheck && urlCheck) {
        this.sections[index].projects.push(item)
        this.sections[index].newProject.name = ''
        this.sections[index].newProject.link = ''
      } else {
        const nameCheckMsg = nameCheck ? '' : 'Name cannot be blank.'
        const urlCheckMsg = urlCheck ? '' : ' URL must be valid.'
        this.snackbarText = `${nameCheckMsg}${urlCheckMsg}`
        this.snackbar = true
      }
    },
    deleteItem(type, sectionIandex, itemIndex) {
      this.sections[sectionIandex][`${type}`].splice(itemIndex, 1)
    },

  },
}
</script>

<style scoped>
</style>
