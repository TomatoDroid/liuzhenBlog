var image = document.querySelector('img');
var progress = document.querySelector('#progress');

document.querySelector('#photo').onchange = function(){
    var files = this.files;
    if(files.length === 0){
        return;
    }
    var file = this.files[0];
    uploadFile(file);
    readAsDataUrl(file,image);
}

function uploadFile(file){
    var formData = new FormData();
    formData.append(file.name,file);
    $.ajax({
        url:'http://127.0.0.1:3000',
        type:'POST',
        data:formData,
        contentType:false,
        processData:false,
        beforeSend:function(xhr){
            xhr.upload.onprogress = function(e){
                var percent = Math.floor(e.loaded/e.tatal*100);
                progress.innerText = percent+'%';
            }
        },
        success:function(resp){
            progress.innerText = '上传成功';
        },
        error:function(){
            progress.innerText = '上传失败';
        }
    });
}
function readAsDataUrl(file,image){
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e){
        image.src = this.result;
    }
    image.style.display = 'block';
}