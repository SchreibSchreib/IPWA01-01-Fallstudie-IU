<template>
  <div class="row justify-content-center pb-3">
    <div class="card p-2 col-lg-6 col-md-8 col-sm-10 col-11">
      <div class="justify-content-center">
        <img
          src="@/assets/PickUp.png"
          v-if="donationMode === 'TakeUp'"
          class="w-50"
          alt="..."
        />
        <img
          src="@/assets/DropOff.png"
          v-if="donationMode === 'DropOff'"
          class="w-50"
          alt="..."
        />
      </div>
      <SwitchRegistrationModeButton
        @mode-change="handleModeChange"
      ></SwitchRegistrationModeButton>
      <h5 class="card-title">Ihre Daten</h5>
      <div class="row">
        <div class="col">
          <div class="align-items-center justify-content-center">
            <input
              type="text"
              class="form-control rounded-5"
              id="firstName"
              placeholder="Vorname"
              v-model="childCustomerInformation.firstName"
              required
            />
          </div>
        </div>
        <div class="col">
          <div class="align-items-center justify-content-center">
            <input
              type="text"
              class="form-control rounded-5"
              id="lastName"
              placeholder="Nachname"
              v-model="childCustomerInformation.lastName"
              required
            />
          </div>
        </div>
        <div class="row m-0 p-0 pt-3 pb-3">
          <div class="col">
            <div class="align-items-center justify-content-center">
              <input
                type="email"
                class="form-control rounded-5"
                id="email"
                placeholder="Email"
                v-model="childCustomerInformation.email"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div v-if="donationMode === 'TakeUp'">
        <div class="row">
          <div class="col-4">
            <div class="align-items-center justify-content-center">
              <input
                type="number"
                class="form-control rounded-5"
                id="zipCode"
                placeholder="PLZ"
                v-model="childCustomerInformation.zipCode"
                @input="validateZipCode"
                :class="{ 'is-invalid': !isValidZipCode }"
                required
              />
              <div v-if="!isValidZipCode" class="invalid-feedback">
                Die Postleitzahl muss 5 Ziffern haben und mit "39" beginnen.
              </div>
            </div>
          </div>
          <div class="col-8">
            <div class="align-items-center justify-content-center">
              <input
                type="text"
                class="form-control rounded-5"
                id="city"
                placeholder="Stadt"
                v-model="childCustomerInformation.city"
                required
              />
            </div>
          </div>
          <div class="row m-0 p-0 pt-3 pb-3">
            <div class="col-9">
              <div class="align-items-center justify-content-center">
                <input
                  type="text"
                  class="form-control rounded-5"
                  id="street"
                  placeholder="Straße"
                  v-model="childCustomerInformation.street"
                  required
                />
              </div>
            </div>
            <div class="col-3">
              <div class="align-items-center justify-content-center">
                <input
                  type="text"
                  class="form-control rounded-5"
                  id="streetNumber"
                  placeholder="Nr."
                  v-model="childCustomerInformation.streetNumber"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="row m-0 p-0 pb-3">
          <div class="col">
            <div class="align-items-center justify-content-center">
              <select
                id="crisisArea"
                class="form-select rounded-5"
                v-model="childCustomerInformation.crisisArea"
                required
              >
                <option value="" selected disabled>Krisengebiet wählen</option>
                <option value="der Ukraine">Ukraine</option>
                <option value="Syrien">Syrien</option>
                <option value="Israel">Israel</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Mali">Mali</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-3">
        <AddOrRemoveDonationButtons @add="addDonation" @remove="removeDonation" />
      </div>
    </div>
  </div>
</template>

<script>
import AddOrRemoveDonationButtons from "./RegistrationAddOrRemoveDonationButtons.vue";
import SwitchRegistrationModeButton from "./RegistrationSwitchRegistrationModeButton.vue";

export default {
  name: "CustomerInformationMask",
  components: {
    AddOrRemoveDonationButtons,
    SwitchRegistrationModeButton,
  },
  props: {
    donationMode: {
      type: String,
      required: true,
    },
    addDonation: {
      type: Function,
      required: true,
    },
    removeDonation: {
      type: Function,
      required: true,
    },
    customerInformation: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      childCustomerInformation: {
        firstName: this.customerInformation.firstName,
        lastName: this.customerInformation.lastName,
        email: this.customerInformation.email,
        zipCode: this.customerInformation.zipCode,
        city: this.customerInformation.city,
        street: this.customerInformation.street,
        streetNumber: this.customerInformation.streetNumber,
        crisisArea: this.customerInformation.crisisArea,
      },
      isValidZipCode: true,
    };
  },
  watch: {
    childCustomerInformation: {
      deep: true,
      handler(newVal) {
        this.$emit("update:customerInformation", newVal);
      },
    },
  },
  methods: {
    handleModeChange(newMode) {
      this.$emit("mode-change", newMode);
    },
    validateZipCode() {
      const enteredZipCode = this.childCustomerInformation.zipCode.toString();
      if (!(enteredZipCode.length === 5 && enteredZipCode.substring(0, 2) === "39")) {
        this.isValidZipCode = false;
      } else {
        this.isValidZipCode = true;
      }
    },
  },
};
</script>
