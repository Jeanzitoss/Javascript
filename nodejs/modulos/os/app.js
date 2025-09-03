// importando o modulo os (operating system)
const os = require('os');

// exibindo infosmacoes do sistema operacional
// exibindo a arquitetura do sistema
console.log('Arquitetura do sistema:', os.arch());
// exibindo a quantidade de CPU
console.log('Quantidade de CPUs:', os.cpus().length);
// exibindo a quantidade de memoria em bytes
console.log('Memória total (bytes):', os.totalmem());
// exebindo a quantidade de memoria livre em bytes
console.log('Memória livre (bytes):', os.freemem());
// exibindo o sistema operacional
console.log(os.platform());