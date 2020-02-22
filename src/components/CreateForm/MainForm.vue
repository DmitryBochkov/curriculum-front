<template>
  <v-form class="upsert-form" ref="curriculum-form">
    <div class="page-header">
      <h1>Create Curriculum</h1>
      <v-btn @click="saveCurriculum">Save</v-btn>
    </div>
    <v-row>
      <v-col cols="3">
        <v-subheader>Name *</v-subheader>
      </v-col>
      <v-col cols="9" :class="{ 'form-group--error': $v.name.$error }">
        <v-text-field
          v-model.trim="$v.name.$model"
        />
        <div class="error" v-if="!$v.name.required">Field is required</div>
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

    <FormSections
      :sections="sections"
      :addNewResource="addNewResource"
      :addNewProject="addNewProject"
      :deleteItem="deleteItem"
    />

    <v-row>
      <v-col cols="12">
        <v-btn @click="addSection">Add Section</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import FormSections from '@/components/CreateForm/FormSections'
import { required, url } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      name: '',
      description: '',
      goal: '',
      sections: [{
        name: '',
        goal: '',
        resources: [],
        projects: [],
        newResource: {
          link: '',
          name: ''
        },
        newProject: {
          link: '',
          name: ''
        }
      }],
    }
  },
  validations: {
    name: {
      required,
    },
    link: {
      url
    }
  },
  components: {
    FormSections,
  },
  methods: {
    ...mapActions(['postCurriculum']),
    ...mapMutations(['updateSnackbar']),
    async saveCurriculum () {
      if (this.$refs['curriculum-form'].validate()) {
        const sections = this.sections.map(s => {
          let updatedSection = { ...s }
          delete updatedSection.newResource
          delete updatedSection.newProject
          return updatedSection
        })
        const curriculum = {
          name: this.name,
          description: this.description,
          goal: this.goal,
          sections: sections
        }
        const savedCurriculumId = await this.postCurriculum(curriculum)
        this.$router.push({ name: 'curriculum', params: { id: savedCurriculumId } })
      }
    },
    addSection () {
      this.sections.push({
        name: '',
        goal: '',
        resources: [],
        newResource: {
          link: '',
          name: ''
        },
        projects: [],
        newProject: {
          link: '',
          name: ''
        }
      })
    },
    addNewResource (index) {
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
        const snackbarText = `${nameCheckMsg}${urlCheckMsg}`
        this.updateSnackbar({
          message: snackbarText,
          show: true,
          variant: 'error',
        })
      }
    },
    addNewProject (index) {
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
        const snackbarText = `${nameCheckMsg}${urlCheckMsg}`
        this.updateSnackbar({
          message: snackbarText,
          show: true,
          variant: 'error',
        })
      }
    },
    deleteItem (type, sectionIandex, itemIndex) {
      this.sections[sectionIandex][`${type}`].splice(itemIndex, 1)
    }

  }
}
</script>
