import FALE_CONOSCO from '../models/faleConosco.js'; 

const FaleController = {
    showFormFale: (req, res) => {
        res.render('fale');
    },
    addNewFale: async (req, res) => {
        const {nome, email, mensagem} = req.body
        try{
            await FALE_CONOSCO.create({
                nome: nome,
                email: email,
                Mensagem: mensagem
            });
            res.redirect('/');
        } catch (error) {
            console.error("Error adding FALE_CONOSCO", error);
            res.status(500).send('Error ao adicionar mensagem' + error.message);
        }
    }
}
    export default FaleController;