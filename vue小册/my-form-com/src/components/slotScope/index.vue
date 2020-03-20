<template>
    <ul>
        <li v-for="(item, index) in data" :key="index">
            <slot :li="item">
                {{ item.name }}
            </slot>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style></style>
