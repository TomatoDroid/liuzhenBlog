<template>
    <div class="folder-wrapper">
        <Tree :data="folderTree" :render="renderFun"></Tree> 
    </div>
</template>
<script>
import { getFileList, getFolderList } from '@/api/data'
import { putFileInFolder, transforFolderToTree } from '@/lib/util'
export default {
    data() {
        return {
            folderTree: [],
            renderFun:(h, {root, node, data}) => {
                return (
                    <div class="tree-item">
                        {data.type === 'folder' ? <Icon type="ios-folder" color="#2d8cf0" style="margin-right: 10px;"/> : ''}
                        {data.title}
                    </div>
                )
            }
        } 
    },
    mounted() {
        Promise.all([ getFolderList(), getFileList()]).then(res => {
            this.folderTree = transforFolderToTree(putFileInFolder(res[0], res[1]))
            console.log(res[0])
            console.log(this.folderTree)
            // 问一下具体的调剂情况，比如分数要求，大概什么时候复试等等等等
        })
    },
}
</script>
<style lang="less">
.folder-wrapper{
    width: 300px;
    .tree-item{
        display: inline-block;
        width: ~"clac(100% - 50px)";
        height: 30px;
        line-height: 30px;
    }
}
</style>
