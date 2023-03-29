const cors_proxy = require('cors-anywhere')

let port = process.env.PORT || 8080;

cors_proxy.createServer({
    originWhiteList:[],
    requireHeader : ['origin' , 'x-requested-width'],
    Headers : ['cookie','cookie2']
}).listen(port,()=>{
    console.log(`running on port: ${port}`);
})

