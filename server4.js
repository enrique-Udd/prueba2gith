const path =require('path')
const {createReadStream}=require('fs')
const {createServer} =require('http')

//configuramos con una variable de entorno el puerto
const {PORT=3000}=process.env

const HTML_CONTENT_TYPE = 'text/html'
const CSS_CONTENT_TYPE ='text/css'
const JS_CONTENT_TYPE = 'text/javasprip'

const PUBLIC_FOLDER = path.join(__dirname, 'public')

console.log(`Public folder path: ${PUBLIC_FOLDER}`);
// creamos un requestListener para pasarle a nuestro servidor
const requestListener =(req,res) =>{
    const {url}=req
    let statusCode =200
    let contentType =HTML_CONTENT_TYPE
    let stream

    console.log(`Request URL: ${url}`);

// si estamos pidiendo la ruta principal, delvolvemos el contenido del index.html
 if(url=='/'){
  const indexPath = path.join(PUBLIC_FOLDER, 'index.html');
  console.log(`Index path: ${indexPath}`);
  stream = createReadStream(indexPath);
} else if (url.match(/\.css$/)) {
  contentType = CSS_CONTENT_TYPE
  stream= createReadStream(path.join(PUBLIC_FOLDER, url)) 
} else if (url.match(/\.js$/))  {// para los archivos javascript
  contentType = JS_CONTENT_TYPE
  stream= createReadStream(path.join(PUBLIC_FOLDER, url)) 
} else{
    statusCode =404
}

// escribimos las cabeceras de la respuesta dependiendo de la repuest
res.writeHead(statusCode,{'Content-Type': contentType})
// si tenemos un stream,lo enviamosa la respuesta
if (stream) stream.pipe(res)
// si no, devolvemos un string diciendo que no hemos encontrado nada
else return res.end('Not found')
}

// creamos un servidor con el requestListener
const server = createServer(requestListener)

// hacemos que el servidor escuche el puerto configurado
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});