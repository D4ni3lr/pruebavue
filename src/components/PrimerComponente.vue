<template>
    <div class="primerComponente">
        Valor de la propiedad: {{parametro}}
        <input type="text" v-bind:value="parametro" @input="$emit('update:parametro', $event.target.value)">
    </div>
</template>
<script>
  export default {
    name: 'primer-componente',
    data () {
      return {
        data: ''
      }
    },
    mounted: function () {
      this.data = this.parametro
    },
    props: ['parametro']
  }
</script>
<style>
    .primerComponente {
        color: blue;
    }
</style>