import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

import IconComponent from '../components/IconComponent'

Vue.use(Vuetify, {
  iconfont: 'md',
  icons: {
    'product': {
      component: IconComponent, // you can use string here if component is registered globally
      props: { // pass props to your component if needed
        name: 'product'
      }
    }
  }
})
