<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
            <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
            <br>
            <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
            <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
            <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
            <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>
        <div class="compcontanier">
            <h1>contenedor de componentes</h1>
            <intro></intro>
            <span>Parametro en padre: {{parametro}}</span>
            <input type="text" v-model="parametro">
            <primer-componente v-bind:parametro.sync="parametro"></primer-componente>
            <prueba-component></prueba-component>
            <http-component></http-component>
            <jquery-component disabled="true"></jquery-component>
            <semantic-component></semantic-component>
            <button>Muestra</button>
        </div>
    </div>
</template>

<script>
  import intro from './intro.vue'
  import PrimerComponente from './PrimerComponente.vue'
  import HttpComponent from './HttpComponent/HttpComponent.vue'
  import JqueryComponent from './JqueryComponent/JqueryComponent.vue'
  import SemanticComponent from './SemanticComponent/SemanticComponent.vue'

  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        parametro: 'texto'
      }
    },
    components: {
      HttpComponent,
      intro,
      PrimerComponente,
      JqueryComponent,
      SemanticComponent
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .compcontanier {
        border: 1px solid;
    }
</style>
