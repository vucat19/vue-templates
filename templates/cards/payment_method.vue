<template>
  <div class="payment-method">
    <a href="javascript:void(0)" class="btn d-flex justify-content-between payment-method__item">
      <span>Visa / Master Card</span>
      <img src="../../images/visa.svg" alt="Visa / Mastercard" />
    </a>
    <a href="javascript:void(0)" class="btn d-flex justify-content-between payment-method__item">
      <span>Paypal</span>
      <img src="../../images/paypal.svg" alt="Paypal" />
    </a>
    <a href="javascript:void(0)" class="btn d-flex justify-content-between payment-method__item">
      <span>Kredit</span>
      <img src="../../images/kredit.svg" alt="Kredit" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.payment-method {
  width: 395px;
  padding: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 2px;

  &__item {
    &:hover,
    &:visited {
      background-color: #f8f8f8;
    }
  }
}
</style>