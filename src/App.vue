<template>
  <div>
    <nav  class="navbar is-fixed-top">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item">
            <h1 class='title'>Open Mic</h1>
          </router-link>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">Home</router-link>
            <router-link to="/Performances/Find" class="navbar-item">Find Performances</router-link>
            <router-link to="/Help" class="navbar-item">Help</router-link>
            <router-link to="/Contact" class="navbar-item">Contact</router-link>
          </div>
        </div>
      </nav>
      
      <section class="section">
        <div class="container is-fluid">
          <router-view/>
        </div>
      </section>

      <footer class="footer">
        <div class="container">
          <div class="content has-text-centered">
            <p>
             &copy; 2018
            </p>
          </div>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
