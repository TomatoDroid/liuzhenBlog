<template>
    <form>
        <slot></slot>
    </form>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
    name: 'iForm'
})
export default class extends Vue {
    @Prop({
        type: Object
    })
    model: any
    @Prop({
        type: Object
    })
    rules: any
}
</script>

<style></style>
