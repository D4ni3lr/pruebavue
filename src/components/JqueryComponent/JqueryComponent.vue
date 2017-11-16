<template src="./JqueryComponent.html"></template>
<script>
  import $ from 'jquery'

  export default {
    data () {
      return {}
    },
    created () {
      setInterval(() => {
        console.log(this.$el)
        $(this.$el).fadeToggle()
      }, 3000)
    }
  }
</script>