import { createServer } from "http"

createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello World</h1>')
}).listen(8080)