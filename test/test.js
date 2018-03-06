var path = require('path');
var baseImg = require('base64-img');
var { faceMerge } = require('../index');

function doMerge(){
    baseImg.base64(path.join(__dirname,'../assets/je.jpg'),function(err,imageData){
        if(err){
            console.log('图片base64发生错误：',err);
        }

        faceMerge('','',imageData,15)
            .then(res=>{
                let data = `data:image/jpeg;base64,${res.data.image}`;
                baseImg.img(data, 'dest', '1', function(err, filepath) {});
            })
            .catch(err=>{
                console.log(err);
            })
    })
}

doMerge();