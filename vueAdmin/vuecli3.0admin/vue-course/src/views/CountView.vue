<template>
    <div>
        <count-to :end-val="50000.111"></count-to>
    </div>
</template>
<script>
import CountTo from '_c/countTo'
export default {
    name:'countView',
    components:{
        CountTo
    }
}
</script>