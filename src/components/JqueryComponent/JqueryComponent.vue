<template src="./JqueryComponent.html"></template>
<script>
  import jQuery from 'jquery'

  export default {
    data () {
      return {}
    },
    props: {
      disabled: false
    },
    created () {
      if (!this.disabled) {
        setInterval(() => {
          console.log(this.$el)
          jQuery(this.$el).fadeToggle()
        }, 3000)
      }
    }
  }
</script>