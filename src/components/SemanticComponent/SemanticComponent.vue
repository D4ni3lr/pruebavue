<template src="./SemanticComponent.html"></template>
<script>
  export default {
    data () {
      return {
        label: 'Seguir'
      }
    },
    mounted: function () {
      window.jQuery(this.$el).find('.dropdown').dropdown()
    }
  }
</script>