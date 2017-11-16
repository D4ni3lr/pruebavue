<template src="./SemanticComponent.html"></template>
<script>
  import jQuery from 'jquery'

  require('semantic')
  export default {
    data () {
      return {
        label: 'Seguir'
      }
    },
    mounted: function () {
      jQuery(this.$el).find('.dropdown').dropdown()
    }
  }
</script>