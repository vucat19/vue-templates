<template>
  <div class="toolbox text-editor">
    <div class="d-flex justify-content-between">
      <div class="toolbox__heading">
        <h3 class="toolbox__title">Edit Text</h3>
      </div>
      <ul class="icon-list">
        <li class="icon-list__item mr-4">
          <button class="btn">
            <img src="../../images/attachs.svg" alt="attachs" />
          </button>
        </li>
        <li class="icon-list__item mr-4">
          <button class="btn">
            <img src="../../images/copy.svg" alt="copy" />
          </button>
        </li>
        <li class="icon-list__item mr-4">
          <button class="btn">
            <img src="../../images/lock.svg" alt="lock" />
          </button>
        </li>
        <li class="icon-list__item mr-2">
          <button class="btn">
            <img src="../../images/trash.svg" alt="trash" />
          </button>
        </li>
      </ul>
    </div>

    <input type="text" class="toolbox__input" placeholder="BIRTHDAY'S INVITATION" />

    <div class="tool-menu mt-3">
      <ul class="icon-list d-flex justify-content-between">
        <li class="icon-list__item d-flex align-items-end">
          <button class="btn">
            <img src="../../images/font_family.svg" alt="font_family" />
          </button>
          <select class="toolbox__select">
            <option selected>Serena Anna...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </li>
        <li class="icon-list__item d-flex align-items-end">
          <button class="btn">
            <img src="../../images/font_size.svg" alt="font_size" />
          </button>
          <select class="toolbox__select">
            <option selected>17</option>
            <option value="1">16</option>
            <option value="2">15</option>
            <option value="3">14</option>
          </select>
        </li>
        <li class="icon-list__item d-flex align-items-end">
          <button class="btn">
            <img src="../../images/align_horizontal.svg" alt="align_horizontal" />
          </button>
          <span>100%</span>
        </li>
        <li class="icon-list__item d-flex align-items-end">
          <button class="btn">
            <img src="../../images/align_vertical.svg" alt="align_vertical" />
          </button>
          <span>0%</span>
        </li>
      </ul>
    </div>

    <div class="tool-menu my-3">
      <ul class="icon-list d-flex justify-content-between">
        <li class="icon-list__item">
          <button class="btn">
            <img src="../../images/rotate_vertical.svg" alt="rotate_horizontal" />
          </button>
        </li>
        <li class="icon-list__item">
          <button class="btn">
            <img src="../../images/rotate_horizontal.svg" alt="rotate_horizontal" />
          </button>
        </li>
        <li class="icon-list__item">
          <button class="btn">
            <img src="../../images/drop.svg" alt="drop" />
          </button>
        </li>
        <li class="icon-list__item">
          <button class="btn">
            <img src="../../images/align_center.svg" alt="align_center" />
          </button>
        </li>
        <li class="icon-list__item">
          <button class="btn">
            <img src="../../images/up.svg" alt="up" />
          </button>
        </li>
        <li class="icon-list__item">
          <button class="btn">
            <img src="../../images/transparency.svg" alt="transparency" />
          </button>
        </li>
        <li class="icon-list__item">
          <button class="btn">
            <img src="../../images/30deg.svg" alt="30deg" />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>