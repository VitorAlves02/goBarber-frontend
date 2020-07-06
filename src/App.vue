<template>
  <v-app id="inspire">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>

.theme--light.v-input,
.theme--light.v-input input,
.theme--light.v-input textarea {
  color: white !important;
}

::selection {
    color: white !important;
}

#inspire {
  background: none;
  background: linear-gradient(-90deg, #7159c1, #ab59c1)
}

</style>