var urlencode = require('urlencode');
const crypto = require('crypto');

function getReqSign(params,appkey){
    var paramStr = obj2Str(params);
    var sign = crypto.createHash('md5').update(paramStr + `&app_key=${appkey}`).digest('hex').toUpperCase();
    return sign;
}

function obj2Str(obj){
    var sortedObj = Object.keys(obj).sort();
    var str = '',newObj={};
    for(let i =0;i<sortedObj.length;i++){
        if(obj[sortedObj[i]] !== ''){
            str += `${sortedObj[i]}=${urlencode(obj[sortedObj[i]])}&`;
        }
        newObj[sortedObj[i]] = urlencode(obj[sortedObj[i]]);
    }
    if(str.length>0){
        return str.substring(0,str.length-1);
    }
}

module.exports.getReqSign = getReqSign;
module.exports.obj2Str = obj2Str;