<template>
  <v-container fluid style="width: 100%; height: 100vh" class="pa-0 ma-0">
    <vl-map
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      style="width: 100%; height: 100%"
      @click="compareClickPointWithAllLocationsCoordinates($event)"
    >
      <vl-view
        :zoom.sync="zoom"
        :center.sync="center"
        :rotation.sync="rotation"
        ref="mapView"
      ></vl-view>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <template v-for="location in locations">
        <template v-for="place in location.places">
          <vl-feature :key="place.name">
            <vl-geom-circle
              :coordinates="calculateCoordinates(place.coordinates)"
              :radius="circleRadius"
            ></vl-geom-circle>
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
    circleRadius: 350,
    locations
  }),
  props: {
    selectedLocation: Object
  },
  watch: {
    selectedLocation: {
      handler(newLoc) {
        if (newLoc !== null) {
          this.$refs.mapView.animate(
            { zoom: 17 },
            { center: this.calculateNewCenter(newLoc.coordinates) }
          );
        }
      }
    }
  },
  methods: {
    calculateCoordinates(latLonPoint) {
      return pointFromLonLat(latLonPoint);
    },
    calculateNewCenter(latLonPoint) {
      const coordinates = this.calculateCoordinates(latLonPoint);
      coordinates[0] -= 100;
      coordinates[1] -= 50;
      return coordinates;
    },
    compareClickPointWithAllLocationsCoordinates(event) {
      const clickPoint = event.coordinate;
      let clickedLocation = null;
      locations.forEach(city => {
        city.places.forEach(place => {
          const placePoint = this.calculateCoordinates(place.coordinates);
          if (
            clickPoint[0] > placePoint[0] - this.circleRadius &&
            clickPoint[0] < placePoint[0] + this.circleRadius &&
            clickPoint[1] > placePoint[1] - this.circleRadius &&
            clickPoint[1] < placePoint[1] + this.circleRadius
          )
            clickedLocation = place;
        });
      });
      this.$emit("selectedLocationChanged", clickedLocation);
    }
  }
};
</script>
