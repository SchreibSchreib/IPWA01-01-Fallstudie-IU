<template>
    <nav class="navbar navbar-expand-sm">
      <RouterLink class="navbar-brand mx-2" to="/">
        <img src="@/assets/Logo.png" class="img-fluid" style="width: 35px" />
        WärmeSpenden
      </RouterLink>
      <button
        class="navbar-toggler justify-content-left mx-3"
        type="button"
        @click="toggleNavArrow"
        data-bs-toggle="collapse"
        data-bs-target="#navBarObjects"
        aria-controls="navBarObjects"
      >
        <i :class="isNavOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
      </button>

      <div class="collapse navbar-collapse" id="navBarObjects">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item active">
            <RouterLink class="nav-link mx-2 fs-5" to="/registration"> Spende anmelden </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    toggleNavArrow() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
};
</script>

<style scoped>
.navbar {
  background: linear-gradient(90deg, #ffd3a5, #eb0839);
}
</style>
