<template>
  <div class="toolbox photo-editor">
    <div class="d-flex justify-content-between">
      <div class="toolbox__heading">
        <h3 class="toolbox__title">Edit Photos</h3>
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

    <div class="d-flex mt-2">
      <img class="toolbox__avatar" src="../../images/photo.png" alt="avatar" />
      <div class="toolbox__profile">
        <span>Kyky’s portrait</span>
        <button class="btn btn-link d-block">Change this photo</button>
      </div>
    </div>

    <div class="tool-menu mt-4 mb-3">
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