<template>
  <div class="input-selector nav-item dropdown no-arrow d-inline-block">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      id="userDropdown"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <span class="mr-2 d-lg-inline text-gray-600 small">Get this design...</span>
    </a>
    <!-- Dropdown -->
    <div
      class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
      aria-labelledby="userDropdown"
    >
      <div class="menu-list">
        <a href="javascript:void(0)" class="btn menu-list__item">
          <img src="../../images/download.svg" alt="Download" />
          Download
        </a>
        <a href="javascript:void(0)" class="btn menu-list__item">
          <img src="../../images/print.svg" alt="Print" />
          Order to print
        </a>
        <a href="javascript:void(0)" class="btn menu-list__item">
          <img src="../../images/publish.svg" alt="Publish" />
          Publish online
        </a>
        <a href="javascript:void(0)" class="btn menu-list__item">
          <img src="../../images/email.svg" alt="Send mail" />
          Send to multi-recipients
        </a>
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
    padding: 12px;
    overflow: hidden;
    background-color: #333;
    color: #fff;
  }

  .menu-list {
    &__item {
      color: #fff;
      height: 100%;
      display: block;
      text-align: left;

      &:hover,
      &:visited {
        background-color: #444;
      }

      & > img {
        padding: 0 4px 3px 4px;
      }
    }
  }

  &.no-arrow {
    & > .dropdown-toggle::after {
      display: none;
    }
  }
}
</style>