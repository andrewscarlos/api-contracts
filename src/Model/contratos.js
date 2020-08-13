const mongoose = require('mongoose')

const ContratosSchema = new mongoose.Schema({

    Nome: String,
    Email: String,
    Cpf: String,
    ValorEmprestimo: Number,
    RendaMensal: Number,
    DataNascimento: Date,
    EstadoCivil: String,
    Endereco: String,
    CNHorCPF: String,
    ComprovanteRenda: Image,
    Imagens: Image,
    Status: Boolean,
},{
    timestamps: true
})

const Contratos = mongoose.model('Contratos', ContratosSchema)

module.exports = Contratos