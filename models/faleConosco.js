import { Sequelize, sequelize } from './db.js';

const FALE_CONOSCO = sequelize.define('faleConosco', {
    id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email:{
      type: Sequelize.STRING,
      allowNull: false
   },
  nome: {
      type: Sequelize.STRING,
      allowNull: false
   },
   Mensagem: {
      type: Sequelize.STRING,
      allowNull: false
   }
})
sequelize.sync({ force: false })
   .then(() => {  
      console.log('Tabela faleconosco criada com sucesso!');
   })
   .catch((error) => {
      console.error('Erro ao criar tabela faleconosco:', error);
   });
export default FALE_CONOSCO;
