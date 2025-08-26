import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class MenuModel {
    constructor() {
        this.filePath = path.join(__dirname, '../data/cardapio.json');
    }
    async getMenu() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.filePath, 'utf8', (err, data) => {
                if (err) {
                    return reject(err);
                }
                try {
                    const produtos = JSON.parse(data);
                    resolve(produtos);
                } catch (parseError) {
                    reject(parseError);
                }
            });
        });
    }
}

export default MenuModel;
