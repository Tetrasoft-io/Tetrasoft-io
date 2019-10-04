import Vue from 'vue'
import { createSimpleTransition } from 'vuetify/es5/util/helpers'

const scaleY = createSimpleTransition('scale-y-transition')

Vue.component('v-scale-y-transition', scaleY)