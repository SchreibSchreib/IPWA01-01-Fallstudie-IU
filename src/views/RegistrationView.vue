<template>
  <div class="container">
    <div class="row text-center">
      <h2 class="pt-1 ">Registrierungsformular</h2>
      <RegistrationContent :donationMode="selectedMode" @mode-change="updateMode" />
    </div>
  </div>
</template>

<script>
import RegistrationContent from "@/components/RegistrationContent.vue";

export default {
  name: "TestView",
  components: {
    RegistrationContent,
  },
  data() {
    return {
      selectedMode: "TakeUp",
      numberOfDonations: 1,
    };
  },
  methods: {
    updateMode(newMode) {
      this.selectedMode = newMode;
    },
  },
};
</script>
