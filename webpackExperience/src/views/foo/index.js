import router from '../../router'
import template from './index.html'
import style from './style.css'

export default class{
    mount(container){
        document.title = 'foo'
        container.innerHTML = template
        container.querySelector('.foo_gobar').addEventListener('click',() => {
            router.go('/bar')
        })
    }
}
