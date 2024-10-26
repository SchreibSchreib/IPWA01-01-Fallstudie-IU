<template>
  <div class="container-fluid fs-5">
    <div class="row text-center">
      <RouterLink
        type="button"
        class="btn btn-secondary border-bottom-0 border-dark btn-lg m-0 rounded-0 d-sm-none"
        to="/"
        >Twitter
        <i class="bi bi-twitter"></i>
      </RouterLink>
      <RouterLink
        type="button"
        class="btn btn-secondary border-bottom-0 border-dark btn-lg m-0 rounded-0 d-sm-none"
        to="/"
      >
        Facebook
        <i class="bi bi-facebook"></i>
      </RouterLink>
      <RouterLink
        type="button"
        class="btn btn-secondary border-bottom-0 border-dark btn-lg m-0 rounded-0 d-sm-none"
        to="/"
      >
        Impressum
      </RouterLink>
      <RouterLink
        type="button"
        class="btn btn-secondary border border-dark btn-lg m-0 rounded-0 d-sm-none"
        to="/"
      >
        Datenschutz
      </RouterLink>
      <div class="col-sm p-0 d-none d-sm-block">
        <RouterLink class="nav-link" to="/"
          >Twitter
          <i class="bi bi-twitter"></i>
        </RouterLink>
        <RouterLink class="nav-link" to="/"
          >Facebook
          <i class="bi bi-facebook"></i>
        </RouterLink>
      </div>
      <div class="col-sm p-0 d-none d-sm-block">
        <RouterLink class="nav-link" to="/"> Impressum </RouterLink>
        <RouterLink class="nav-link" to="/"> Datenschutz </RouterLink>
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center p-2">
      <img src="@/assets/Logo.png" alt="Logo" class="me-2" style="width: 50px" />
      WärmeSpenden e.V.
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style>
footer {
  background: linear-gradient(90deg, #ffd3a5, #eb0839);
}
</style>
