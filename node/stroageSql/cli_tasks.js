var fs = require('fs');
var path = require('path');
var args = process.argv.splice(2);
var command = args.shift();
var taskDescription = args.join(' ');
var file = path.join(process.cwd(),'/.tasks');

switch(command){
    case 'list':
        listTask(file);
        break;
    case 'add':
        addTask(file,taskDescription);
        break;
    default:
        console.log('Usage: '+process.argv[0]+' list|add [taskDescription]');
}

function  loadOrInitializeTaskArray(file,cb){
    fs.exists(file,function(exist){
        var tasks = [];
        if(exist){
            fs.readFile(file,function(err,data){
                if(err) throw err;
                console.log('data',data);
                var data = data.toString();
                console.log('data.toString()-------',data);
                // 把用JSON编码的待办事项数据解析到任务数组中
                tasks = JSON.parse(data || '[]');
                cb(tasks);
            });
        }else{
            cb([]);
        }
    });
}
function listTask(file){
    loadOrInitializeTaskArray(file,function(tasks){
        for(var i in tasks){
            console.log(tasks[i]);
        }
    });
}
function storeTasks(file,tasks){
    fs.writeFile(file,JSON.stringify(tasks),'utf8',function(err){
        if(err) throw err;
        console.log('Saved!');
    });
}
function addTask(file,taskDescription){
    loadOrInitializeTaskArray(file,function(tasks){
        tasks.push(taskDescription);
        storeTasks(file,tasks);
    });
}
