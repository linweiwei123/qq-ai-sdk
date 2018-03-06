# qq-ai-sdk
Javascript sdk for QQ AI （https://ai.qq.com, I don't means to make a advertisement,i hate Tencent !);
Used in Node.js、browser.

# demo website
https://github.com/linweiwei123/face-merge

## How to use？
npm install qq-ai-sdk --save

```
var { faceMerge } = require('qq-ai-sdk');

/**
* @param appid (appid in your app in https://ai.qq.com)
* @param appkey (appkey in your app in https://ai.qq.com)
* @param imageData (to be merged image, base64 data!!!,support jpg,jpeg,png)
* @param model (merged template number)
* @response promise
**/
faceMerge(appid,appkey,imageData,15)
        .then(res=>{
            // this data is final merged base64 image data
            let data = `data:image/jpeg;base64,${res.data.image}`;
        })
        .catch(err=>{
            console.log(err);
        })
```
## current support QQ AI API
- face merge API,  see https://ai.qq.com/doc/facemerge.shtml

## contact
My email: yitalalww@gmail.com
