<template>
  <div id="app" style="max-width: 7.5rem;margin: auto;">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    text-decoration: none !important;
    list-style: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
  }

  input[type="number"] {
    appearance: textfield;
  }

  button {
    border-radius: 0;
  }
  html,body{
    position: relative;
    overflow: hidden;
  }
</style>
