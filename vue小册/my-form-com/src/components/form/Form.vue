<template>
  <form>
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "iForm"
})
export default class extends Vue {}
</script>

<style></style>
