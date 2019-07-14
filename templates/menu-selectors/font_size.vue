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
      <span class="mr-2 d-lg-inline text-gray-600 small">17px</span>
    </a>
    <!-- Dropdown -->
    <div
      class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
      aria-labelledby="userDropdown"
    >
      <input class="form-control" type="text" placeholder="17" />

      <div class="font-wrapper">
        <div class="selector-list my-2">
          <a href="javascript:void(0)" class="btn selector-list__item">11</a>
          <a href="javascript:void(0)" class="btn selector-list__item">12</a>
          <a href="javascript:void(0)" class="btn selector-list__item">13</a>
          <a href="javascript:void(0)" class="btn selector-list__item">14</a>
          <a href="javascript:void(0)" class="btn selector-list__item">15</a>
          <a href="javascript:void(0)" class="btn selector-list__item">16</a>
          <a href="javascript:void(0)" class="btn selector-list__item">17</a>
          <a href="javascript:void(0)" class="btn selector-list__item">18</a>
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
    padding: 12px;
    overflow: hidden;
    min-width: auto;
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
    margin: 0 -12px;
  }

  .selector-list {
    &__item {
      width: 100%;
    }
  }

  &.no-arrow {
    & > .dropdown-toggle::after {
      display: none;
    }
  }

  .form-control {
    height: 36px;
  }
}
</style>