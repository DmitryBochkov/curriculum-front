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
          :error-messages="nameErrors"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        />
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
      :v="$v"
      :sectionNameErrors="sectionNameErrors"
      :sectionUrlErrors="sectionUrlErrors"
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
import { required, maxLength, url } from 'vuelidate/lib/validators'

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
      }]
    }
  },
  validations: {
    name: {
      required,
      maxLength: maxLength(20)
    },
    link: {
      url
    },
    sections: {
      $each: {
        name: {
          required,
          maxLength: maxLength(20)
        },
        goal: {},
        resources: {},
        projects: {},
        newResource: {
          link: {
            url
          },
          name: {}
        },
        newProject: {
          link: {
            url
          },
          name: {}
        }
      }
    }
  },
  components: {
    FormSections
  },
  methods: {
    ...mapActions(['postCurriculum']),
    ...mapMutations(['updateSnackbar']),
    async saveCurriculum () {
      this.$v.$touch()
      if (!this.$v.$anyError) {
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
      // const urlCheck = item.link.length < 1 || urlPattern.test(item.link)

      this.sections[index].resources.push(item)
      this.sections[index].newResource.name = ''
      this.sections[index].newResource.link = ''
      if (nameCheck) {
      } else {
        // const nameCheckMsg = nameCheck ? '' : 'Name cannot be blank.'
        // const urlCheckMsg = urlCheck ? '' : ' URL must be valid.'
        // const snackbarText = `${nameCheckMsg}${urlCheckMsg}`
        // this.updateSnackbar({
        //   message: snackbarText,
        //   show: true,
        //   variant: 'error',
        // })
      }
    },
    addNewProject (index) {
      let item = {
        name: this.sections[index].newProject.name,
        link: this.sections[index].newProject.link
      }
      const nameCheck = item.name.length
      // const urlCheck = item.link.length < 1 || urlPattern.test(item.link)
      if (nameCheck) {
        this.sections[index].projects.push(item)
        this.sections[index].newProject.name = ''
        this.sections[index].newProject.link = ''
      } else {
        // const nameCheckMsg = nameCheck ? '' : 'Name cannot be blank.'
        // const urlCheckMsg = urlCheck ? '' : ' URL must be valid.'
        // const snackbarText = `${nameCheckMsg}${urlCheckMsg}`
        // this.updateSnackbar({
        //   message: snackbarText,
        //   show: true,
        //   variant: 'error',
        // })
      }
    },
    deleteItem (type, sectionIandex, itemIndex) {
      this.sections[sectionIandex][`${type}`].splice(itemIndex, 1)
    },
    sectionNameErrors (i) {
      const errors = []
      if (!this.$v.sections.$each.$iter[i].name.$dirty) return errors
      !this.$v.sections.$each.$iter[i].name.maxLength && errors.push('Name must be at most 20 characters long.')
      !this.$v.sections.$each.$iter[i].name.required && errors.push('Name is required.')
      return errors
    },
    sectionUrlErrors (i, type) {
      const errors = []
      if (!this.$v.sections.$each.$iter[i][`new${type}`].link.$model.length) return errors
      !this.$v.sections.$each.$iter[i][`new${type}`].link.url && errors.push('Must be a valid url.')
      return errors
    }

  },
  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 20 characters long.')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    }
  }
}
</script>
