const Contratos = require('../Model/contratos')

const index = async (req, res) => {

    try{
        const contratos = await Contratos.findOne({_id: req.params.id})
        if (contratos == null) {
            console.log('if 1')
            return res.status(401).json({ error: "Id Inexistente."}) // verifica se o id existe
        }
        if(contratos.state == 'Upload'){
       
            const result = Math.random(1, 10)

            if(result / 2 == 0){
                
                await contratos.update({
                    status: 'Aprovado'
                })
            }else{
                
                await contratos.update({
                    status: 'Reprovado'
                })
            }
            if(contratos.status == 'Aprovado'){
                console.log('if 3')
                return res.status(200).json({
                    Resultado: 'É com grande alegria que dizemos ao Sr(a) que seu emprestimo foi altorizado !!!'
                })
            }else{
                return res.status(200).json({
                    Resultado: 'É com grande tristeza que dizemos ao Sr(a) que seu emprestimo foi recusado !!!'
                })
            }
        }
        return res.status(200).json({
            
            Mensagem: 'O seu state precisa estar como Upload '
        })

       
       
    }catch(error){
        if(error){
            console.log('if 4')
            return res.status(500).json(error)
        }
    } 
}

module.exports = {
    index
}
