<template>
    <div class="intro">
        <span>Intro</span>
        <span>{{message}}</span>
        <span>Bind del titulo</span>
        <span v-bind:title="message2">Este texto debe mostrar un mensaje con fecha</span>
        <span v-if="mostrarMsj">Texto condicional, debe desaparecer cuando veamos eventos</span>
        <span>Ciclos, siguiente lista de datos:</span>
        <ol>
            <li v-for="dato in lista">
                {{dato}}
            </li>
        </ol>
        <span>eventos</span>
        <button v-on:click="mostrarOcultar">Mostrar/Ocultar</button>
        <span>Cajas de texto</span>
        <span>Valor en caja: {{input}}</span>
        <input type="text" v-model="input">
    </div>
</template>
<script>
  export default {
    name: 'intro',
    data () {
      return {
        message: 'Hola mundo vue',
        message2: 'Texto con fecha: ' + new Date().toLocaleString(),
        mostrarMsj: true,
        lista: [1, 2, 3, 8, 5, 658, 5, 8, 65, 6, 8, 9],
        input: 'No inicializado'
      }
    },
    methods: {
      mostrarOcultar: function () {
        this.mostrarMsj = !this.mostrarMsj
      }
    }
  }
</script>
<style>
    span {
        display: block;
    }
</style>