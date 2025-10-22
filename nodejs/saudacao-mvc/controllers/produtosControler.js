module.exports = {
  produtos: (req, res) => {
    res.sendFile('produtos.html', { root: './views' });
  },

  camisas: (req, res) => {
    res.sendFile('camisas.html', { root: './views' });
  },
};