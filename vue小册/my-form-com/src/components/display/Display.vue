<template>
    <div ref="display" class="wrapper"></div>
</template>

<script>
import randomStr from '../../utils//random_str'
import Vue from 'vue'

export default {
    props: {
        code: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            html: '',
            js: '',
            css: '',
            component: null,
            id: randomStr()
        }
    },
    watch: {
        code() {
            this.destoryCode()
            this.renderCode()
        }
    },
    mounted() {
        this.renderCode()
    },

    beforeDestroy() {
        this.destoryCode()
    },
    methods: {
        getSource(source, type) {
            const regex = new RegExp(`<${type}[^>]*>`)
            let openingTag = source.match(regex)

            if (!openingTag) {
                return ''
            } else {
                openingTag = openingTag[0]
            }

            return source.slice(
                source.indexOf(openingTag) + openingTag.length,
                source.indexOf(`</${type}>`)
            )
        },
        splitCode() {
            const script = this.getSource(this.code, 'script').replace(/export default/, 'return ')
            const style = this.getSource(this.code, 'style')
            // const template = '<div id="dis">' + this.getSource(this.code, 'template') + '</div>'
            const template = this.getSource(this.code, 'template')

            this.js = script
            this.css = style
            this.html = template
        },
        renderCode() {
            this.splitCode()
            if (this.html !== '' && this.js !== '') {
                const parseStrToFunc = new Function(this.js)()
                parseStrToFunc.template = this.html
                const Component = Vue.extend(parseStrToFunc)
                this.component = new Component().$mount()
                // this.component 是vue组件对象
                // $el 是文档对象
                this.$refs.display.appendChild(this.component.$el)
                if (this.css !== '') {
                    const style = document.createElement('style')
                    style.type = 'text/css'
                    style.id = this.id
                    style.innerHTML = this.css
                    document.getElementsByTagName('head')[0].appendChild(style)
                }
            }
        },
        destoryCode() {
            const $target = document.getElementById(this.id)
            // 移除style
            if ($target) {
                $target.parentNode.removeChild($target)
            }
            if (this.component) {
                this.$refs.display.removeChild(this.component.$el)
                this.component.$destory()
                this.component = null
            }
        }
    }
}
</script>

<style></style>
