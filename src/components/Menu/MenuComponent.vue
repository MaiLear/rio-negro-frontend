<template>
<nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
          <div class=" rounded-cirle ms-4" style="width: 5rem; height: 5rem;">
              <img class="img-fluid" src="/img/icono.png" alt="icono">
          </div>
      </a>
    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav d-flex gap-1 opacity-75 fw-bold list-unstyled me-4">
            <li class="nav-item bg-light  px-4 py-2 rounded"><RouterLink :to="{name:'home'}" class="nav-link">INICIO</RouterLink></li>
            <li class="nav-item bg-light  px-4 py-2 rounded"><RouterLink :to="{name:'experience'}" class="nav-link">EXPERIENCIAS</RouterLink></li>
            <li class="nav-item bg-light  px-4 py-2 rounded"><RouterLink to="" class="nav-link">CONTACTOS</RouterLink></li>
        </ul>
    </div>
  </div>
</nav>
    <!-- <nav class="d-flex justify-content-between pt-4 " style="max-height: 80px;">
        <div class=" rounded-cirle ms-4" style="width: 5rem; height: 5rem;">
            <img class="img-fluid" src="/img/icono.png" alt="icono">
        </div>
        <ul class="d-flex gap-1 opacity-75 fw-bold list-unstyled me-4">
            <li class="nav-item bg-light  px-4 py-2 rounded"><RouterLink :to="{name:'home'}" class="nav-link">INICIO</RouterLink></li>
            <li class="nav-item bg-light  px-4 py-2 rounded"><RouterLink :to="{name:'experience'}" class="nav-link">EXPERIENCIAS</RouterLink></li>
            <li class="nav-item bg-light  px-4 py-2 rounded"><RouterLink to="" class="nav-link">CONTACTOS</RouterLink></li>
        </ul>
    </nav> -->
</template>

<script setup>
// import {RouterLink} from 'vue-router'
</script>


<style>
</style>