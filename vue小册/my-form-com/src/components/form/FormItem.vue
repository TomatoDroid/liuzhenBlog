<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Emitter from '../../mixins/emitter'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
@Component({
  name: 'FormItem'
})
export default class extends mixins(Vue, Emitter) {
  @Prop(String)
  readonly label: string | undefined
  @Prop(String)
  readonly prop: string | undefined
}
</script>

<style></style>
