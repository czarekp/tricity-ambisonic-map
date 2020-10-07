<template>
  <v-app>
    <v-app-bar style="z-index: 2" color="primary" app dark>
      <v-app-bar-nav-icon @click.stop="toggleLocationList"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-bold text-body-2 text-sm-h6">
        Ambisoniczna mapa Trójmiasta
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="showList"
      class="pt-14 d-flex flex-column justify-space-between"
      style="z-index: 1"
      fixed
      hide-overlay
      stateless
    >
      <LocationList
        :selectedLocation="selectedLocation"
        @selectedLocationChanged="onSelectedLocationChanged"
        @selectedCityChanged="onSelectedCityChanged"
      />
      <v-footer>
        <a @click="openAboutDialog" class="text-caption mb-3 text">
          O projekcie
        </a>
        <hr />
        <p class="text-caption mx-auto mb-0 text-center">
          Copyright &copy;2020
          <br />
          <a href="https://multimed.org/" target="_blank">
            Katedra Systemów Multimedialnych
          </a>
        </p>
      </v-footer>
    </v-navigation-drawer>
    <Map
      :selectedLocation="selectedLocation"
      :selectedCity="selectedCity"
      @selectedLocationChanged="onSelectedLocationChanged"
      @openInfoSheet="openInfoSheet"
    />
    <InfoSheet
      :showInfoSheet="showInfoSheet"
      :selectedLocation="selectedLocation"
      @closeInfoSheet="closeInfoSheet"
    />
    <AboutDialog
      :showDialog="showAboutDialog"
      @closeAboutDialog="closeAboutDialog"
    />
  </v-app>
</template>

<script>
import Map from "./components/Map";
import LocationList from "./components/LocationList";
import InfoSheet from "./components/InfoSheet";
import AboutDialog from "./components/AboutDialog";

export default {
  name: "App",
  data: () => ({
    showList: true,
    showInfoSheet: false,
    showAboutDialog: true,
    selectedLocation: null,
    selectedCity: { city: "" }
  }),
  methods: {
    toggleLocationList() {
      this.showList = !this.showList;
    },
    onSelectedLocationChanged(location) {
      this.selectedLocation = location;
      this.$nextTick(() => {
        if (location === null) {
          this.showInfoSheet = false;
          this.selectedCity = null;
        }
      });
    },
    onSelectedCityChanged(eventObj) {
      this.selectedLocation = null;
      this.$nextTick(() => {
        this.selectedCity = eventObj.isListActive ? eventObj.city : null;
        this.showInfoSheet = false;
      });
    },
    openInfoSheet() {
      this.showInfoSheet = true;
    },
    closeInfoSheet() {
      this.showInfoSheet = false;
    },
    openAboutDialog() {
      this.showAboutDialog = true;
    },
    closeAboutDialog() {
      this.showAboutDialog = false;
    }
  },
  components: {
    AboutDialog,
    InfoSheet,
    Map,
    LocationList
  }
};
</script>

<style>
a {
  text-decoration: none;
}
html,
body {
  overflow: hidden;
}
.v-navigation-drawer__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
