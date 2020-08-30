<template
  ><v-navigation-drawer
    v-model="showList"
    class="pt-14"
    style="z-index: 1"
    fixed
    hide-overlay
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
  }
};
</script>
