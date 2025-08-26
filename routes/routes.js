import express from 'express';
import ReservaController from '../controllers/ReservaController.js';
import FaleController from '../controllers/FaleController.js';
import { getMenu } from '../controllers/menuController.js';


const router = express.Router();
router.get('/', (req, res) => {
    res.render('Base', { title: "Bistrô Aromas" });
});

router.get('/reserva/new', ReservaController.showFormReserva);
router.post('/reserva/add', ReservaController.addNewReserva);

router.get('/fale/new', FaleController.showFormFale);
router.post('/fale/add', FaleController.addNewFale);
router.get('/cardapio', getMenu);


export default router;
