<template>
  <div class="toolbox-components">
    <background-editor class="editor"></background-editor>
    <photo-editor class="editor"></photo-editor>
    <text-editor class="editor"></text-editor>
    <color-picker class="editor"></color-picker>
  </div>
</template>

<script>
import BackgroundEditor from "./background_editor";
import TextEditor from "./text_editor";
import PhotoEditor from "./photo_editor";
import ColorPicker from "./color_picker";

export default {
  components: {
    BackgroundEditor,
    TextEditor,
    PhotoEditor,
    ColorPicker
  }
};
</script>

<style lang="scss" scoped>
.editor {
  margin: 50px auto;
}
</style>


