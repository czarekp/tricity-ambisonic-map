<template>
  <v-navigation-drawer
    v-model="showList"
    class="pt-14"
    style="z-index: 1"
    fixed
    hide-overlay
    stateless
  >
    <v-list>
      <v-subheader class="text-subtitle-1 font-weight-bold black--text">
        Lokalizacje
      </v-subheader>
      <v-list-group
        v-for="(location, l) in locations"
        :key="l"
        @change="selectCity(location)"
        v-model="groupList[location.cityName]"
      >
        <template v-slot:activator>
          <v-list-item-title class="font-weight-bold primary--text">
            {{ location.cityName }}
          </v-list-item-title>
        </template>
        <v-list-item
          v-for="(place, p) in location.places"
          :key="p"
          @click="selectLocation(place)"
          :class="[
            isPlaceSelected(place) ? 'font-weight-bold' : 'font-weight-regular',
            'text-subtitle-2'
          ]"
        >
          {{ place.name }}
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import locations from "../locations";

export default {
  name: "LocationList",
  data: () => ({
    locations,
    groupList: {
      Gdynia: false,
      Sopot: false,
      Gdańsk: false
    }
  }),
  props: {
    showList: Boolean,
    selectedLocation: Object
  },
  watch: {
    selectedLocation: {
      handler(newValue) {
        locations.forEach(city => {
          this.groupList[city.cityName] = city.places.includes(newValue);
        });
      }
    }
  },
  methods: {
    selectLocation(location) {
      this.$emit("selectedLocationChanged", location);
    },
    selectCity(city) {
      this.$emit("selectedCityChanged", {
        city,
        isListActive: !this.groupList[city.cityName]
      });
    },
    isPlaceSelected(place) {
      return this.selectedLocation && place.name === this.selectedLocation.name;
    }
  }
};
</script>
