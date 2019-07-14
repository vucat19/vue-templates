<template>
  <div class="templates">
    <toolbox></toolbox>
    <menu-selector></menu-selector>

    <payment-method class="my-4 mx-auto"></payment-method>
    <select-card class="my-4 mx-auto"></select-card>
    <download-design class="my-4 mx-auto"></download-design>
  </div>
</template>

<script>
import Toolbox from "./templates/toolbox";
import MenuSelector from "./templates/menu-selector";
import PaymentMethod from "./templates/cards/payment_method";
import SelectCard from "./templates/cards/select_card";
import DownloadDesign from "./templates/box-modals/download_design";

export default {
  components: {
    Toolbox,
    MenuSelector,
    PaymentMethod,
    SelectCard,
    DownloadDesign
  }
};
</script>

<style lang="scss" scoped>
</style>