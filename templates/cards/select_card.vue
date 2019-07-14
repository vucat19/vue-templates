<template>
  <div class="select-card">
    <img src="../../images/visa.svg" alt="Visa" />
    <form class="form mt-3">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Your name on card" />
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Card number" />
      </div>
      <div class="form-row">
        <div class="col">
          <input type="text" class="form-control" placeholder="Expiry date" />
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Security code" />
        </div>
      </div>
      <button type="submit" class="btn btn-submit">Apply</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.select-card {
  width: 330px;
  padding: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
}

.btn-submit {
  width: 100%;
  margin: 20px 0 8px 0;

  color: #fff;
  text-transform: uppercase;

  background-color: #f89821;
}
</style>