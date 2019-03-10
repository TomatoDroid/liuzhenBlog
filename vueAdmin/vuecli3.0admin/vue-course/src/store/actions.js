import {queryName} from '@/api/login'

const actions = {
    // asyncSetName({commit}){
    //     queryName().then(resolve => {
    //         const {info:{appName}} = resolve
    //         commit('SET_APP_NAME',appName)
    //     })
    // }
    async asyncSetName({commit}){
        try {
            const {info:{appName}} = await queryName()
            commit('SET_APP_NAME', appName)
        } catch (error) {
            console.log(error)
        }
    }
}
export default actions