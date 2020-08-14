//const criacaoValidation = require('../Model/contratos')


const criacaoValidation = async (req, res, next) => {
    const {
       // Nome,
        Email,
        Cpf,
        ValorEmprestimo
    } = req.body;
    
   // if (!Nome ) {
       // return res.status(400).json({ error: 'O Nome é Obrigatorio !' })
  //  } 
    if (!Email) {
        return res.status(400).json({ error: 'O Email é obrigatorio !' })
    } else if (!Cpf) {
        return res.status(400).json({ error: 'O Cpf é obrigatorio !' })
    } else if (!ValorEmprestimo) {
        return res.status(400).json({ error: 'O Valor do Emprestimo é obrigatorio !' })
    } 
     next()
    

}

module.exports = criacaoValidation