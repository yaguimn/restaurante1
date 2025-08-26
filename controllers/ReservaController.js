import RESERVA from '../models/Reserva.js'; 

const ReservaController = {
    showFormReserva: (req, res) => {
        res.render('formulario', { mensagem: "Preencha o formulário e garanta sua mesa!" });
    },
    addNewReserva: async (req, res) => {
        const { nome, data, horario, pessoas } = req.body;
        try {
            await RESERVA.create({
                nome,
                data,
                horario,
                pessoas
            });
            res.redirect('/?mensagem=Reserva feita com sucesso!');
        } catch (error) {
            console.error("Erro ao adicionar reserva:", error);
            res.status(500).send('Ocorreu um problema ao processar sua reserva. Tente novamente.');
        }
    }
}

export default ReservaController;
