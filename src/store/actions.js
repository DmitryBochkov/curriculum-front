import axios from 'axios'

const API_URL = 'http://localhost:5000/api/v1/curricula/'

export default {
  async getCurricula ({ commit }) {
    const res = await axios.get(API_URL)
    commit('updateCurricula', res.data)
  },
  async postCurriculum ({ commit }, curriculum) {
    const res = await axios.post(API_URL, curriculum)
    commit('appendCurriculum', res.data)
    return res.data._id
  },
  async patchCurriculum ({ commit }, payload) {
    const { curriculumId, body } = payload
    const res = await axios.patch(`${API_URL}/${curriculumId}`, body)
    // const res = await axios.patch(`API_URL/${curriculumId}`, body)
    commit('updateCurriculum', payload)
    return res.data._id
  }
}
