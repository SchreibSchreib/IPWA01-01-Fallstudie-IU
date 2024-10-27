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
    const donationData = JSON.parse(sessionStorage.getItem("donationData") || "{}");
    return {
      donationMode: donationData.donationMode,
      customerInformation: donationData.customerInformation,
      donations: donationData.donations,
    };
  },
  beforeRouteEnter(to, from, next) {
    const donationData = JSON.parse(sessionStorage.getItem("donationData") || "{}");
    if (donationData.donations) {
      next();
    } else {
      next({ path: "/registration" });
    }
  },
};
</script>
