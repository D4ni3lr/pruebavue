<template src="./SemanticShowcase.html"></template>
<script>
  export default {
    data () {
      return {}
    },
    mounted () {
      window.jQuery('.right.menu.open').on('click', function (e) {
        e.preventDefault()
        window.jQuery('.ui.vertical.menu').toggle()
      })
      window.jQuery('.ui.dropdown').dropdown()
    }
  }
</script>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    body{
        font-family: 'Open Sans', sans-serif;
        margin-bottom: 60px;
    }
    .ui.navbar {
        margin-top: 20px !important;
    }
    .padding-reset{
        padding: 0px !important;
    }
    .ui.message{
        padding: 40px !important;
    }
    @media (max-width: 767px) {
        .ui.inverted.navbar{
        }
    }
    .ui.vertical.menu{
        margin-top: -15px !important;
        width: 100%;
        display: none;
    }
</style>