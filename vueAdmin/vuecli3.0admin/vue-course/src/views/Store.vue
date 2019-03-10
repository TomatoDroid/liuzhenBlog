<template>
    <div>
        <a-input v-model="inputValue"></a-input>
        <p>{{ inputValue }}</p>
        <p>
            <a-show />
        </p>
        <p>vuex: {{ appName }} ->version:{{ app_nameVersion }}</p>
        <p>modules-user: {{ userName }}</p>
        <button @click="mutationsAppName">修改Appname</button>
        <button @click="actionsAppName">延迟1s修改Appname</button>
        <p><a-input v-model="stateValue"></a-input> {{ stateValue }}</p>
    </div>
</template>
<script>
import AInput from '_c/AInput'
import AShow from '_c/AShow'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name:'store',
    components:{
        AInput,
        AShow
    },
    data() {
        return {
            inputValue:'liuzhen'        
        }
    },
    computed: {
        ...mapState({
            appName: state => state.appName,
            userName: state => state.user.user,
            // stateValue: state => state.stateValue
        }),
        ...mapGetters([
            'app_nameVersion'
        ]),
        stateValue:{
            get(){
                return this.$store.state.stateValue
            },
            set(newValue){
                this.SET_STATE_VALUE(newValue)
            }
        }
    },
    methods: {
        ...mapMutations([
            'SET_APP_NAME',
            'SET_STATE_VALUE'
        ]),
        ...mapActions([
            'asyncSetName'
        ]),
        mutationsAppName(){
            this.SET_APP_NAME('test')
        },
        actionsAppName(){
            this.asyncSetName()
        }
    },
}
</script>