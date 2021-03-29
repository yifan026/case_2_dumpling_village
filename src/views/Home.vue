<template>

    <div class="logo">

        <img alt="logo" src="../assets/logo.jpg"/>
    </div>

</template>

<script>
  export default {
    name: 'home',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .logo {
        padding: 0px 10px 10px 10px;
    }
</style>
