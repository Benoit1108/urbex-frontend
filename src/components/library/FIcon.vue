<template>
  <div v-html="iconSvg"></div>
</template>

<script>
import Feather from 'feather-icons';
export default {
  inheritAttrs: false,
  props: {
    size : {
      type: Number,
      required: false,
      default: 24
    },
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconSvg() {
      return Feather.icons[this.name].toSvg({ class: this.$attrs.class, width: this.size, height: this.size });
    },
  },
};
</script>