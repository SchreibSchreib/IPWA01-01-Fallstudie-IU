<template>
  <div class="row justify-content-center pb-3">
    <div class="card rounded-4 p-2 col-lg-6 col-md-8 col-10">
      <div>
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
      <SwitchRegistrationModeButton @mode-change="handleModeChange" />
      <h4 class="card-title pb-1">Ihre Daten</h4>
      <div class="row">
        <div class="col">
          <input
            type="text"
            class="form-control rounded-5"
            id="firstName"
            placeholder="Vorname"
            @input="updateField('firstName', $event.target.value)"
            required
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control rounded-5"
            id="lastName"
            placeholder="Nachname"
            @input="updateField('lastName', $event.target.value)"
            required
          />
        </div>
        <div class="row m-0 p-0 pt-3 pb-3">
          <div class="col">
            <input
              type="email"
              class="form-control rounded-5"
              id="email"
              placeholder="Email"
              @input="updateField('email', $event.target.value)"
              required
            />
          </div>
        </div>
      </div>
      <div v-if="donationMode === 'TakeUp'">
        <div class="row">
          <div class="col-4">
            <input
              type="number"
              class="form-control rounded-5"
              id="zipCode"
              placeholder="PLZ"
              @input="
                updateField('zipCode', $event.target.value);
                validateZipCode();
              "
              :class="{ 'is-invalid': !isValidZipCode }"
              required
            />
            <div v-if="!isValidZipCode" class="invalid-feedback">
              Die Postleitzahl muss 5 Ziffern haben und mit "39" beginnen.
            </div>
          </div>
          <div class="col-8">
            <input
              type="text"
              class="form-control rounded-5"
              id="city"
              placeholder="Stadt"
              @input="updateField('city', $event.target.value)"
              required
            />
          </div>
          <div class="row m-0 p-0 pt-3 pb-3">
            <div class="col-9">
              <input
                type="text"
                class="form-control rounded-5"
                id="street"
                placeholder="Straße"
                @input="updateField('street', $event.target.value)"
                required
              />
            </div>
            <div class="col-3">
              <input
                type="text"
                class="form-control rounded-5"
                id="streetNumber"
                placeholder="Nr."
                @input="updateField('streetNumber', $event.target.value)"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="row m-0 p-0 pb-3">
          <div class="col">
            <select
              id="crisisArea"
              class="form-select rounded-5"
              @input="updateField('crisisArea', $event.target.value)"
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
      <AddOrRemoveDonationButtons @update:donation-mask="updateDonationMask" />
    </div>
  </div>
</template>

<script>
import AddOrRemoveDonationButtons from "./RegistrationAddOrRemoveDonationButtons.vue";
import SwitchRegistrationModeButton from "./RegistrationSwitchRegistrationModeButton.vue";

export default {
  name: "CustomerInformationMask",
  props: {
    customerInformation: {
      type: Object,
      required: true,
    },
    donationMode: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isValidZipCode: true,
    };
  },
  created() {
    this.preLoadImages();
  },
  methods: {
    updateField(field, value) {
      this.$emit("update:customer-information", {
        [field]: value,
      });
    },
    handleModeChange(newMode) {
      this.$emit("mode-change", newMode);
    },
    updateDonationMask(donationMaskData) {
      this.$emit("update:donation-mask", donationMaskData);
    },
    //Preload images to reduce latency
    //after first image switch
    preLoadImages() {
      const images = [require("@/assets/PickUp.png"), require("@/assets/DropOff.png")];
      for (const imagePath of images) {
        const image = new Image();
        image.src = imagePath;
      }
    },
    //Boolean for zipcode validation
    validateZipCode() {
      const enteredZipCode = this.customerInformation.zipCode.toString();
      this.isValidZipCode =
        enteredZipCode.length === 5 && enteredZipCode.startsWith("39");
    },
  },
  components: {
    AddOrRemoveDonationButtons,
    SwitchRegistrationModeButton,
  },
};
</script>
