<template>
  <div class="input-selector-components">
    <font-family-selector class="selector"></font-family-selector>
    <font-size-selector class="selector"></font-size-selector>
  </div>
</template>

<script>
import FontFamilySelector from "./font-family";
import FontSizeSelector from "./font-size";

export default {
  components: {
    FontFamilySelector,
    FontSizeSelector
  }
};
</script>

<style lang="scss" scoped>
.input-selector-components {
  text-align: center;
  background-color: #333;
}
.selector {
  margin: 50px 0;
}
</style>
