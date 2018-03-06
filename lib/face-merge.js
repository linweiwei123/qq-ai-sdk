const request = require('superagent');
const urlencode = require('urlencode');
const utils = require('./utils');
const url = 'https://api.ai.qq.com/fcgi-bin/ptu/ptu_facemerge';
const PS = require('./ProxyServices');

function requestMergeApi(appid,appkey,imageData,model){
    imageData = imageData.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
    let params = {
        app_id: appid,
        image: imageData,
        model: model || 27,
        time_stamp: Math.floor(new Date().getTime()/1000),
        nonce_str: makeid(),
        sign: ''
    };
    params.sign = utils.getReqSign(params,appkey);

    return new Promise((resolve,reject)=>{
        request.post(url)
            .set('Content-type','application/x-www-form-urlencoded')
            .send('app_id='+params.app_id)
            .send('image='+urlencode(params.image))
            .send('model='+params.model)
            .send('time_stamp='+params.time_stamp)
            .send('nonce_str='+params.nonce_str)
            .send('sign='+params.sign)
            .then(
                res => {
                    resolve(res.body)
                }
            )
            .catch(err => {
                reject(err);
            })
    })

}

function faceMege2(imageData,appkey){
    return PS(url, appkey, {
        app_id: 1106759498,
        image: imageData,
        model: 7,
        time_stamp: Math.floor(new Date().getTime()/1000),
        nonce_str: makeid()
    });
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 20; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


module.exports.faceMerge = requestMergeApi;

