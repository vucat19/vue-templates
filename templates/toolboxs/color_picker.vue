<template>
  <div class="toolbox color-picker">
    <div class="d-flex justify-content-between mt-3">
      <button class="btn toolbox__color-box"></button>
      <button class="btn toolbox__color-box"></button>
      <button class="btn toolbox__color-box"></button>
      <button class="btn toolbox__color-box"></button>
      <button class="btn toolbox__color-box"></button>
      <button class="btn toolbox__color-box"></button>
      <button class="btn toolbox__color-box"></button>
    </div>

    <div class="d-flex justify-content-between mt-3">
      <button class="btn toolbox__color-box"></button>
      <button class="btn toolbox__color-box"></button>
      <button class="btn toolbox__color-box"></button>
      <button class="btn toolbox__color-box"></button>
      <button class="btn toolbox__color-box"></button>
      <button class="btn toolbox__color-box"></button>
      <button class="btn toolbox__color-box"></button>
    </div>

    <div class="d-flex mt-4">
      <input type="text" class="form-control" placeholder="#1e304f" />
      <button class="btn btn-apply">Apply</button>
    </div>

    <div class="mt-4 mb-4">
      <chrome-picker :value="colors" @input="updateValue" class="color-picker__box"></chrome-picker>
    </div>
  </div>
</template>

<script>
import { Chrome } from "vue-color";

let defaultProps = {
  hex: "#194d33e6",
  hsl: {
    h: 150,
    s: 0.5,
    l: 0.2,
    a: 0.9
  },
  hsv: {
    h: 150,
    s: 0.66,
    v: 0.3,
    a: 0.9
  },
  rgba: {
    r: 25,
    g: 77,
    b: 51,
    a: 0.9
  },
  a: 0.9
};

export default {
  components: {
    "chrome-picker": Chrome
  },

  data() {
    return {
      colors: defaultProps
    };
  },

  methods: {
    updateValue(value) {
      this.colors = value;
    }
  }
};
</script>


<style lang="scss" scoped>
.color-picker {
  &__box {
    width: 100%;
  }

  .form-control {
    height: 36px;
  }
}
.btn-apply {
  margin-left: 8px;
  padding: 0;

  width: 100px;
  height: 36px;

  color: #fff;
  background-color: #f89821;
  border-radius: 2px;
}
</style>