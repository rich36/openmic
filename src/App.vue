<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/Help">Help</router-link>
    <router-link to="/Contact">Contact</router-link>
    <div id="app">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
