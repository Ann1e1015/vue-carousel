import Vue from 'vue'
import AnCarousel from '../index.js'

export default Vue.createApp({
    render: () => Vue.h(
      'div', 
      {class: 'demo-content'}, 
      [
        Vue.h(AnCarousel, {
          list: [
            { idx: 0, content: '这是第一张' },
            { idx: 1, content: '这是第二张' },
            { idx: 2, content: '这是第三张' },
            { idx: 3, content: '这是第四张' }
          ],
          screenWidth: 900
        })
      ]
    )
}).mount('#app')
