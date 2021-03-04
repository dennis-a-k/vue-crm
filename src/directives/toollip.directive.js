export default {
  bind (el, { value }) {
    window.M.Tooltip.init(el, { html: value })
  },
  unbine (el) {
    const toollip = window.M.Tooltip.getInstance(el)
    if (toollip && toollip.destroy) {
      toollip.destroy()
    }
  }
}
