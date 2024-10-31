<template>
    <RegistrationContent :donationMode="selectedMode" @mode-change="updateMode" />
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
