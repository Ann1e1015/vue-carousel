
export default {
  props: {
      list: {
          type: Array,
          default: []
      },
      screenWidth: {
        type: Number
      },
      activeIdx: {
        type: [Number, String]
      }
  },

  render() {
    window.console.log(      this.list.map((item, idx) => {
      return Vue.h(
        'li',
        { class: 'swiper-item' },
        `${item.content}`
      )
    }))
    return Vue.h(
      'ul',
      { class: 'swiper-screen', style: { width: this.screenWidth * this.list.length + 'px', left: - this.screenWidth * this.activeIdx + 'px' }},
      this.list.map((item, idx) => {
        return Vue.h(
          'li',
          { class: 'swiper-item', style: { width: this.screenWidth + 'px' }},
          `${item.content}`
        )
      })
    )
}
}