const mongoose = require('mongoose')

const ContratosSchema = new mongoose.Schema({

    State:{type: String, default: 'Create'},

    Nome: { type: String, required: true },
    Email: { type: String, required: true },
    Cpf: { type: String, required: true },
    ValorEmprestimo: { type: Number, required: true },

    RendaMensal: { type: Number, default: null},
    DataNascimento: { type: Date, default: null }, 
    EstadoCivil: { type: String , default: null},
    Endereco: {type: String, default: null},
    
    CNHorCPF: String,
    ComprovanteRenda: {type: String, default: null},
    Imovel: { type: String, default: null},

    Status: Boolean,
},{
    timestamps: true
})

const Contratos = mongoose.model('Contratos', ContratosSchema)

module.exports = Contratos