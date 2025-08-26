import MenuModel from '../models/MenuModel.js';

const menuModel = new MenuModel();

export async function getMenu(req, res) {
    try {
        const produtos = await menuModel.getMenu();
        res.render('cardapio', { produtos });
    } catch (error) {
        console.error("Erro ao ler produtos do cardápio:", error);
        res.status(500).send("Erro ao ler produtos do cardápio.");
    }
}


