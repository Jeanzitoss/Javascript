//importa o modulo http nativo do Node.js
import http from 'http'

const PORT = 3000;

//cria o servidor
const server = http.createServer((request, Response) =>{
    const url = request.url;
    const method = request.method;

    //define o cabeçalho da resposta como HTML
    Response.setHeader('Content-Type', 'text/html; charset=utf-8');

    //roteamento básico
    if(url === '/'){
        Response.statusCode = 200;//ok
        Response.end('<h1>Página inicial</h1>');

    } else if(url === '/sobre' && method === 'GET'){
        Response.statusCode = 200;//ok
        Response.end('<h1>Sobre Nós</h1><p>Esta é uma aplicação de exemplo com Node.js puro.</p>');

    } else if(url === '/contato'){
        Response.statusCode = 200;//ok
        Response.end('<h1>Fale Conosco</h1>');

    } else {
        //se nenhuma rota corresponder
        Response.statusCode = 404;//not found
        Response.end('<h1>404 - Página não encontrada</h1>');
    }
    });

//inicia o servidor na porta especificada
server.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});