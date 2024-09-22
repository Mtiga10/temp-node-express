const http = require('http')
const port = 5000

const server = http.createServer((req,res)=>{
    // console.log(req)
    if(req.url === '/'){
        res.end('welcome to our homepage')
    }
    if(req.url === '/about'){
        res.end('Here is our short History')
    }
    
    res.end(`
        <h1>Oops!</h1>
        <p>we cant seem to find page you are looking for</p>
        <a href = "/">back home</a>`)
})

server.listen(port)