// 向上查找最近的指定组件
export function findComponentUpward(context: any, componentName: string) {
    let parent = context.$parent
    let name = parent.$options.name
    while (parent && (!name || componentName.indexOf(name) < 0)) {
        parent = parent.$parent
        if (parent) {
            name = parent.$options.name
        }
    }
    return parent
}
// 向上找到所有的指定组件
export function findComponentsUpward(context: any, componentName: string) {
    const parents: Array<any> = []
    const parent = context.$parent
    if (parent) {
        if (parent.$options.name === componentName) {
            parents.push(parent)
        }
        return parent.concat(findComponentsUpward(parent, componentName))
    } else {
        return []
    }
}
// 向下找到制定组件
// 先找第一个子节点的子节点，没有再开始第二个子节点
export function findComponentDownward(context: any, componentName: string) {
    const children = context.$children
    let child = null
    if (children.length) {
        for (const item of children) {
            const name = item.$options.name
            if (name === componentName) {
                child = item
                break
            } else {
                child = findComponentDownward(item, componentName)
                if (child) break
            }
        }
    }
    return child
}
// 由一个组件，向下找到所有指定的组件
export function findComponentsDownward(context: any, componentName: string) {
    return context.$children.reduce((components, child) => {
        if (child.$options.name === componentName) {
            components.push(child)
        }
        const foundChilds = findComponentsDownward(child, componentName)
        return components.concat(foundChilds)
    }, [])
}
// 找到指定组件的兄弟组件——findBrothersComponents
export function findBrothersComponents(context: any, componentName: string, except = true) {
    const res = context.$parent.$children.filter((child) => {
        return child.$options.name === componentName
    })
    const index = res.findIndex((item) => item._uid === context._uid)
    if (except) {
        res.splice(index, 1)
    }
    return res
}

function typeOf(obj) {
    const toString = Object.prototype.toString
    const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    }
    return map[toString.call(obj)]
}

// 深拷贝
export function deepCopy(data) {
    const t = typeOf(data)
    let o
    if (t === 'array') {
        o = []
    } else if (t === 'object') {
        o = {}
    } else {
        return data
    }
    if (t === 'array') {
        for (let i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]))
        }
    } else if (t === 'object') {
        for (const i in data) {
            o[i] = deepCopy(data[i])
        }
    }
    return o
}
