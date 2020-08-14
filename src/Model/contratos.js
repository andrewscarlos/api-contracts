const mongoose = require('mongoose')

const ContratosSchema = new mongoose.Schema({

    state:{type: String, default: 'Create'},

    nome: { type: String, required: true },
    email: { type: String, required: true },
    cpf: { type: String, required: true },
    valorEmprestimo: { type: Number, required: true },

    rendaMensal: { type: Number, default: null},
    dataNascimento: { type: Date, default: null }, 
    estadoCivil: { type: String , default: null},
    endereco: {type: String, default: null},
    
    cNHorCPF: {type: String, default: null},
    comprovanteRenda: {type: String, default: null},
    imovel: { type: String, default: null},

    status: Boolean,
},{
    timestamps: true
})

const Contratos = mongoose.model('Contratos', ContratosSchema)

module.exports = Contratos