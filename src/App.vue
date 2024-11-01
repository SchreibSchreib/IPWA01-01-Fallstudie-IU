<template>
  <div class="d-flex flex-column min-vh-100">
    <header class="sticky-top">
      <AppHeader />
    </header>
    <main>
      <div class="container">
        <router-view />
      </div>
    </main>
    <footer class="mt-auto">
      <AppFooter />
    </footer>
  </div>
</template>

<script>
import AppHeader from "@/components/TheAppHeader.vue";
import AppFooter from "./components/TheAppFooter.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style></style>
