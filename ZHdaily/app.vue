<template>
    <div class="daily">
        <div class="daily-menu">
            <div class="daily-menu-item" :class="{on:type === 'recommend'}" 
                @click="handleToRecommand">每日推荐</div>
            <div class="daily-menu-item" :class="{on:type === 'daily'}"
                @click="showThemes = !showThemes">主题日报</div>
            <ul v-show="showThemes">
                <li v-for="item in themes" :key="item.id">
                    <a :class="{on:item.id === themesId && type === 'daily'}"
                        @click="handleToTheme(item.id)">{{item.name}}</a>
                </li>
            </ul>
        </div>
        <div class="daily-list" ref="list">
            <template v-if="type === 'recommend'">
                <div v-for="list in recommandList" :key="list.id">
                    <div class="daily-date">{{ formatDay(list.date) }}</div>
                    <Item v-for="item in list.stories" :key="item.id" :data="item" 
                        @click.native="handleClick(item.id)"></Item>
                </div>
            </template>
            <template v-if="type === 'daily'">
                <Item v-for="item in list" :data="item" :key="item.id"
                    @click.native="handleClick(item.id)"></Item>
            </template>
        </div>
        <daily-article :id="articleId"></daily-article>
    </div>
</template>
<script>
import $ from './libs/util.js';
import Item from './componens/item.vue';
import dailyArticle from './componens/daily-article.vue';

export default {
    components: {
        Item,
        dailyArticle
    },
    data () {
        return {
            themes:[],
            showThemes:false,
            type:'recommend',
            list:[],
            themesId:0,
            recommandList:[],
            dailyTime:$.getTodayTime(),
            isLoading:false,
            articleId:0
        }
    },
    methods: {
        getThemes(){
            $.ajax.get('themes').then(res => {
                this.themes = res.others;
            });
        },
        handleToTheme(id){
            // 改变菜单分类
            this.type = 'daily';
            // 设置当前点击子类的主题日报id 
            this.themesId = id;
            // 清空当前数据
            this.list = [];
            $.ajax.get('theme/'+id).then(res => {
                // 过滤掉类型为1的文章，该类型下的文章为空
                this.list = res.stories.filter(item => {
                    item.type !== 1;
                });
            });
        },
        handleToRecommand(){
            this.type = 'recommend';
            this.recommandList = [];
            this.dailyTime = $.getTodayTime();
            this.getRecommandList();
        },
        getRecommandList(){
            this.isLoading = true;
            const prevDay = $.prevDay(this.dailyTime+86400000);
            $.ajax.get('news/before/'+prevDay).then(res => {
                this.recommandList.push(res);
                this.isLoading = false;
            });
        },
        // 转换为带汉子的月日
        formatDay(date){
            let month = date.substr(4,2);
            let day = date.substr(6,2);
            if(month.substr(0,1) === '0') month = month.substr(1,1);
            if(day.substr(0,1) === '0') day = day.substr(1,1);
            return `${month} 月 ${day} 日`;
        },
        handleClick(id){
            this.articleId = id;
        }
    },
    mounted () {
        //初始化时调用
        this.getThemes();
        this.getRecommandList();
        // 获取Dom
        const $list = this.$refs.list;
        // 监听中栏的滚动事件
        $list.addEventListener('scroll',() =>{
            // 在主题日报或在加载推荐列表时停止操作
            if(this.type === 'daily' || this.isLoading) return;
            if( $list.scrollTop + document.body.clientHeight >= $list.scrollHeight ){
                // 事件相对减少一天
                this.dailyTime -= 86400000;
                this.getRecommandList();
            }
        });
    }
}
</script>
<style scoped>
    .daily-menu ul{
        list-style: none;
    }
    .daily-menu ul li a{
        display: block;
        color: inherit;
        text-decoration: none;
        padding: 5px 0;
        margin: 5px 0;
        cursor: pointer;
    }
    .daily-menu ul li a:hover,.daily-menu ul li a.on{
        color: #39f;
    }
</style>


