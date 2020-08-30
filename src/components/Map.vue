<template>
  <v-container fluid style="width: 100%; height: 100vh" class="pa-0 ma-0">
    <vl-map
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      style="width: 100%; height: 100%"
    >
      <vl-view
        :zoom.sync="zoom"
        :center.sync="center"
        :rotation.sync="rotation"
      ></vl-view>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <template v-for="location in locations">
        <template v-for="place in location.places">
          <vl-feature :key="place.name">
            <vl-geom-point
              :coordinates="calculateCoordinates(place.coordinates)"
            ></vl-geom-point>
          </vl-feature>
        </template>
      </template>
    </vl-map>
  </v-container>
</template>

<script>
import locations from "../locations";
import { pointFromLonLat } from "vuelayers/lib/ol-ext";

export default {
  name: "Map",
  data: () => ({
    zoom: 11,
    center: pointFromLonLat([18.62, 54.45]),
    rotation: 0,
    locations
  }),
  props: {
    selectedLocation: Object
  },
  methods: {
    calculateCoordinates(latLonPoint) {
      return pointFromLonLat(latLonPoint);
    },
    zoomAndCenter(coordinates) {
      this.zoom = 20;
      this.center = pointFromLonLat(coordinates);
    }
  }
};
</script>
