// Importando o módulo fs (file system)
const fs = require('fs');

// Lendo um arquivo de forma assíncrona
fs.readFile('exemplo.txt', 'utf8', (erro, dados) => {
    // Tratando erro
    if (erro) {
        // Adicionando o erro no console
        console.error('Erro ao ler o arquivo:', erro);
        // Retornando para nao executar o console.log abaixo
        return;
    }
    // Se nao houver erro, exibindo o conteudo do arquivo
    console.log('Conteúdo do arquivo:', dados);
});
// imprimindo uma mensagem antes da leitura do arquivo
console.log('esta mensagem aparece primeiro.');