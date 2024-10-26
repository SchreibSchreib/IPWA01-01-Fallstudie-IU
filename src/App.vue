<template>
  <div class="d-flex flex-column min-vh-100">
    <header>
      <AppHeader class="sticky-top" />
    </header>
    <main>
      <router-view />
    </main>
    <footer class="mt-auto">
      <AppFooter />
    </footer>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style></style>
