<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <h1>Components</h1>
        
        <p><router-link to="/">Home</router-link></p>
        <p><router-link to="/alert">Alerts</router-link></p>
        <p><router-link to="/badge">Badge</router-link></p>
        <p><router-link to="/breadcrumb">Breadcrumb</router-link></p>
      </div>

      <div class="col-8">
        <main>
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>