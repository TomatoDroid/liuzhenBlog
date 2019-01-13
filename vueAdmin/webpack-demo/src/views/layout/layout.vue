<template>
    <div>
        <sidebar></sidebar>
    </div>
</template>
<script>
import { Sidebar } from './components/index.js';

export default {
    name:'layout',
    components:{
        Sidebar,
    },
    computed: {
        sidebar(){
            return this.$store.state.app.sidebar;
        }
    },
}
</script>