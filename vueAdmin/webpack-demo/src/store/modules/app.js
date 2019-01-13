import Cookies from 'js-cookie';

const app = {
    state:{
        sidebar:{
            opend: !+Cookies.get('sidebarStatus'),
            withoutAnimation:false,
        },
        device: 'desktop',
    },
    mutations:{
        TOGGLE_SIDEBAR: state => {
            if(state.sidebar.opend){
                Cookies.set('sidebarStatus',1);
            }else{
                Cookies.set('sidebarStatus',0);
            }
            state.sidebar.opend = !state.sidebar.opend;
            state.sidebar.withoutAnimation = false;
        },
        CLOSE_SIDEBAR: (state, withoutAnimation) => {
            Cookies.set('sidebarStatus',1);
            state.sidebar.opend = false;
            state.sidebar.withoutAnimation = withoutAnimation;
        },
        TOGGLE_DEVICE:(state, device) =>{
            state.device = device;
        }
    },
    actions:{
        // https://github.com/PanJiaChen/vue-admin-template.git
        ToggleSideBar:({commit}) => {
            commit('TOGGLE_SIDEBAR');
        },
        CloseSideBar: ({commit}, withoutAnimation) => {
            commit('CLOSE_SIDEBAR',withoutAnimation);
        },
        ToggleDevice: ({commit}, device) => {
            commit('TOGGLE_DEVICE', device);
        }
    }
}