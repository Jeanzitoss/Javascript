module.exports = {
  gerarMensagemPersonalizada: (nome, senha) => {
    let status;

    if (nome === "Jean" && senha === "12345") {
        status = "foi liberado";
    } else {
        status = "foi bloqueado, verifique o seu nome e senha";
    }

    return `Olá, ${nome}! Você ${status}`;
  }
};