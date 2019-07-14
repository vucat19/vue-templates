<template>
  <div class="input-selector-components">
    <font-family-selector class="selector"></font-family-selector>
    <font-size-selector class="selector"></font-size-selector>
    <menu-link class="selector"></menu-link>
  </div>
</template>

<script>
import FontFamilySelector from "./font-family";
import FontSizeSelector from "./font-size";
import MenuLink from "./menu-link";

export default {
  components: {
    FontFamilySelector,
    FontSizeSelector,
    MenuLink
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
