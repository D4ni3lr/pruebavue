import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import SemanticShowcase from '@/components/SemanticShowcase/SemanticShowcase'
import Maqueta from '@/components/SemanticLab/Maqueta/Maqueta'
import Propuesta from '@/components/Propuesta/Propuesta'

Vue.use(Router)

export default new Router({
  routes: [
    /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, */
    {
      path: '/',
      name: 'Maqueta',
      component: Maqueta
    },
    {
      path: '/showcase',
      name: 'Showcase',
      component: SemanticShowcase
    },
    {
      path: '/propuesta',
      name: 'Propuesta',
      component: Propuesta
    }
  ]
})
