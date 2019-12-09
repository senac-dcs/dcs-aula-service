exports.getAulas = async (req, res) => {
    
    const idAula = req.params.id;
    
    if(idAula){
        return res.json({oi: idAula});
    } else {
        return res.json({oi: "contrllers"});
    }

};

exports.createAula = async (req, res) => {
    
    return res.json({aula: "criada"});

};

exports.updateAula = async (req, res) => {
    
    const idAula = req.params.id;
    
    if(!idAula){
        return res.status(400).json({message: "Course ID is required"});
    }
    
    try{
        return res.json({aula: "atualizada"});
    } catch (err){
        return res.status(400).json({aula: "Error"});
    }
    
};

exports.deleteAula = async (req, res) => {

    return res.json({aula: "deletada"});

};