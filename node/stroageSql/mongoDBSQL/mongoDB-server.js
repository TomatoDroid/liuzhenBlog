var mongodb = require('mongodb');
var server = new mongodb.Server('127.0.0.1',27017,{});
var client = new mongodb.Db('node',server,{w:1});

// 访问mongoDB集合
client.open(function(err){
    if(err) throw err;
    client.collection('text_insert',function(err, collection){
        if(err) throw err;
        console.log('We are now able to perform queries;');
        // 将文档插入集合
        client.insert({
            "title":"I like cake",
            "body":"It is quite good"
            },
            {safe:true},
            function(err,documents){
                if(err) throw err;
                console.log('Document ID is: '+documents[0]._id);
            }
        );
            
        // 更新文档数据
        var _id = new client.bson_serializer.ObjectID('');
        collection.update(
            {_id:_id},
            {$set:{"title":"I ate too much cake"}},
            {safe:true},
            function(err){
                if(err) throw err;
            }
        );
        // 搜索文档
        collection.find({"title":"I like cake"}).toArray(function(err,results){
            if(err) throw err;
            console.log(results);
        });
        // 删除文档
        var _id = new client.bson_serializer.ObjectID('');
        collection.remove({_id: _id},{safe:true},function(er){
            if(err) throw err;
        });
    });
});

