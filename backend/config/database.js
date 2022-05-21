const mongoose = require('mongoose');

//Criando conexão com o mongoDB => Parâmetros (porta e nome do banco);
module.exports = mongoose.connect('mongodb://localhost/db_finance', {useMongoClient:true});