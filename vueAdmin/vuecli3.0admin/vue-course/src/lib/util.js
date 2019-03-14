import Cookies from 'js-cookie'
import clonedeep from 'clonedeep'

export const setToken = (token, tokenName = 'token') => {
    Cookies.set(tokenName, token)
}

export const getToken = (tokenName = 'token') => {
    return Cookies.get(tokenName)
}

export const doCustomTimes = (times, callback) => {
    let i = -1
    while(++i < times){
        callback(i)
    }
}

export const putFileInFolder = (folderList, fileList) => {  
    const folderListCloned = clonedeep(folderList)
    const fileListCloned = clonedeep(fileList)
    return folderList.map(folderItem => {
        const folderId = folderItem.id
        let index = fileListCloned.length
        while(--index){
            const fileItem = fileListCloned[index]
            if(fileItem.folder_id === folderId){
                // splice 返回数组，如果不删除，返回空数组
                const file = fileListCloned.splice(index,1)[0]
                file.title = file.name
                if(folderItem.children) folderItem.children.push(file)
                else folderItem.children = [file] //将children转为数组
            }
        }
        folderItem.type = 'folder'
        return folderItem
    })
}

export const transforFolderToTree = folderList => {
    if(!folderList.length) return []
    const folderListCloned = clonedeep(folderList)
    const handle = id => {
        let arr = []
        folderListCloned.forEach(folder => {
            if(folder.folder_id === id){
                const children = handle(folder.id)
                if(folder.children) folder.children = [].concat(folder.children, children)
                else folder.children = children
                folder.title = folder.name
                arr.push(folder)
            }
        })
        return arr
    }
    return handle(0)
}