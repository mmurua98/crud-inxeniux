<template>

  <nav class="navbar navbar-expand navbar-dark bg-dark d-flex justify-content-center">
      <div class="nav navbar-nav">
          <router-link to="/" class="nav-link">Usuarios</router-link>
          <router-link to="/create" class="nav-link">Crear</router-link>
      </div>
  </nav>
  <br>

  <router-view/>
</template>

<style scoped>
.navbar-dark .navbar-nav .nav-link {
    color: white;
}
a {
  font-size: 20px;
  box-shadow: inset 0 0 0 0 #54b3d6;
  color: #54b3d6;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
}
a:hover {
  box-shadow: inset 100px 0 0 0 #54b3d6;
  color: white;
}
</style>