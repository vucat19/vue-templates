<template>
  <div class="input-selector nav-item dropdown d-inline-block">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      id="userDropdown"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <span class="mr-2 d-lg-inline text-gray-600 small">Rasa Racing Sans.. Radley</span>
    </a>
    <!-- Dropdown -->
    <div
      class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
      aria-labelledby="userDropdown"
    >
      <input class="input-selector__value-box" type="text" placeholder="Find font here" />

      <div class="font-wrapper">
        <div class="selector-list my-2">
          <p class="font-weight-bold">Your font</p>
          <a href="javascript:void(0)" class="btn selector-list__item">Rasa</a>
          <a href="javascript:void(0)" class="btn selector-list__item">Racing Sans</a>
          <a href="javascript:void(0)" class="btn selector-list__item">Radley</a>
        </div>

        <ul class="selector-list my-2">
          <p class="font-weight-bold">System font</p>
          <a href="javascript:void(0)" class="btn selector-list__item">Rasa</a>
          <a href="javascript:void(0)" class="btn selector-list__item">Racing Sans</a>
          <a href="javascript:void(0)" class="btn selector-list__item">Radley</a>
          <a href="javascript:void(0)" class="btn selector-list__item">Rasa</a>
          <a href="javascript:void(0)" class="btn selector-list__item">Racing Sans</a>
          <a href="javascript:void(0)" class="btn selector-list__item">Radley</a>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-selector {
  & > .dropdown-toggle {
    color: #fff;
  }

  & > .dropdown-menu {
    width: 320px;
    padding: 12px 24px;
    overflow: hidden;
  }

  &__value-box {
    width: 100%;
    border-radius: 2px;
    height: 36px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding-left: 10px;
  }

  .font-wrapper {
    height: 340px;
    overflow: auto;
    margin: 0 -24px;
    padding: 0 24px;
  }

  .selector-list {
    &__item {
      padding: 6px 24px;
      transform: translateX(-24px);
      width: calc(100% + 24px);
      text-align: left;
    }
  }

  &.no-arrow {
    & > .dropdown-toggle::after {
      display: none;
    }
  }
}
</style>