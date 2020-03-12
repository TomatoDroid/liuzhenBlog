import { Component, Vue } from 'vue-property-decorator'

function broadcast(this: any, componentName: string, eventName: string, params: any): void {
    this.$children.forEach(
        (child: {
            $options: { name: any }
            $emit: { apply: (arg0: any, arg1: string[]) => void }
        }) => {
            const name = child.$options.name
            if (name === componentName) {
                child.$emit.apply(child, [eventName].concat(params))
            } else {
                broadcast.call(child, componentName, eventName, params)
            }
        }
    )
}

@Component
export default class extends Vue {
    dispatch(componentName: string, eventName: string, params: any): void {
        let parent = this.$parent || this.$root
        let name = parent.$options.name

        while (parent && (!name || name !== componentName)) {
            parent = parent.$parent
            if (parent) {
                name = parent.$options.name
            }
        }
        if (parent) {
            parent.$emit.apply(parent, [eventName, params])
            // parent.$emit.apply(eventName, params)
        }
    }

    broadcast(componentName: string, eventName: string, params: any) {
        broadcast.call(this, componentName, eventName, params)
    }
}
