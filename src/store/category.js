import firebace from 'firebase/app'

export default {
  actions: {
    async fetchCategories ({ commit, dispatch }) {
      try {
        const uid = await dispatch('getUid')
        const categories = (await firebace.database().ref(`/users/${uid}/categories`).once('value')).val() || {}
        // const cats = []
        // Object.keys(categories).forEach(key => {
        //   cats.push({
        //     title: categories[key].title,
        //     limit: categories[key].limit,
        //     id: key
        //   })
        // })
        // return cats
        // короткий вариант кода выше
        return Object.keys(categories).map(key => ({ ...categories[key], id: key }))
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async updateCurrent ({ commit, dispatch }, { title, limit, id }) {
      try {
        const uid = await dispatch('getUid')
        await firebace.database().ref(`/users/${uid}/categories`).child(id).update({ title, limit })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async createCategory ({ commit, dispatch }, { title, limit }) {
      try {
        const uid = await dispatch('getUid')
        const category = await firebace.database().ref(`/users/${uid}/categories`).push({ title, limit })
        return { title, limit, id: category.key }
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  }
}
