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
      <v-subheader class="text-subtitle-1 font-weight-bold">
        Lokalizacje
      </v-subheader>
      <v-list-group v-for="(location, l) in locations" :key="l">
        <template v-slot:activator>
          <v-list-item-title class="font-weight-bold">
            {{ location.city }}
          </v-list-item-title>
        </template>
        <v-list-item
          v-for="(place, p) in location.places"
          :key="p"
          @click="selectLocation(place)"
          class="text-subtitle-2 font-weight-regular"
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
    locations
  }),
  props: {
    showList: Boolean
  },
  methods: {
    selectLocation(location) {
      this.$emit("selectedLocationChanged", location);
    }
  }
};
</script>
