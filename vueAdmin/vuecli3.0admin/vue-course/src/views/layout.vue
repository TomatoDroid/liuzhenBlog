<template>
    <div class="layout-wrapper">
        <Layout class="layout-outer">
            <Sider collapsible hide-trigger v-model="collapsed">
                <side-menu :parent="list" :collapsed="collapsed"></side-menu>
            </Sider>
            <Layout>
                <Header class="layout-header">
                    <Icon :class="triggerClasses" @click="handleClick" type="md-menu" size="32"/>
                </Header>
                <Content class="layout-content">
                    <Card class="layout-content-card">
                        <router-view/>
                    </Card>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import SideMenu from '_c/side-menu'

export default {
    components:{
        SideMenu,
    },
    data() {
        return {
            collapsed:false,
            list:[
                {
                    title:'111',
                    name:'menu1',
                    icon:'ios-alarm'
                },
                {
                    title:'222',
                    name:'menu2',
                    icon:'ios-alarm'
                },
                {
                    title:'333',
                    name:'menu3',
                    icon:'ios-alarm',
                    children:[
                        {
                            title:'333-1',
                            name:'menu333-1',
                            icon:'ios-alarm'
                        },
                        {
                            title:'333-2',
                            name:'menu333-2',
                            icon:'ios-alarm',
                            children:[
                                {
                                    title:'333-2-1',
                                    name:'menu333-2-1',
                                    icon:'ios-alarm'
                                },
                                {
                                    title:'333-2-2',
                                    name:'menu333-2-2',
                                    icon:'ios-alarm'
                                },
                                {
                                    title:'333-2-3',
                                    name:'menu333-2-3-1',
                                    icon:'ios-alarm',
                                    children:[
                                        {
                                            title:'333-2-3-1',
                                            name:'menu333-2-3-1',
                                            icon:'ios-alarm',
                                        }
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        }
    },
    computed: {
        triggerClasses(){
            return [
                'trigger-icon',
                this.collapsed ? 'rotate' : ''
            ]      
        }
    },
    methods: {
        handleClick(){
            this.collapsed = !this.collapsed
        }
    },
}
</script>
<style lang="less">
.layout-wrapper, .layout-outer{
    height: 100%;
    .layout-header{
        background: white;
        box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .1);
        padding: 0 23px;
        .trigger-icon{
            cursor: pointer;
            transition: transform .3s ease-in;
            &.rotate{
                transform: rotateZ(-90deg);
                transition: transform .3s ease-in;
            }
        }
    }   
    .layout-content{
        padding: 10px;
        &-card{
            min-height: ~'calc(100vh - 10px)'
        }
    } 
}
</style>
