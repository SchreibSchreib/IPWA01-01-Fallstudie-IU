<template>
  <div>
    <ConfirmRegistrationComponent
      :donation-mode="donationMode"
      :customer-information="customerInformation"
      :donations="donations"
    />
  </div>
</template>

<script>
import ConfirmRegistrationComponent from "@/components/ConfirmRegistrationComponent.vue";

export default {
  name: "ConfirmRegistation",
  components: {
    ConfirmRegistrationComponent,
  },
  data() {
    return {
      donationMode: this.$route.query.donationMode,
      customerInformation: JSON.parse(this.$route.query.customerInformation || "{}"),
      donations: JSON.parse(this.$route.query.donations || "[]"),
    };
  },
};
</script>
