import CarouselDot from './components/carousel-dot.js'
import CarouselScreen from './components/carousel-screen.js'

export default {
  props: {
      list: {
        type: Array,
        default: []
      },
      screenWidth: {
        type: Number,
        default: 900
      }
  },

  data () {
    return {
      activeIdx: 0
    }
  },

  render() {
    return Vue.h(
      'div',
      {class: 'swiper-container'},
      [
        Vue.h(CarouselScreen, { list: this.list, screenWidth: this.screenWidth, activeIdx: this.activeIdx }),
        Vue.h(CarouselDot, {
          list: this.list,
          activeIdx: this.activeIdx,
          onSetActive: (idx) => {
              window.console.log(idx)
              this.activeIdx = idx
          }
        })
      ]
    )
  }
}