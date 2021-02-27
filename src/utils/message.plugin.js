export default {
  install (Vue, optios) {
    Vue.prototype.$message = function (html) {
      window.M.toast({ html })
    }

    Vue.prototype.$error = function (html) {
      window.M.toast({ html: `[Ошибка]: ${html}` })
    }
  }
}
