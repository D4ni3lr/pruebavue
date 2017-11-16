<template src="./HttpComponent.html"></template>
<script>
  import axios from 'axios'

  export default {
    name: 'HttpComponent',
    data: () => {
      return {
        endpoint: 'http://jsonplaceholder.typicode.com/posts',
        datos: [],
        loading: true
      }
    },
    created () {
      axios.get(this.endpoint).then(response => {
        this.datos = response.data
        this.loading = false
      })
    }
  }
</script>
<style>
    .loading{
        height: 100px;
        border:1px solid red;
    }
</style>