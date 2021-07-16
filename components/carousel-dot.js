
export default {
  props: {
      list: {
          type: Array,
          default: []
      }
  },

  computed: {
  },

  render() {
      return Vue.h(
        'ul',
        { class: 'swiper-dot' },
        this.list.map((item, idx) => {
          return Vue.h(
            'li',
            [Vue.h(
              'button',
              {
                onClick: () => {
                    window.console.log(idx)
                    this.$emit('set-active', idx)
                }
              },
              idx
            )]
          )
        })
      )
  }
}