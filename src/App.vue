<template>
    <div id="app">
        <!--
        <img src="./assets/logo.png">
        -->
        <router-view/>
    </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
    /*
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
*/

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
