const {createReadStream}=require('fs')
const {createServer}= require('http')
const {PORT =3000} =process.env
const HTML_CONTENT_TYPE ='text/html'
const requireListener =(req, res)=>{
    res.wtriteHead(200, {'Content-Type':
        HTML_CONTENT_TYPE})
        createReadStream('./public/inde.html').pipe(res)
}
const server=createReadStream(requireListener)
server.listen(PORT) 