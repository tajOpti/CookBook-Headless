<!--
    Renders a button to edit a property in OPE. Useful when the property to
    edit isn't directly visible (such as RecipeType on the RecipeDetailsPage
    component), or when the OPE overlays would be overlapping
    (e.g. the background image in the Hero component).
-->

<template>
  <button v-if="isEditable" v-epi-edit="propertyName" type="button">
    Edit property: {{ propertyName }}
  </button>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ['propertyName'],
  computed: mapState({
    isEditable: (state) => state.epiContext.isEditable,
  }),
};
</script>

<style scoped>
button {
  background: gray;
  color: white;
}
</style>
