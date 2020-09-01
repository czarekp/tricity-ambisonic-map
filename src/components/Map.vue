<template>
  <v-container fluid style="width: 100%; height: 100vh" class="pa-0 ma-0">
    <vl-map
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      style="width: 100%; height: 100%"
      @click="onMapClickHandler($event)"
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

      <vl-layer-vector>
        <template v-for="location in locations">
          <template v-for="place in location.places">
            <vl-feature :key="place.name" :id="place.name">
              <vl-geom-point
                :coordinates="calculateCoordinates(place.coordinates)"
              ></vl-geom-point>
              <vl-style-box>
                <vl-style-icon
                  :anchor="[32, 64]"
                  anchor-x-units="pixels"
                  anchor-y-units="pixels"
                  src="../assets/marker.png"
                  :scale="0.6"
                ></vl-style-icon>
              </vl-style-box>
            </vl-feature>
          </template>
        </template>
      </vl-layer-vector>
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
    center: pointFromLonLat([18.55, 54.47]),
    rotation: 0,
    locations
  }),
  props: {
    selectedLocation: Object
  },
  watch: {
    selectedLocation: {
      handler(newLoc) {
        const animation = newLoc
          ? {
              zoom: 17,
              center: this.calculateNewCenter(newLoc.coordinates)
            }
          : {
              zoom: 11,
              center: pointFromLonLat([18.55, 54.47])
            };
        this.$refs.mapView.animate(animation);
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
    onMapClickHandler(event) {
      const feature = event.target.forEachFeatureAtPixel(
        event.pixel,
        feature => feature
      );
      if (feature) {
        let clickedLocation = null;
        locations.forEach(city => {
          city.places.forEach(place => {
            if (place.name === feature.id_) {
              clickedLocation = place;
            }
          });
        });
        this.$emit("selectedLocationChanged", clickedLocation);
      }
    }
  }
};
</script>
