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
import ConfirmRegistrationContent from "@/components/ConfirmRegistrationContent.vue";

//Declared outside of the component to make
//method available for "beforeRouteEnter"
function getStoredDonationData() {
  return JSON.parse(sessionStorage.getItem("donationData") || "{}");
}

export default {
  name: "ConfirmRegistation",
  data() {
    const donationData = getStoredDonationData();
    return {
      donationMode: donationData.donationMode,
      customerInformation: donationData.customerInformation,
      donations: donationData.donations,
    };
  },
  //Looks for "storedDonationData in the current session
  //Redirects to "HomeView" if there is none
  beforeRouteEnter(to, from, next) {
    const donationData = getStoredDonationData();
    if (donationData.donations) {
      next();
    } else {
      next({ path: "/" });
    }
  },
  components: {
    ConfirmRegistrationComponent: ConfirmRegistrationContent,
  },
};
</script>
