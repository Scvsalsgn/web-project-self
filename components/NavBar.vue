<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary py-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
          <li class="nav-item mx-4">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>

          <li class="nav-item dropdown mx-4">
            <!-- <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Attractions
            </a> -->
            <router-link to="/attractions" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">Attractions</router-link>
            <ul class="dropdown-menu">
              <router-link to="/attractions/action" class="dropdown-item">Action</router-link>
              <router-link to="/attractions/another-action" class="dropdown-item">Another action</router-link>
              <router-link to="/attractions/something-else" class="dropdown-item">Something else here</router-link>
            </ul>
          </li>

          <li class="nav-item dropdown mx-4">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Travel Guides
            </a>
            <ul class="dropdown-menu">
              <router-link to="/guides/action" class="dropdown-item">Action</router-link>
              <router-link to="/guides/another-action" class="dropdown-item">Another action</router-link>
              <router-link to="/guides/something-else" class="dropdown-item">Something else here</router-link>
            </ul>
          </li>

          <li class="nav-item mx-4">
            <router-link to="/community" class="nav-link">Community</router-link>
          </li>
          <li class="nav-item mx-4">
            <router-link to="/service" class="nav-link">Service</router-link>
          </li>
        </ul>

        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>

        <router-link to="/login" class="btn btn-outline-primary ms-5">Login</router-link>
        <router-link to="/register" class="btn btn-primary ms-2">Register</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>