const uploadValidation = async (req, res, next) => {

    const {
        cNHorCPF
    } = req.files;
    
    if (!cNHorCPF ) {
        return res.status(400).json({ error: 'É necessario o envio uma foto do CPF ou CNH' })
    } 
     next()
    }

module.exports = uploadValidation