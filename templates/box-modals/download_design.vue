<template>
  <div class="box-modal">
    <div class="box-modal__header">
      <p class="title m-0">Download this design</p>
      <a href="javascript:void(0)" class="btn btn-close p-0">
        <img src="../../images/close.svg" alt="close" />
      </a>
    </div>
    <div class="box-modal__content">
      <form>
        <div class="form-group">
          <select class="form-control">
            <option selected>JPG</option>
            <option value="1">PNG</option>
            <option value="2">GIF</option>
          </select>
        </div>

        <div class="form-group">
          <select class="form-control">
            <option selected>All pages</option>
            <option value="1">One page</option>
            <option value="2">Two pages</option>
          </select>
        </div>

        <div class="bill">
          <ul>
            <li class="d-flex justify-content-between">
              <span class="name">Template price</span>
              <span class="price">$ 1.25</span>
            </li>
            <li class="mt-2">Paid Elements</li>
            <li class="d-flex justify-content-between">
              <span class="name">2</span>
              <span class="price">$ 1.00</span>
            </li>
            <li>
              <hr />
            </li>
            <li class="d-flex justify-content-between">
              <span class="name">Subtotal</span>
              <span class="price">$ 2.25</span>
            </li>
          </ul>
        </div>

        <div class="form-group d-flex">
          <input type="text" class="form-control" placeholder="COUPON" />
          <button class="btn btn-coupon-apply">Apply</button>
        </div>

        <ul>
          <li class="d-flex justify-content-between">
            <span class="name"></span>
            <span class="price">- $ 1.25</span>
          </li>
          <li class="d-flex justify-content-between">
            <span class="name">TOTAL</span>
            <span class="price">$ 1.00</span>
          </li>
        </ul>

        <div class="form-group">
          <select class="form-control">
            <option selected>Master Card</option>
            <option value="1">Kredit</option>
            <option value="2">Paypal</option>
          </select>
        </div>
        <button type="submit" class="btn btn-submit">Download</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box-modal {
  width: 395px;
  color: #eee;

  border-radius: 2px;
  background-color: #333;
  overflow: hidden;

  &__header {
    height: 50px;
    padding: 0 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #222;
  }

  &__content {
    padding: 16px 24px;

    .form-control {
      background-color: #333;
      border-color: #999;
      color: #999;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  hr {
    border-top: 1px solid #eee;
    margin-bottom: 0.5rem;
  }

  .btn-coupon-apply {
    margin-left: 8px;
    padding-left: 36px;
    padding-right: 36px;

    text-transform: uppercase;
    color: #fff;

    background-color: #f89821;
  }

  .btn-submit {
    width: 100%;

    text-transform: uppercase;
    color: #fff;

    background-color: #f89821;
  }
}
</style>